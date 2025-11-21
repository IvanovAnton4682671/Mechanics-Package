import type { myItemArray, myItemCell } from "./types";
import { EQUIPMENT_ITEMS } from "../../entities/items/equipment/consts";
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
    EQUIPMENT_ITEMS[0],
    EQUIPMENT_ITEMS[1],
    EQUIPMENT_ITEMS[2],
    EQUIPMENT_ITEMS[3],
    EQUIPMENT_ITEMS[4],
    EQUIPMENT_ITEMS[5],
    EQUIPMENT_ITEMS[6],
    EQUIPMENT_ITEMS[7],
    null, null,
    null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null
];

/**
 * Аналогичный тестовый массив инвентаря персонажа
 */
export const INVENTORY_TEST_ITEMS: myItemArray = [
    EQUIPMENT_ITEMS[8],
    EQUIPMENT_ITEMS[9],
    EQUIPMENT_ITEMS[10],
    EQUIPMENT_ITEMS[11],
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