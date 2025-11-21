import type { myItemArray, myItemCell } from "./types";
import { EQUIPMENT_ITEMS, EQUIPMENT_RULES } from "../items/equipment/consts";
import { EQUIPMENT_IMAGES } from "../items/equipment/consts";
import type { myEquipmentContainer } from "../items/equipment/types";

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
    { id: 18, name: "Сапоги1", image: EQUIPMENT_IMAGES.boots, backgroundColor: "var(--gray-a3)", type: "boots", allowedContainers: EQUIPMENT_RULES.boots },
    { id: 19, name: "Одноручный меч1", image: EQUIPMENT_IMAGES.sword, backgroundColor: "var(--gray-a3)", type: "oneHandWeapon", allowedContainers: EQUIPMENT_RULES.oneHandWeapon },
    { id: 20, name: "Двуручный меч1", image: EQUIPMENT_IMAGES.longSword, backgroundColor: "var(--gray-a3)", type: "twoHandWeapon", allowedContainers: EQUIPMENT_RULES.twoHandWeapon },
    { id: 21, name: "Щит1", image: EQUIPMENT_IMAGES.shield, backgroundColor: "var(--gray-a3)", type: "offHand", allowedContainers: EQUIPMENT_RULES.offHand },
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null,
];

/**
 * Тестовый рекорд экипировки персонажа
 */
export const EQUIPMENT_TEST_ITEMS: Record<myEquipmentContainer, myItemCell> = {
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