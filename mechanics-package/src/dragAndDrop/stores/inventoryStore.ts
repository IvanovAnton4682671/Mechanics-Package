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
        // Получаем текущее состояния и проверяем, связано ли перемещение с экипировкой
        const state = get();
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
        // Получаем текущее состояние и массив предметов текущего контейнера
        const state = get();
        const currentArray = getContainerItems(state, targetContainer);

        // Если получили некорректный контейнер - пропускаем
        if (!currentArray) {
            console.error(`Получен некорректный контейнер: ${targetContainer}`);
            return;
        } else {
            // Получаем предмет, который нужно переместить и целевую ячейку, куда перемещаем предмет
            const itemToMove = currentArray[fromIndex];
            const targetCell = currentArray[toIndex];

            // Если целевая ячейка пустая
            if (!targetCell) {
                // Если получили корректный предмет и его можно переместить в целевую ячейку
                if (itemToMove && canMoveItem(itemToMove, targetContainer)) {
                    // Создаём копию массива и перемещаем предмет
                    const copyCurrentArray = [...currentArray];
                    copyCurrentArray[toIndex] = itemToMove;
                    copyCurrentArray[fromIndex] = null;

                    // Обновляем состояние
                    set({
                        [`${targetContainer}Items`]: copyCurrentArray
                    });
                }
            // Иначе - вызываем свап внутри контейнера
            } else {
                get().swapContainer(targetContainer, fromIndex, toIndex);
            }
        }
    },

    moveBetweenContainers: (fromContainer, toContainer, fromIndex, toIndex) => {
        // Получаем текущее состояние и массивы предметов контейнеров
        const state = get();
        const fromArray = getContainerItems(state, fromContainer);
        const toArray = getContainerItems(state, toContainer);

        // Если получили некорректный(ые) контейнер(ы) - пропускаем
        if (!fromArray || !toArray) {
            console.error(`Один или оба контейнера некорректны: ${fromContainer}, ${toContainer}`);
            return;
        } else {
            // Получаем предмет, который нужно переместить, и целевую ячейку
            const itemToMove = fromArray[fromIndex];
            const targetCell = toArray[toIndex];

            // Если ячейка пустая
            if (!targetCell) {
                // Если получили корректный предмет и его можно переместить в целевую ячейку
                if (itemToMove && canMoveItem(itemToMove, toContainer)) {
                    // Получаем копии массивов и перемещаем предмет
                    const copyFromArray = [...fromArray];
                    const copyToArray = [...toArray];
                    copyToArray[toIndex] = itemToMove;
                    copyFromArray[fromIndex] = null;

                    // Обновляем состояние
                    set({
                        [`${fromContainer}Items`]: copyFromArray,
                        [`${toContainer}Items`]: copyToArray
                    });
                }
            // Иначе - вызываем свап между контейнерами
            } else {
                get().swapContainers(fromContainer, toContainer, fromIndex, toIndex);
            }
        }
    },

    moveContainerSlot: (fromContainer, fromIndex, toSlot) => {
        // Получаем текущее состояние, массив предметов контейнера и экипировку персонажа
        const state = get();
        const fromArray = getContainerItems(state, fromContainer);
        const currentEquipment = get().equipment;

        // Если получили некорректный контейнер - пропускаем
        if (!fromArray) {
            console.error(`Получен некорректный контейнер: ${fromContainer}`);
            return;
        } else {
            // Получаем предмет, который нужно переместить, и целевой слот
            const itemToMove = fromArray[fromIndex];
            const targetSlot = currentEquipment[toSlot];

            // Если слот пуст
            if (!targetSlot) {
                // Если получили корректный предмет и его можно переместить в целевой слот
                if (itemToMove && canMoveItem(itemToMove, toSlot)) {
                    // Отдельные проверки для слотов рук:
                    // если предмет двуручный и левая рука свободна
                    // или если предмет одноручный и левая рука пуста или содержит корректный предмет
                    // или если предмет одноручный/специальный и правая рука пуста или содержит корректный предмет
                    if ((itemToMove.type === "twoHandWeapon" && checkLeftHandForTwoHandedWeapon(itemToMove, toSlot, currentEquipment)) ||
                        (itemToMove.type === "oneHandWeapon" && checkLeftHandForOneHandedWeapon(itemToMove, toSlot, currentEquipment)) ||
                        (((itemToMove.type === "oneHandWeapon" || itemToMove.type === "offHand") && checkRightHandForOneOffHanded(itemToMove, toSlot, currentEquipment)))) {
                        // Получаем копию массива и очищаем ячейку массива
                        const copyFromArray = [...fromArray];
                        copyFromArray[fromIndex] = null;

                        // Обновляем состояние и перемещаем предмет в слот
                        set({
                            [`${fromContainer}Items`]: copyFromArray,
                            equipment: {
                                ...state.equipment,
                                [toSlot]: itemToMove
                            }
                        });

                        return;
                    // Иначе если предмет не является двуручным/одноручным/специальным
                    } else if (itemToMove.type !== "twoHandWeapon" && itemToMove.type !== "oneHandWeapon" && itemToMove.type !== "offHand") {
                        // Получаем копию массива и очищаем ячейку массива
                        const copyFromArray = [...fromArray];
                        copyFromArray[fromIndex] = null;

                        // Обновляем состояние и перемещаем предмет в слот
                        set({
                            [`${fromContainer}Items`]: copyFromArray,
                            equipment: {
                                ...state.equipment,
                                [toSlot]: itemToMove
                            }
                        });
                    }
                }
            // Иначе - вызываем свап между контейнером и слотом
            } else {
                get().swapContainerSlot(fromContainer, fromIndex, toSlot);
            }
        }
    },

    moveSlotContainer: (fromSlot, toContainer, toIndex) => {
        // Получаем состояние, массив предметов контейнера и экипировку персонажа
        const state = get();
        const toArray = getContainerItems(state, toContainer);
        const currentEquipment = get().equipment;

        // Если получили некорректный контейнер - пропускаем
        if (!toArray) {
            console.error(`Получен некорректный контейнер: ${toContainer}`);
            return;
        } else {
            // Получаем предмет, который нужно переместить, и целевой слот
            const itemToMove = currentEquipment[fromSlot];
            const targetCell = toArray[toIndex];

            // Если слот пуст
            if (!targetCell) {
                // Если получили корректный предмет и его можно переместить в целевой слот
                if (itemToMove && canMoveItem(itemToMove, toContainer)) {
                    // Получаем копию массива и перемещаем предмет
                    const copyToArray = [...toArray];
                    copyToArray[toIndex] = itemToMove;

                    // Обновляем состояние и очищаем слот экипировки
                    set({
                        [`${toContainer}Items`]: copyToArray,
                        equipment: {
                            ...state.equipment,
                            [fromSlot]: null
                        }
                    });
                }
            // Иначе - вызываем свап между слотом и контейнером
            } else {
                get().swapSlotContainer(fromSlot, toContainer, toIndex);
            }
        }
    },

    moveSlotSlot: (fromSlot, toSlot) => {
        // Получаем состояние, экипировку персонажа, предмет, который нужно переместить, и целевой слот
        const state = get();
        const currentEquipment = get().equipment;
        const itemToMove = currentEquipment[fromSlot];
        const targetSlot = currentEquipment[toSlot];

        // Если слот пуст
        if (!targetSlot) {
            // Если получили корректный предмет и его можно переместить в целевой слот
            if (itemToMove && canMoveItem(itemToMove, toSlot)) {
                // Из слота в слот можно перемещать только одноручные предмет, так что отдельная проверка
                if (itemToMove.type === "oneHandWeapon") {
                    // Обновляем состояние, в котором перемещаем предмет
                    set({
                        equipment: {
                            ...state.equipment,
                            [fromSlot]: null,
                            [toSlot]: itemToMove
                        }
                    });
                }
            }
        // Иначе - вызываем свап между слотами
        } else {
            get().swapSlots(fromSlot, toSlot);
        }
    },

    swapContainer: (targetContainer, fromIndex, toIndex) => {
        // Получаем состояние и массив предметов контейнера
        const state = get();
        const currentArray = getContainerItems(state, targetContainer);

        // Если получили некорректный контейнер - пропускаем
        if (!currentArray) {
            console.error(`Получен некорректный контейнер: ${targetContainer}`);
            return;
        } else {
            // Получаем предметы которые нужно свапнуть
            const itemToMove = currentArray[fromIndex];
            const itemToRemove = currentArray[toIndex];

            // Если получили корректные предметы и их можно переместить в целевые контейнеры
            if (itemToMove && itemToRemove && canMoveItem(itemToMove, targetContainer) && canMoveItem(itemToRemove, targetContainer)) {
                // Получаем копию массива и свапаем предметы
                const copyCurrentArray = [...currentArray];
                copyCurrentArray[toIndex] = itemToMove;
                copyCurrentArray[fromIndex] = itemToRemove;

                // Обновляем состояние
                set({
                    [`${targetContainer}Items`]: copyCurrentArray
                });
            }
        }
    },

    swapContainers: (fromContainer, toContainer, fromIndex, toIndex) => {
        // Получаем состояние и массивы предметов контейнеров
        const state = get();
        const fromArray = getContainerItems(state, fromContainer);
        const toArray = getContainerItems(state, toContainer);

        // Если получили некорректный(ые) контейнер(ы) - пропускаем
        if (!fromArray || !toArray) {
            console.error(`Один или оба контейнера некорректны: ${fromContainer}, ${toContainer}`);
            return;
        } else {
            // Получаем предметы, которые нужно свапнуть
            const itemToMove = fromArray[fromIndex];
            const itemToRemove = toArray[toIndex];

            // Если получили корректные предметы и их можно переместить в целевые контейнеры
            if (itemToMove && itemToRemove && canMoveItem(itemToMove, toContainer) && canMoveItem(itemToRemove, fromContainer)) {
                // Получаем копии массивов и свапаем предметы
                const copyFromArray = [...fromArray]
                const copyToArray = [...toArray];
                copyFromArray[fromIndex] = itemToRemove;
                copyToArray[toIndex] = itemToMove;

                // Обновляем состояние
                set({
                    [`${fromContainer}Items`]: copyFromArray,
                    [`${toContainer}Items`]: copyToArray
                });
            }
        }
    },

    swapContainerSlot: (fromContainer, fromIndex, toSlot) => {
        // Получаем состояние, массив предметов контейнера и экипировку персонажа
        const state = get();
        const currentArray = getContainerItems(state, fromContainer);
        const currentEquipment = get().equipment;

        // Если получили некорректный контейнер - пропускаем
        if (!currentArray) {
            console.error(`Получен некорректный контейнер: ${fromContainer}`);
            return;
        } else {
            // Получаем предметы, которые нужно свапнуть
            const itemToMove = currentArray[fromIndex];
            const itemToRemove = currentEquipment[toSlot];

            // Если получили корректные предметы и их можно переместить в целевые контейнер/слот
            if (itemToMove && itemToRemove && canMoveItem(itemToMove, toSlot) && canMoveItem(itemToRemove, fromContainer)) {
                // Отдельные проверки для слотов рук:
                // если предмет двуручный и левая рука свободна
                // или если предмет одноручный и левая рука пуста или содержит корректный предмет
                // или если предмет одноручный/специальный и правая рука пуста или содержит корректный предмет
                if ((itemToMove.type === "twoHandWeapon" && checkLeftHandForTwoHandedWeapon(itemToMove, toSlot, currentEquipment)) ||
                    (itemToMove.type === "oneHandWeapon" && checkLeftHandForOneHandedWeapon(itemToMove, toSlot, currentEquipment)) ||
                    ((itemToMove.type === "oneHandWeapon" || itemToMove.type === "offHand") && checkRightHandForOneOffHanded(itemToMove, toSlot, currentEquipment))) {
                    // Получаем копию массива и выполняем половину свапа
                    const copyCurrentArray = [...currentArray];
                    copyCurrentArray[fromIndex] = itemToRemove;

                    // Обновляем состояние и доделываем свап
                    set({
                        [`${fromContainer}Items`]: copyCurrentArray,
                        equipment: {
                            ...state.equipment,
                            [toSlot]: itemToMove
                        }
                    });
                // Иначе если предмет не является двуручным/одноручным/специальным
                } else if (itemToMove.type !== "twoHandWeapon" && itemToMove.type !== "oneHandWeapon" && itemToMove.type !== "offHand") {
                    // Получаем копию массива и выполняем половину свапа
                    const copyCurrentArray = [...currentArray];
                    copyCurrentArray[fromIndex] = itemToRemove;

                    // Обновляем состояние и доделываем свап
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
        // Получаем состояние, массив предметов контейнера и экипировку персонажа
        const state = get();
        const currentArray = getContainerItems(state, toContainer);
        const currentEquipment = get().equipment;

        // Если получили некорректный контейнер - пропускаем
        if (!currentArray) {
            console.error(`Получен некорректный контейнер: ${toContainer}`);
            return;
        } else {
            // Получаем предметы, которые нужно свапнуть
            const itemToMove = currentEquipment[fromSlot];
            const itemToRemove = currentArray[toIndex];

            // Если получили корректные предметы и их можно переместить в целевые контейнер/слот
            if (itemToMove && itemToRemove && canMoveItem(itemToMove, toContainer) && canMoveItem(itemToRemove, fromSlot)) {
                // Отдельные проверки для слотов рук:
                // если предмет двуручный и левая рука свободна
                // или если предмет одноручный и левая рука пуста или содержит корректный предмет
                // или если предмет одноручный/специальный и правая рука пуста или содержит корректный предмет
                if ((itemToRemove.type === "twoHandWeapon" && checkLeftHandForTwoHandedWeapon(itemToRemove, fromSlot, currentEquipment)) ||
                    (itemToRemove.type === "oneHandWeapon" && checkLeftHandForOneHandedWeapon(itemToRemove, fromSlot, currentEquipment)) ||
                    ((itemToRemove.type === "oneHandWeapon" || itemToRemove.type === "offHand") && checkRightHandForOneOffHanded(itemToRemove, fromSlot, currentEquipment))) {
                        // Получаем копию массива и выполняем половину свапа
                    const copyCurrentArray = [...currentArray];
                    copyCurrentArray[toIndex] = itemToMove;

                    // Обновляем состояние и доделываем свап
                    set({
                        [`${toContainer}Items`]: copyCurrentArray,
                        equipment: {
                            ...state.equipment,
                            [fromSlot]: itemToRemove
                        }
                    });
                // Иначе если предмет не является двуручным/одноручным/специальным
                } else if (itemToRemove.type !== "twoHandWeapon" && itemToRemove.type !== "oneHandWeapon" && itemToRemove.type !== "offHand") {
                    // Получаем копию массива и выполняем половину свапа
                    const copyCurrentArray = [...currentArray];
                    copyCurrentArray[toIndex] = itemToMove;

                    // Обновляем состояние и доделываем свап
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
        // Получаем состояние, экипировку персонажа и предметы, которые нужно свапнуть
        const state = get();
        const currentEquipment = get().equipment;
        const itemToMove = currentEquipment[fromSlot];
        const itemToRemove = currentEquipment[toSlot];

        // Если получили корректные предметы и их можно переместить в целевые слоты
        if (itemToMove && itemToRemove && canMoveItem(itemToMove, toSlot) && canMoveItem(itemToRemove, fromSlot)) {
            // Свапать между слотами можно только одноручные предметы, так что проверка
            if (itemToMove.type === "oneHandWeapon" && itemToRemove.type === "oneHandWeapon") {
                // Обновляем состояние и выполняем свап
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