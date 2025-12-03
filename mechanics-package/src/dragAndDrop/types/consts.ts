import type { myItemArray, myItemCell } from "./types";
import { TEST_KNIGHT_EQUIPMENT } from "../../entities/items/equipment/knightEquipment/consts";
import type { myEquipmentSlot } from "../../entities/containersForItems/types";

/**
 * Константы типов перетаскиваемых элементов.
 * В системе Drag and Drop это позволяет различать разные категории элементов
 * и контролировать, какие элементы можно бросать в какие области
 * 
 * Сейчас у нас только один тип - "item", но в будущем можно добавить:
 * - WEAPON: "weapon" (только для ячеек оружия)
 * - ARMOR: "armor" (только для ячеек брони)
 * - POTION: "potion" (только для ячеек зелий)
 */
export const ITEM_TYPES = {
    ITEM: "item"
};

/**
 * Тестовый массив сундука, в котором есть несколько предметов, а остальные ячейки пустые (null)
 */
export const CHEST_TEST_ITEMS: myItemArray = [
    TEST_KNIGHT_EQUIPMENT[0],
    TEST_KNIGHT_EQUIPMENT[1],
    TEST_KNIGHT_EQUIPMENT[2],
    TEST_KNIGHT_EQUIPMENT[3],
    TEST_KNIGHT_EQUIPMENT[4],
    TEST_KNIGHT_EQUIPMENT[5],
    TEST_KNIGHT_EQUIPMENT[6],
    TEST_KNIGHT_EQUIPMENT[7],
    null, null,
    null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null
];

/**
 * Аналогичный тестовый массив инвентаря персонажа
 */
export const INVENTORY_TEST_ITEMS: myItemArray = [
    TEST_KNIGHT_EQUIPMENT[8],
    TEST_KNIGHT_EQUIPMENT[9],
    TEST_KNIGHT_EQUIPMENT[10],
    TEST_KNIGHT_EQUIPMENT[11],
    null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null
];

/**
 * Тестовый рекорд экипировки персонажа
 */
export const EQUIPMENT_TEST_ITEMS: Record<myEquipmentSlot, myItemCell> = {
    helmet: null,
    gloves: null,
    bracers: null,
    shoulderPads: null,
    leftHand: null,
    rightHand: null,
    chestArmor: null,
    belt: null,
    footArmor: null,
    boots: null
};