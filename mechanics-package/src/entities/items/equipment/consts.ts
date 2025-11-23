import type { myEquipmentType } from "./types";
import type { myAllowedContainers } from "../types";
import type { myEquipmentRarityColorPair } from "./types";

/**
 * Общие правила экипировки, описывают какой предмет экипировки в какие ячейки можно поместить
 */
export const EQUIPMENT_RULES: Record<myEquipmentType, myAllowedContainers> = {
    // Броня
    boots: ["chest", "inventory", "boots"],
    footArmor: ["chest", "inventory", "footArmor"],
    belt: ["chest", "inventory", "belt"],
    chestArmor: ["chest", "inventory", "chestArmor"],
    shoulderPads: ["chest", "inventory", "shoulderPads"],
    bracers: ["chest", "inventory", "bracers"],
    gloves: ["chest", "inventory", "gloves"],
    helmet: ["chest", "inventory", "helmet"],
    // Оружие
    oneHandWeapon: ["chest", "inventory", "rightHand", "leftHand"],
    twoHandWeapon: ["chest", "inventory", "rightHand"],
    offHand: ["chest", "inventory", "leftHand"]
};

/**
 * Общие пары редкости-цвета для предметов экипировки
 */
export const EQUIPMENT_RARITY_COLORS: myEquipmentRarityColorPair = {
    common: "var(--gray-a5)",
    uncommon: "var(--jade-a5)",
    rare: "var(--yellow-a5)",
    unique: "var(--purple-a5)",
    epic: "var(--pink-a5)",
    legendary: "var(--ruby-a5)",
    divine: "var(--tomato-a5)"
}