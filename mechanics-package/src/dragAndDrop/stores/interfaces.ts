import type { myItemArray, myItemCell, myContainer } from "../types/types";

/**
 * Интерфейс состояния инвентаря, который управляет всеми предметами
 * в сундуке и инвентаре игрока, а также операциями перемещения
 * 
 * @field chestItems - массив предметов в сундуке. Может содержать как предметы, так и пустые ячейки (null)
 * @field inventoryItems - массив предметов в инвентаре игрока. Также может содержать пустые ячейки
 * @field equipment - экипировка персонажа - отдельный объект с фиксированными слотами
 * @method moveItem - метод для перемещения предметов между ячейками и контейнерами
 * @method swapItems - метод для принудительной замены предметов местами
 * @method equipItem - метод для перемещения предметов в экипировку
 * @method unequipItem - метод для снятия предмета с экипировки
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
     * Метод для перемещения предметов между ячейками и контейнерами.
     * Автоматически определяет, нужно ли просто переместить предмет или поменять местами
     * 
     * @param fromContainer - откуда перемещается предмет (сундук или инвентарь)
     * @param toContainer - куда перемещается предмет (сундук или инвентарь)
     * @param fromIndex - индекс исходной ячейки в массиве
     * @param toIndex - индекс целевой ячейки в массиве
     */
    moveItem: (fromContainer: myContainer, toContainer: myContainer, fromIndex: number, toIndex: number) => void;
    /**
     * Метод для принудительной замены предметов местами.
     * Используется, когда обе ячейки заняты предметами
     * 
     * @param fromContainer - откуда перемещается предмет
     * @param toContainer - куда перемещается предмет
     * @param fromIndex - индекс исходной ячейки
     * @param toIndex - индекс целевой ячейки
     */
    swapItems: (fromContainer: myContainer, toContainer: myContainer, fromIndex: number, toIndex: number) => void;
    /**
     * Используется, когда нужно поменять предметы в двух ячейках экипировки
     * 
     * @param fromSlot - из какого слота меняем
     * @param toSlot - в какой слот меняем
     */
    swapEquipmentSlots: (fromSlot: keyof IInventoryState["equipment"], toSlot: keyof IInventoryState["equipment"]) => void;
    /**
     * Метод для смены экипировки и предмета из контейнера.
     * Используется, когда пытаемся сделать свап экипировкой с предметом из контейнера
     * 
     * @param fromSlot - из какого слоте меняем
     * @param toContainer - в каком контейнере меняем
     * @param toIndex - в какую позицию кладём и меняем
     */
    swapEquipmentWithContainer: (fromSlot: keyof IInventoryState["equipment"], toContainer: myContainer, toIndex: number) => void;
    /**
     * Метод для перемещения предметов в экипировку.
     * Используется, когда предмет нужно надеть на персонажа
     * 
     * @param fromContainer - откуда перемещается предмет
     * @param fromIndex - индекс исходной ячейки
     * @param toSlot - в какой слот экипировки перемещается предмет
     */
    equipItem: (fromContainer: myContainer, fromIndex: number, toSlot: keyof IInventoryState["equipment"]) => void;
    /**
     * Метод для снятия предмета с экипировки.
     * Используется, когда нужно снять предмет с персонажа
     * 
     * @param fromSlot - с какого слота экипировки снимается предмет
     * @param toContainer - куда перемещается предмет
     * @param toIndex - индекс целевой ячейки
     */
    unequipItem: (fromSlot: keyof IInventoryState["equipment"], toContainer: myContainer, toIndex: number) => void;
}