import type { myItemArray, myItemType, myAllowedContainers } from "./types";

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
export const ItemTypes = {
    ITEM: "item"
};

/**
 * Правила экипировки для каждого типа предметов.
 * Определяет для каждого предмета экипировки массив подходящих контейнеров
 */
export const EQUIPMENT_RULES: Record<myItemType, myAllowedContainers> = {
    // Броня
    helmet: ["chest", "inventory", "helmet"],
    gloves: ["chest", "inventory", "gloves"],
    bracers: ["chest", "inventory", "bracers"],
    shoulderPads: ["chest", "inventory", "shoulderPads"],
    chestArmor: ["chest", "inventory", "chestArmor"],
    belt: ["chest", "inventory", "belt"],
    footArmor: ["chest", "inventory", "footArmor"],
    boots: ["chest", "inventory", "boots"],
    //Оружие
    oneHandWeapon: ["chest", "inventory", "rightHand", "leftHand"],
    twoHandWeapon: ["chest", "inventory", "rightHand"],
    offHand: ["chest", "inventory", "leftHand"]
};

/**
 * Тестовый массив сундука, в котором первые 5 ячеек заполнены предметами, а остальные пустые (null)
 */
export const chestTestItems: Array<myItemArray> = [
    { id: 1, name: "Шлем", type: "helmet", allowedContainers: EQUIPMENT_RULES.helmet },
    { id: 2, name: "Перчатки", type: "gloves", allowedContainers: EQUIPMENT_RULES.gloves },
    { id: 3, name: "Наручи", type: "bracers", allowedContainers: EQUIPMENT_RULES.bracers },
    { id: 4, name: "Наплечники", type: "shoulderPads", allowedContainers: EQUIPMENT_RULES.shoulderPads },
    { id: 5, name: "Однмеч1", type: "oneHandWeapon", allowedContainers: EQUIPMENT_RULES.oneHandWeapon },
    { id: 6, name: "Однмеч2", type: "oneHandWeapon", allowedContainers: EQUIPMENT_RULES.oneHandWeapon },
    { id: 7, name: "Двмеч", type: "twoHandWeapon", allowedContainers: EQUIPMENT_RULES.twoHandWeapon },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
];

/**
 * Аналогичный тестовый массив инвентаря персонажа
 */
export const inventoryTestItems: Array<myItemArray> = [
    { id: 1, name: "Щит", type: "offHand", allowedContainers: EQUIPMENT_RULES.offHand },
    { id: 2, name: "Доспехи", type: "chestArmor", allowedContainers: EQUIPMENT_RULES.chestArmor },
    { id: 3, name: "Пояс", type: "belt", allowedContainers: EQUIPMENT_RULES.belt },
    { id: 4, name: "Поножи", type: "footArmor", allowedContainers: EQUIPMENT_RULES.footArmor },
    { id: 5, name: "Сапоги1", type: "boots", allowedContainers: EQUIPMENT_RULES.boots },
    { id: 6, name: "Сапоги2", type: "boots", allowedContainers: EQUIPMENT_RULES.boots },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
];