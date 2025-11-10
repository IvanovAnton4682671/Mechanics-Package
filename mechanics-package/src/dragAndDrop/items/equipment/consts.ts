import type { myEquipmentType } from "./types";
import type { myAllowedContainers } from "../../types/types";
import type { myItem } from "../types";

/**
 * Общие правила экипировки, описывают какой предмет экипировки в какие ячейки можно поместить
 */
export const EQUIPMENT_RULES: Record<myEquipmentType, myAllowedContainers> = {
    // Броня
    helmet: ["chest", "inventory", "helmet"],
    gloves: ["chest", "inventory", "gloves"],
    bracers: ["chest", "inventory", "bracers"],
    shoulderPads: ["chest", "inventory", "shoulderPads"],
    chestArmor: ["chest", "inventory", "chestArmor"],
    belt: ["chest", "inventory", "belt"],
    footArmor: ["chest", "inventory", "footArmor"],
    boots: ["chest", "inventory", "boots"],
    // Оружие
    oneHandWeapon: ["chest", "inventory", "rightHand", "leftHand"],
    twoHandWeapon: ["chest", "inventory", "rightHand"],
    offHand: ["chest", "inventory", "leftHand"]
};

/**
 * Список со всеми предметами экипировки
 */
export const EQUIPMENT_ITEMS: Array<myItem> = [
    // Броня
    { id: 1, name: "Шлем", type: "helmet", allowedContainers: EQUIPMENT_RULES.helmet },
    { id: 2, name: "Перчатки", type: "gloves", allowedContainers: EQUIPMENT_RULES.gloves },
    { id: 3, name: "Наручи", type: "bracers", allowedContainers: EQUIPMENT_RULES.bracers },
    { id: 4, name: "Наплечники", type: "shoulderPads", allowedContainers: EQUIPMENT_RULES.shoulderPads },
    { id: 5, name: "Доспех", type: "chestArmor", allowedContainers: EQUIPMENT_RULES.chestArmor },
    { id: 6, name: "Пояс", type: "belt", allowedContainers: EQUIPMENT_RULES.belt },
    { id: 7, name: "Поножи", type: "footArmor", allowedContainers: EQUIPMENT_RULES.footArmor },
    { id: 8, name: "Сапоги", type: "boots", allowedContainers: EQUIPMENT_RULES.boots },
    // Оружие
    { id: 9, name: "Одноручный меч", type: "oneHandWeapon", allowedContainers: EQUIPMENT_RULES.oneHandWeapon },
    { id: 10, name: "Двуручный меч", type: "twoHandWeapon", allowedContainers: EQUIPMENT_RULES.twoHandWeapon },
    { id: 11, name: "Щит", type: "offHand", allowedContainers: EQUIPMENT_RULES.offHand }
];