import type { myItemArray, myItemCell } from "../types/types";
import type { myContainer } from "../../entities/containersForItems/types";

/**
 * Интерфейс состояния общего инвентаря, который управляет перемещениями всех предметов
 * по сундуку, инвентарю и экипировки персонажа
 * 
 * @field chestItems - массив предметов, которые находятся в сундуке
 * @field inventoryItems - массив предметов, которые находятся в инвентаре
 * @field equipment - рекорд экипировки персонажа
 * @method moveItem - главный метод, который определяет какой конкретный метод перемещения предмета(ов) нужно вызвать
 * @method moveInsideContainer - метод перемещения предмета в контейнере
 * @method moveBetweenContainers - метод перемещения предмета между контейнерами
 * @method moveContainerSlot - метод перемещения предмета из контейнера в слот экипировки
 * @method moveSlotContainer - метод перемещения предмета из слота экипировки в контейнер
 * @method moveSlotSlot - метод перемещения предмета между слотами экипировки
 * @method swapContainer - метод свапа предметов в контейнере
 * @method swapContainers - метод свапа предметов между контейнерами
 * @method swapContainerSlot - метод свапа предметов между контейнером и слотом экипировки
 * @method swapSlotContainer - метод свапа предметов между слотом экипировки и контейнером
 * @method swapSlots - метод свапа предметов между слотами экипировки
 */
export interface IInventoryState {
    chestItems: myItemArray;

    inventoryItems: myItemArray;

    equipment: {
        helmet: myItemCell,
        gloves: myItemCell,
        bracers: myItemCell,
        shoulderPads: myItemCell,
        leftHand: myItemCell,
        rightHand: myItemCell,
        chestArmor: myItemCell,
        belt: myItemCell,
        footArmor: myItemCell,
        boots: myItemCell
    };

    /**
     * Главный метод перемещения предметов. Сам определяет, что конкретно нужно сделать с предметом(ами)
     * 
     * @param fromContainer из какого контейнера перемещается предмет
     * @param toContainer в какой контейнер перемещается предмет
     * @param fromIndex с какой позиции перемещается предмет
     * @param toIndex на какую позицию перемещается предмет
     * @returns ничего
     */
    moveItem: (fromContainer: myContainer, toContainer: myContainer, fromIndex: number, toIndex: number) => void;

    /**
     * Метод перемещения предмета в контейнере
     * 
     * @param container контейнер, в котором перемещается предмет
     * @param fromIndex с какой позиции перемещается предмет
     * @param toIndex на какую позицию перемещается предмет
     * @returns ничего
     */
    moveInsideContainer: (container: myContainer, fromIndex: number, toIndex: number) => void;

    /**
     * Метод перемещения предмета между контейнерами
     * 
     * @param fromContainer из какого контейнера перемещается предмет
     * @param toContainer в какой контейнер перемещается предмет
     * @param fromIndex с какой позиции перемещается предмет
     * @param toIndex на какую позицию перемещается предмет
     * @returns ничего
     */
    moveBetweenContainers: (fromContainer: myContainer, toContainer: myContainer, fromIndex: number, toIndex: number) => void;

    /**
     * Метод перемещения предмета из контейнера в слот экипировки
     * 
     * @param fromContainer из какого контейнера перемещается предмет
     * @param fromIndex с какой позиции перемещается предмет
     * @param toSlot в какой слот перемещается предмет
     * @returns ничего
     */
    moveContainerSlot: (fromContainer: myContainer, fromIndex: number, toSlot: keyof IInventoryState["equipment"]) => void;

    /**
     * Метод перемещения предмета из слота экипировки в контейнер
     * 
     * @param fromSlot из какого слота перемещается предмет
     * @param toContainer в какой контейнер перемещается предмет
     * @param toIndex на какую позицию перемещается предмет
     * @returns ничего
     */
    moveSlotContainer: (fromSlot: keyof IInventoryState["equipment"], toContainer: myContainer, toIndex: number) => void;

    /**
     * Метод перемещения предмета между слотами экипировки
     * 
     * @param fromSlot из какого слота перемещается предмет
     * @param toSlot в какой слот перемещается предмет
     * @returns ничего
     */
    moveSlotSlot: (fromSlot: keyof IInventoryState["equipment"], toSlot: keyof IInventoryState["equipment"]) => void;

    /**
     * Метод свапа предметов в контейнере
     * 
     * @param targetContainer в каком контейнере свапаются предметы
     * @param fromIndex с какой позиции перемещается предмет
     * @param toIndex на какую позицию перемещается предмет
     * @returns ничего
     */
    swapContainer: (targetContainer: myContainer, fromIndex: number, toIndex: number) => void;

    /**
     * Метод свапа предметов между контейнерами
     * 
     * @param fromContainer из какого контейнера свапается предмет
     * @param toContainer в какой контейнер свапается предмет
     * @param fromIndex с какой позиции свапается предмет
     * @param toIndex на какую позицию свапается предмет
     * @returns ничего
     */
    swapContainers: (fromContainer: myContainer, toContainer: myContainer, fromIndex: number, toIndex: number) => void;

    /**
     * Метод свапа предметов между контейнером и слотом экипировки
     * 
     * @param fromContainer из какого контейнера свапается предмет
     * @param fromIndex с какой позиции свапается предмет
     * @param toSlot в какой слот свапается предмет
     * @returns ничего
     */
    swapContainerSlot: (fromContainer: myContainer, fromIndex: number, toSlot: keyof IInventoryState["equipment"]) => void;

    /**
     * Метод свапа предметов между слотом экипировки и контейнером
     * 
     * @param fromSlot из какого слота свапается предмет
     * @param toContainer в какой контейнер свапается предмет
     * @param toIndex на какую позицию свапается предмет
     * @returns ничего
     */
    swapSlotContainer: (fromSlot: keyof IInventoryState["equipment"], toContainer: myContainer, toIndex: number) => void;

    /**
     * Метод свапа предметов между слотами экипировки
     * 
     * @param fromSlot из какого слота свапается предмет
     * @param toSlot в какой слот свапается предмет
     * @returns ничего
     */
    swapSlots: (fromSlot: keyof IInventoryState["equipment"], toSlot: keyof IInventoryState["equipment"]) => void;
}