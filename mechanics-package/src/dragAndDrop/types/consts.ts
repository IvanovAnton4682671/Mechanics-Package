import type { myItemArray, myItemCell } from "./types";
import { KNIGHT_EQUIPMENT_ITEMS } from "../../entities/items/equipment/knightEquipment/consts";
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
    KNIGHT_EQUIPMENT_ITEMS.knightBoots,
    KNIGHT_EQUIPMENT_ITEMS.knightFootArmor,
    KNIGHT_EQUIPMENT_ITEMS.knightBelt,
    KNIGHT_EQUIPMENT_ITEMS.knightChestArmor,
    KNIGHT_EQUIPMENT_ITEMS.knightShoulderPads,
    KNIGHT_EQUIPMENT_ITEMS.knightBracers,
    KNIGHT_EQUIPMENT_ITEMS.knightGloves,
    KNIGHT_EQUIPMENT_ITEMS.knightHelmet,
    null, null,
    null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null
];

/**
 * Аналогичный тестовый массив инвентаря персонажа
 */
export const INVENTORY_TEST_ITEMS: myItemArray = [
    KNIGHT_EQUIPMENT_ITEMS.knightSword,
    KNIGHT_EQUIPMENT_ITEMS.knightMace,
    KNIGHT_EQUIPMENT_ITEMS.knightLongSword,
    KNIGHT_EQUIPMENT_ITEMS.knightShield,
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