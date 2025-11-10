import type { myItem } from "../items/types";
import type { myContainer } from "../types/types";
import { create } from "zustand";
import type { IInventoryState } from "./interfaces";
import { CHEST_TEST_ITEMS, INVENTORY_TEST_ITEMS } from "../types/consts";

/**
 * Проверяет, можно ли переместить предмет в целевой контейнер
 * 
 * @param item - проверяемый предмет
 * @param targetContainer - проверяемый контейнер
 * @returns boolean - можно или нельзя переместить предмет в целевой контейнер
 */
function canMoveItem(item: myItem, targetContainer: myContainer): boolean {
    return item.allowedContainers.includes(targetContainer as any);
};

/**
 * Проверяет специальные правила для двуручного оружия
 * 
 * @param item - проверяемый двуручный предмет
 * @param targetSlot - слот правой руки
 * @param equipment - любой предмет, лежащий в слоте левой руки
 * @returns boolean, boolean - флаги можно ли экипировать предмет и нужно ли очищать слот левой руки
 */
function checkTwoHandedWeaponRules(item: myItem, targetSlot: myContainer, equipment: any): {canEquip: boolean, needToClearLeftHand: boolean} {
    if (item.type === "twoHandWeapon" && targetSlot === "rightHand") {
        // Если в левой руке уже есть предмет - запрещаем надевать двуручное оружие
        if (equipment.leftHand !== null) {
            console.log("Нельзя брать двуручное оружие, так как левая рука занята!")
            return {
                canEquip: false, 
                needToClearLeftHand: false
            };
        }
        return {
            canEquip: true,
            needToClearLeftHand: false
        };
    }

    return {
        canEquip: true,
        needToClearLeftHand: false
    };
};

/**
 * Хелпер-функция для безопасного получения массива предметов по типу контейнера
 * 
 * @param state - текущее состояние общего инвентаря
 * @param container - проверяемый контейнер
 * @returns возвращает массив предметов/null`ов, или просто null, если контейнер является слотом экипировки
 */
function getContainerItems(state: IInventoryState, container: myContainer): (myItem | null)[] | null {
    if (container === "chest") return state.chestItems;
    if (container === "inventory") return state.inventoryItems;
    return null;
};

/**
 * Хранилище состояния инвентаря, созданное с помощью Zustand.
 * Управляет всеми предметами в сундуке и инвентаре, а также операциями с ними
 */
export const useInventoryStore = create<IInventoryState>((set, get) => ({
    /**
     * Начальное состояние сундука: 25 ячеек, первые 5 заполнены тестовыми предметами
     * Остальные ячейки пусты (null)
     */
    chestItems: CHEST_TEST_ITEMS,

    /**
     * Начальное состояние инвентаря: 15 ячеек, первые 3 заполнены тестовыми предметами
     */
    inventoryItems: INVENTORY_TEST_ITEMS,

    /**
     * Начальное состояние экипировки - все слоты пусты
     */
    equipment: {
        helmet: null,
        gloves: null,
        bracers: null,
        shoulderPads: null,
        leftHand: null,
        rightHand: null,
        chestArmor: null,
        belt: null,
        footArmor: null,
        boots: null,
    },

    /**
     * Основной метод перемещения предметов.
     * Автоматически определяет тип операции (перемещение или замена)
     * в зависимости от того, пуста ли целевая ячейка
     */
    moveItem: (fromContainer, toContainer, fromIndex, toIndex) => {
        const state = get();
        
        // Проверяем, является ли целевой контейнер экипировкой
        const isToEquipment = toContainer in state.equipment;
        const isFromEquipment = fromContainer in state.equipment;

        // Если перемещаем между двумя слотами экипировки
        if (isFromEquipment && isToEquipment) {
            get().swapEquipmentSlots(
                fromContainer as keyof IInventoryState['equipment'], 
                toContainer as keyof IInventoryState['equipment']
            );
            return;
        }

        // Если перемещаем из экипировки в контейнер и целевая ячейка занята
        if (isFromEquipment) {
            const toArray = getContainerItems(state, toContainer);
            if (!toArray) {
                console.log("Неизвестный контейнер");
                return;
            }
            
            // Если целевая ячейка занята - пытаемся свапнуть
            if (toArray[toIndex] !== null) {
                get().swapEquipmentWithContainer(
                    fromContainer as keyof IInventoryState['equipment'],
                    toContainer,
                    toIndex
                );
                return;
            } else {
                // Если целевая ячейка пуста - просто снимаем
                get().unequipItem(fromContainer as keyof IInventoryState['equipment'], toContainer, toIndex);
                return;
            }
        }

        if (isToEquipment) {
            get().equipItem(fromContainer, fromIndex, toContainer as keyof IInventoryState['equipment']);
            return;
        }
        
        if (isFromEquipment) {
            get().unequipItem(fromContainer as keyof IInventoryState['equipment'], toContainer, toIndex);
            return;
        }

        // Получаем массивы безопасным способом
        const fromArray = getContainerItems(state, fromContainer);
        const toArray = getContainerItems(state, toContainer);
        
        if (!fromArray || !toArray) {
            console.log("Неизвестный контейнер");
            return;
        }

        // Стандартная логика перемещения между инвентарем и сундуком
        if (fromContainer === toContainer) {
            if (fromIndex === toIndex) return;
            
            const array = [...fromArray];
            const itemToMove = array[fromIndex];

            if (!itemToMove) return;

            if (!canMoveItem(itemToMove, toContainer)) {
                console.log(`Предмет ${itemToMove.name} нельзя переместить в ${toContainer}`);
                return;
            }

            if (!array[toIndex]) {
                array[fromIndex] = null;
                array[toIndex] = itemToMove;
                
                // Обновляем состояние безопасным способом
                const updates: any = {};
                updates[`${fromContainer}Items`] = array;
                set(updates);
            } else {
                get().swapItems(fromContainer, toContainer, fromIndex, toIndex);
            }
        } else {
            const fromArrayCopy = [...fromArray];
            const toArrayCopy = [...toArray];
            const itemToMove = fromArrayCopy[fromIndex];

            if (!itemToMove) return;

            if (!canMoveItem(itemToMove, toContainer)) {
                console.log(`Предмет ${itemToMove.name} нельзя переместить в ${toContainer}`);
                return;
            }

            if (!toArrayCopy[toIndex]) {
                fromArrayCopy[fromIndex] = null;
                toArrayCopy[toIndex] = itemToMove;

                set({
                    [`${fromContainer}Items`]: fromArrayCopy,
                    [`${toContainer}Items`]: toArrayCopy
                });
            } else {
                get().swapItems(fromContainer, toContainer, fromIndex, toIndex);
            }
        }
    },

    /**
     * Метод для принудительной замены предметов местами.
     * Используется когда обе ячейки заняты
     */
    swapItems: (fromContainer, toContainer, fromIndex, toIndex) => {
        const state = get();
        
        // Проверяем специальные случаи для экипировки
        const isToEquipment = toContainer in state.equipment;
        const isFromEquipment = fromContainer in state.equipment;
        
        if (isToEquipment || isFromEquipment) {
            console.log("Прямые свапы с экипировкой не поддерживаются");
            return;
        }

        // Получаем массивы безопасным способом
        const fromArray = getContainerItems(state, fromContainer);
        const toArray = getContainerItems(state, toContainer);
        
        if (!fromArray || !toArray) {
            console.log("Неизвестный контейнер");
            return;
        }

        if (fromContainer === toContainer) {
            const array = [...fromArray];
            const itemToMove = array[fromIndex];
            const targetItem = array[toIndex];

            if (!itemToMove || !targetItem) return;

            if (!canMoveItem(itemToMove, toContainer) || !canMoveItem(targetItem, fromContainer)) {
                console.log("Один из предметов нельзя переместить в целевой контейнер");
                return;
            }

            array[fromIndex] = targetItem;
            array[toIndex] = itemToMove;
            
            const updates: any = {};
            updates[`${fromContainer}Items`] = array;
            set(updates);
        } else {
            const fromArrayCopy = [...fromArray];
            const toArrayCopy = [...toArray];
            const fromItem = fromArrayCopy[fromIndex];
            const toItem = toArrayCopy[toIndex];

            if (!fromItem || !toItem) return;

            if (!canMoveItem(fromItem, toContainer) || !canMoveItem(toItem, fromContainer)) {
                console.log("Один из предметов нельзя переместить в целевой контейнер");
                return;
            }

            fromArrayCopy[fromIndex] = toItem;
            toArrayCopy[toIndex] = fromItem;

            set({
                [`${fromContainer}Items`]: fromArrayCopy,
                [`${toContainer}Items`]: toArrayCopy
            });
        }
    },

    /**
     * Метод для свапа между слотами экипировки
     */
    swapEquipmentSlots: (fromSlot, toSlot) => {
        const state = get();
        
        const fromItem = state.equipment[fromSlot];
        const toItem = state.equipment[toSlot];

        // Проверяем правила для обоих предметов
        if (fromItem && !canMoveItem(fromItem, toSlot)) {
            console.log(`Предмет ${fromItem.name} нельзя переместить в слот ${toSlot}`);
            return;
        }
        
        if (toItem && !canMoveItem(toItem, fromSlot)) {
            console.log(`Предмет ${toItem.name} нельзя переместить в слот ${fromSlot}`);
            return;
        }

        // Меняем предметы местами
        set({
            equipment: {
                ...state.equipment,
                [fromSlot]: toItem,
                [toSlot]: fromItem
            }
        });
    },

    /**
     * Метод для свапа предмета из экипировки с предметом в контейнере
     */
    swapEquipmentWithContainer: (fromSlot, toContainer, toIndex) => {
        const state = get();
        
        const itemInEquipment = state.equipment[fromSlot];
        if (!itemInEquipment) return;
        
        // Получаем целевой массив безопасным способом
        const toArray = getContainerItems(state, toContainer);
        if (!toArray) {
            console.log("Неизвестный контейнер");
            return;
        }
        
        const itemInContainer = toArray[toIndex];
        if (!itemInContainer) return;
        
        // Проверяем, можно ли надеть предмет из контейнера в слот экипировки
        if (!canMoveItem(itemInContainer, fromSlot)) {
            console.log(`Предмет ${itemInContainer.name} нельзя надеть в слот ${fromSlot}`);
            return;
        }

        // Если надеваем в левую руку, а в правой руке двуручное оружие
        if (fromSlot === "leftHand" && state.equipment.rightHand?.type === "twoHandWeapon") {
            console.log("Нельзя надеть предмет в левую руку, поскольку правая занята двуручным оружием!");
            return;
        }

        // Проверяем специальные правила для двуручного оружия
        const twoHandedCheck = checkTwoHandedWeaponRules(itemInContainer, fromSlot, state.equipment);
        if (!twoHandedCheck.canEquip) {
            console.log("Нельзя надеть двуручное оружие");
            return;
        }
        
        // Меняем предметы местами
        const toArrayCopy = [...toArray];
        toArrayCopy[toIndex] = itemInEquipment;
        
        set({
            [`${toContainer}Items`]: toArrayCopy,
            equipment: {
                ...state.equipment,
                [fromSlot]: itemInContainer
            }
        });
    },

    /**
     * Надевание предмета в экипировку
     */
    equipItem: (fromContainer, fromIndex, toSlot) => {
        const state = get();
        
        // Получаем массив из исходного контейнера безопасным способом
        const fromArray = getContainerItems(state, fromContainer);
        if (!fromArray) {
            console.log("Неизвестный контейнер");
            return;
        }
        
        const itemToEquip = fromArray[fromIndex];
        if (!itemToEquip) return;
        
        // Проверяем, можно ли надеть этот предмет в этот слот
        if (!canMoveItem(itemToEquip, toSlot)) {
            console.log(`Предмет ${itemToEquip.name} нельзя надеть в слот ${toSlot}`);
            return;
        }
        
        // Проверяем специальные правила для двуручного оружия
        const twoHandedCheck = checkTwoHandedWeaponRules(itemToEquip, toSlot, state.equipment);
        if (!twoHandedCheck.canEquip) {
            console.log("Нельзя надеть двуручное оружие");
            return;
        }

        // Если надеваем в левую руку, а в правой двуручное
        if (toSlot === "leftHand" && state.equipment.rightHand?.type === "twoHandWeapon") {
            console.log("Нельзя надеть предмет в левую руку, поскольку правая занята двуручным оружием!");
            return;
        }

        // Если надеваем двуручное оружие и левая рука занята
        if (twoHandedCheck.needToClearLeftHand) {
            // Пытаемся найти свободное место в инвентаре для предмета из левой руки
            const freeIndex = state.inventoryItems.findIndex(item => item === null);
            if (freeIndex === -1) {
                console.log("Нет свободного места в инвентаре для предмета из левой руки");
                return;
            }
            
            // Перемещаем предмет из левой руки в инвентарь
            const inventoryArray = [...state.inventoryItems];
            inventoryArray[freeIndex] = state.equipment.leftHand;
            
            set({
                inventoryItems: inventoryArray,
                equipment: {
                    ...state.equipment,
                    leftHand: null
                }
            });
        }
        
        // Запоминаем текущий предмет в слоте экипировки (если есть)
        const currentEquippedItem = state.equipment[toSlot];
        
        // Надеваем новый предмет
        const fromArrayCopy = [...fromArray];
        fromArrayCopy[fromIndex] = currentEquippedItem; // Старый предмет из экипировки идет в инвентарь
        
        set({
            [`${fromContainer}Items`]: fromArrayCopy,
            equipment: {
                ...state.equipment,
                [toSlot]: itemToEquip
            }
        });
    },

    /**
     * Снятие предмета с экипировки
     */
    unequipItem: (fromSlot, toContainer, toIndex) => {
        const state = get();
        
        const itemToUnequip = state.equipment[fromSlot];
        if (!itemToUnequip) return;
        
        // Получаем целевой массив безопасным способом
        const toArray = getContainerItems(state, toContainer);
        if (!toArray) {
            console.log("Неизвестный контейнер");
            return;
        }
        
        // Проверяем, что целевая ячейка пуста
        if (toArray[toIndex] !== null) {
            console.log("Целевая ячейка занята");
            return;
        }
        
        // Снимаем предмет
        const toArrayCopy = [...toArray];
        toArrayCopy[toIndex] = itemToUnequip;
        
        set({
            [`${toContainer}Items`]: toArrayCopy,
            equipment: {
                ...state.equipment,
                [fromSlot]: null
            }
        });
    }
}));