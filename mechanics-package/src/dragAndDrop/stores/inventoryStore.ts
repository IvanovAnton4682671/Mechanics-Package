import { create } from "zustand";
import type { IInventoryState } from "./interfaces";
import { CHEST_TEST_ITEMS, INVENTORY_TEST_ITEMS, EQUIPMENT_TEST_ITEMS } from "../types/consts";
import type { myContainer, myItemArray } from "../types/types";
import type { myItem } from "../items/types";

/**
 * Вспомогательный метод для безопасного получения массива предметов контейнера
 * 
 * @param state текущее состояние
 * @param targetContainer целевой контейнер, предметы которого нужно получить
 * @returns массив предметов контейнера или null
 */
function getContainerItems(state: IInventoryState, targetContainer: myContainer): myItemArray | null {
    if (targetContainer === "chest") return state.chestItems;
    if (targetContainer === "inventory") return state.inventoryItems;
    console.error(`Получен некорректный контейнер: ${targetContainer}`);
    return null;
};

/**
 * Вспомогательный метод для проверки возможности перемещения предмет в целевой контейнер
 * 
 * @param item предмет, который нужно проверить на возможность перемещения
 * @param targetContainer целевой контейнер, для которого проверяется возможность перемещения предмета
 * @returns результата проверки
 */
function canMoveItem(item: myItem, targetContainer: myContainer): boolean {
    return item.allowedContainers.includes(targetContainer as any);
};

/**
 * Вспомогательный метод, который проверяет возможность экипирования двуручного оружия в слот правой руки
 * 
 * @param item предмет, который проверяется
 * @param targetSlot слот, в который экипируется предмет
 * @param equipment общий рекорд экипировки персонажа
 * @returns результат проверки
 */
function checkLeftHandForTwoHandedWeapon(item: myItem, targetSlot: myContainer, equipment: IInventoryState["equipment"]): boolean {
    if (item.type === "twoHandWeapon" && targetSlot === "rightHand") {
        if (equipment.leftHand === null) return true;
        return false;
    }
    console.error(`Получен некорректный предмет: ${item.name}`);
    return false;
};

/**
 * Вспомогательный метод, который проверяет возможность экипирования одноручного оружия в слот правой руки
 * 
 * @param item предмет, который проверяется
 * @param targetSlot слот, в который экипируется предмет
 * @param equipment общий рекорд экипировки персонажа
 * @returns результат проверки
 */
function checkLeftHandForOneHandedWeapon(item: myItem, targetSlot: myContainer, equipment: IInventoryState["equipment"]): boolean {
    if (item.type === "oneHandWeapon" && targetSlot === "rightHand") {
        if (equipment.leftHand === null || (equipment.leftHand?.type === "oneHandWeapon" || equipment.leftHand?.type === "offHand")) return true;
        return false;
    }
    console.error(`Получен некорректный предмет: ${item.name}`);
    return false;
};

/**
 * Вспомогательный метод, который проверяет возможность экипирования одноручного/специального оружия в слот левой руки
 * 
 * @param item предмет, который проверяется
 * @param targetSlot слот, в который экипируется предмет
 * @param equipment общий рекорд экипировки персонажа
 * @returns результат проверки
 */
function checkRightHandForOneOffHanded(item: myItem, targetSlot: myContainer, equipment: IInventoryState["equipment"]): boolean {
    if ((item.type === "oneHandWeapon" || item.type === "offHand") && targetSlot === "leftHand") {
        if (equipment.rightHand === null || equipment.rightHand?.type === "oneHandWeapon") return true;
        return false;
    }
    console.error(`Получен некорректный предмет: ${item.name}`);
    return false;
};

export const useInventoryStore = create<IInventoryState>((set, get) => ({
    chestItems: CHEST_TEST_ITEMS,

    inventoryItems: INVENTORY_TEST_ITEMS,

    equipment: EQUIPMENT_TEST_ITEMS,

    moveItem: (fromContainer, toContainer, fromIndex, toIndex) => {
        // Получаем текущее состояния
        const state = get();
        // Проверяем, связано ли перемещение с экипировкой
        const isFromEquipment = fromContainer in state.equipment;
        const isToEquipment = toContainer in state.equipment;

        // Если перемещение не связано с экипировкой
        if (!isFromEquipment && !isToEquipment) {
            // Если перемещение происходит внутри контейнера
            if (fromContainer === toContainer) {
                // Если перемещение происходит в свою же ячейку - пропускаем
                if (fromIndex === toIndex) return;

                // Вызываем метод перемещения внутри контейнера
                get().moveInsideContainer(fromContainer, fromIndex, toIndex);
            } else {
                // Иначе вызываем метод перемещения между контейнерами
                get().moveBetweenContainers(fromContainer, toContainer, fromIndex, toIndex);
            }
        // Если перемещение полностью связано с экипировкой
        } else if (isFromEquipment && isToEquipment) {
            // Вызываем метод перемещения между слотами
            get().moveSlotSlot(fromContainer as keyof IInventoryState["equipment"], toContainer as keyof IInventoryState["equipment"]);
        // Если перемещение происходит из экипировки в контейнер
        } else if (isFromEquipment && !isToEquipment) {
            // Вызываем метод перемещения из экипировки в контейнер
            get().moveSlotContainer(fromContainer as keyof IInventoryState["equipment"], toContainer, toIndex);
        } else {
            // Иначе вызываем метод перемещения из контейнера в экипировку
            get().moveContainerSlot(fromContainer, fromIndex, toContainer as keyof IInventoryState["equipment"]);
        }
    },

    moveInsideContainer: (targetContainer, fromIndex, toIndex) => {
        const state = get();
        const currentArray = getContainerItems(state, targetContainer);

        if (!currentArray) {
            console.error(`Получен некорректный контейнер: ${targetContainer}`);
            return;
        } else {
            const itemToMove = currentArray[fromIndex];
            const targetCell = currentArray[toIndex];

            if (!targetCell) {
                if (itemToMove && canMoveItem(itemToMove, targetContainer)) {
                    const copyCurrentArray = [...currentArray];
                    copyCurrentArray[toIndex] = itemToMove;
                    copyCurrentArray[fromIndex] = null;

                    set({
                        [`${targetContainer}Items`]: copyCurrentArray
                    });
                }
            } else {
                get().swapContainer(targetContainer, fromIndex, toIndex);
            }
        }
    },

    moveBetweenContainers: (fromContainer, toContainer, fromIndex, toIndex) => {
        const state = get();
        const fromArray = getContainerItems(state, fromContainer);
        const toArray = getContainerItems(state, toContainer);

        if (!fromArray || !toArray) {
            console.error(`Один или оба контейнера некорректны: ${fromContainer}, ${toContainer}`);
            return;
        } else {
            const itemToMove = fromArray[fromIndex];
            const targetCell = toArray[toIndex];

            if (!targetCell) {
                if (itemToMove && canMoveItem(itemToMove, toContainer)) {
                    const copyFromArray = [...fromArray];
                    const copyToArray = [...toArray];
                    copyToArray[toIndex] = itemToMove;
                    copyFromArray[fromIndex] = null;

                    set({
                        [`${fromContainer}Items`]: copyFromArray,
                        [`${toContainer}Items`]: copyToArray
                    });
                }
            } else {
                get().swapContainers(fromContainer, toContainer, fromIndex, toIndex);
            }
        }
    },

    moveContainerSlot: (fromContainer, fromIndex, toSlot) => {
        const state = get();
        const fromArray = getContainerItems(state, fromContainer);
        const currentEquipment = get().equipment;

        if (!fromArray) {
            console.error(`Получен некорректный контейнер: ${fromContainer}`);
            return;
        } else {
            const itemToMove = fromArray[fromIndex];
            const targetSlot = currentEquipment[toSlot];

            if (!targetSlot) {
                if (itemToMove && canMoveItem(itemToMove, toSlot)) {
                    if ((itemToMove.type === "twoHandWeapon" && checkLeftHandForTwoHandedWeapon(itemToMove, toSlot, currentEquipment)) ||
                        (itemToMove.type === "oneHandWeapon" && checkLeftHandForOneHandedWeapon(itemToMove, toSlot, currentEquipment)) ||
                        (((itemToMove.type === "oneHandWeapon" || itemToMove.type === "offHand") && checkRightHandForOneOffHanded(itemToMove, toSlot, currentEquipment)))) {
                        const copyFromArray = [...fromArray];
                        copyFromArray[fromIndex] = null;

                        set({
                            [`${fromContainer}Items`]: copyFromArray,
                            equipment: {
                                ...state.equipment,
                                [toSlot]: itemToMove
                            }
                        });

                        return;
                    } else if (itemToMove.type !== "twoHandWeapon" && itemToMove.type !== "oneHandWeapon" && itemToMove.type !== "offHand") {
                        const copyFromArray = [...fromArray];
                        copyFromArray[fromIndex] = null;

                        set({
                            [`${fromContainer}Items`]: copyFromArray,
                            equipment: {
                                ...state.equipment,
                                [toSlot]: itemToMove
                            }
                        });
                    }
                }
            } else {
                get().swapContainerSlot(fromContainer, fromIndex, toSlot);
            }
        }
    },

    moveSlotContainer: (fromSlot, toContainer, toIndex) => {
        const state = get();
        const toArray = getContainerItems(state, toContainer);
        const currentEquipment = get().equipment;

        if (!toArray) {
            console.error(`Получен некорректный контейнер: ${toContainer}`);
            return;
        } else {
            const itemToMove = currentEquipment[fromSlot];
            const targetCell = toArray[toIndex];

            if (!targetCell) {
                if (itemToMove && canMoveItem(itemToMove, toContainer)) {
                    const copyToArray = [...toArray];
                    copyToArray[toIndex] = itemToMove;

                    set({
                        [`${toContainer}Items`]: copyToArray,
                        equipment: {
                            ...state.equipment,
                            [fromSlot]: null
                        }
                    });
                }
            } else {
                get().swapSlotContainer(fromSlot, toContainer, toIndex);
            }
        }
    },

    moveSlotSlot: (fromSlot, toSlot) => {
        const state = get();
        const currentEquipment = get().equipment;
        const itemToMove = currentEquipment[fromSlot];
        const targetSlot = currentEquipment[toSlot];

        if (!targetSlot) {
            if (itemToMove && canMoveItem(itemToMove, toSlot)) {
                if (itemToMove.type === "oneHandWeapon") {
                    set({
                        equipment: {
                            ...state.equipment,
                            [fromSlot]: null,
                            [toSlot]: itemToMove
                        }
                    });
                }
            }
        } else {
            get().swapSlots(fromSlot, toSlot);
        }
    },

    swapContainer: (targetContainer, fromIndex, toIndex) => {
        const state = get();
        const currentArray = getContainerItems(state, targetContainer);

        if (!currentArray) {
            console.error(`Получен некорректный контейнер: ${targetContainer}`);
            return;
        } else {
            const itemToMove = currentArray[fromIndex];
            const itemToRemove = currentArray[toIndex];

            if (itemToMove && itemToRemove && canMoveItem(itemToMove, targetContainer) && canMoveItem(itemToRemove, targetContainer)) {
                const copyCurrentArray = [...currentArray];
                copyCurrentArray[toIndex] = itemToMove;
                copyCurrentArray[fromIndex] = itemToRemove;

                set({
                    [`${targetContainer}Items`]: copyCurrentArray
                });
            }
        }
    },

    swapContainers: (fromContainer, toContainer, fromIndex, toIndex) => {
        const state = get();
        const fromArray = getContainerItems(state, fromContainer);
        const toArray = getContainerItems(state, toContainer);

        if (!fromArray || !toArray) {
            console.error(`Один или оба контейнера некорректны: ${fromContainer}, ${toContainer}`);
            return;
        } else {
            const itemToMove = fromArray[fromIndex];
            const itemToRemove = toArray[toIndex];

            if (itemToMove && itemToRemove && canMoveItem(itemToMove, toContainer) && canMoveItem(itemToRemove, fromContainer)) {
                const copyFromArray = [...fromArray]
                const copyToArray = [...toArray];
                copyFromArray[fromIndex] = itemToRemove;
                copyToArray[toIndex] = itemToMove;

                set({
                    [`${fromContainer}Items`]: copyFromArray,
                    [`${toContainer}Items`]: copyToArray
                });
            }
        }
    },

    swapContainerSlot: (fromContainer, fromIndex, toSlot) => {
        const state = get();
        const currentArray = getContainerItems(state, fromContainer);
        const currentEquipment = get().equipment;

        if (!currentArray) {
            console.error(`Получен некорректный контейнер: ${fromContainer}`);
            return;
        } else {
            const itemToMove = currentArray[fromIndex];
            const itemToRemove = currentEquipment[toSlot];

            if (itemToMove && itemToRemove && canMoveItem(itemToMove, toSlot) && canMoveItem(itemToRemove, fromContainer)) {
                if ((itemToMove.type === "twoHandWeapon" && checkLeftHandForTwoHandedWeapon(itemToMove, toSlot, currentEquipment)) ||
                    (itemToMove.type === "oneHandWeapon" && checkLeftHandForOneHandedWeapon(itemToMove, toSlot, currentEquipment)) ||
                    ((itemToMove.type === "oneHandWeapon" || itemToMove.type === "offHand") && checkRightHandForOneOffHanded(itemToMove, toSlot, currentEquipment))) {
                    const copyCurrentArray = [...currentArray];
                    copyCurrentArray[fromIndex] = itemToRemove;

                    set({
                        [`${fromContainer}Items`]: copyCurrentArray,
                        equipment: {
                            ...state.equipment,
                            [toSlot]: itemToMove
                        }
                    });
                } else if (itemToMove.type !== "twoHandWeapon" && itemToMove.type !== "oneHandWeapon" && itemToMove.type !== "offHand") {
                    const copyCurrentArray = [...currentArray];
                    copyCurrentArray[fromIndex] = itemToRemove;

                    set({
                        [`${fromContainer}Items`]: copyCurrentArray,
                        equipment: {
                            ...state.equipment,
                            [toSlot]: itemToMove
                        }
                    });
                }
            }
        }
    },

    swapSlotContainer: (fromSlot, toContainer, toIndex) => {
        const state = get();
        const currentArray = getContainerItems(state, toContainer);
        const currentEquipment = get().equipment;

        if (!currentArray) {
            console.error(`Получен некорректный контейнер: ${toContainer}`);
            return;
        } else {
            const itemToMove = currentEquipment[fromSlot];
            const itemToRemove = currentArray[toIndex];

            if (itemToMove && itemToRemove && canMoveItem(itemToMove, toContainer) && canMoveItem(itemToRemove, fromSlot)) {
                if ((itemToRemove.type === "twoHandWeapon" && checkLeftHandForTwoHandedWeapon(itemToRemove, fromSlot, currentEquipment)) ||
                    (itemToRemove.type === "oneHandWeapon" && checkLeftHandForOneHandedWeapon(itemToRemove, fromSlot, currentEquipment)) ||
                    ((itemToRemove.type === "oneHandWeapon" || itemToRemove.type === "offHand") && checkRightHandForOneOffHanded(itemToRemove, fromSlot, currentEquipment))) {
                    const copyCurrentArray = [...currentArray];
                    copyCurrentArray[toIndex] = itemToMove;

                    set({
                        [`${toContainer}Items`]: copyCurrentArray,
                        equipment: {
                            ...state.equipment,
                            [fromSlot]: itemToRemove
                        }
                    });
                } else if (itemToRemove.type !== "twoHandWeapon" && itemToRemove.type !== "oneHandWeapon" && itemToRemove.type !== "offHand") {
                    const copyCurrentArray = [...currentArray];
                    copyCurrentArray[toIndex] = itemToMove;

                    set({
                        [`${toContainer}Items`]: copyCurrentArray,
                        equipment: {
                            ...state.equipment,
                            [fromSlot]: itemToRemove
                        }
                    });
                }
            }
        }
    },

    swapSlots: (fromSlot, toSlot) => {
        const state = get();
        const currentEquipment = get().equipment;
        const itemToMove = currentEquipment[fromSlot];
        const itemToRemove = currentEquipment[toSlot];

        if (itemToMove && itemToRemove && canMoveItem(itemToMove, toSlot) && canMoveItem(itemToRemove, fromSlot)) {
            if (itemToMove.type === "oneHandWeapon" && itemToRemove.type === "oneHandWeapon") {
                set({
                    equipment: {
                        ...state.equipment,
                        [fromSlot]: itemToRemove,
                        [toSlot]: itemToMove
                    }
                });
            }
        }
    }
}));