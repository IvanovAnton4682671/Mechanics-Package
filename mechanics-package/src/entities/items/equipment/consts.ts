import type { myEquipmentType, myEquipmentTypeRu, myEquipmentRarity, myEquipmentRarityRu, myEquipmentRarityColor } from "./types";
import type { myAllowedContainers } from "../types";

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
 * Общие пары типов для предметов экипировки
 */
export const EQUIPMENT_TYPES_RU: Record<myEquipmentType, myEquipmentTypeRu> = {
    // Броня
    boots: "Сапоги",
    footArmor: "Поножи",
    belt: "Пояс",
    chestArmor: "Доспех",
    shoulderPads: "Наплечники",
    bracers: "Наручи",
    gloves: "Перчатки",
    helmet: "Шлем",
    // Оружие
    oneHandWeapon: "Одноручное оружие",
    twoHandWeapon: "Двуручное оружие",
    offHand: "Вспомогательное"
};

/**
 * Общие пары названий редкостей для предметов экипировки
 */
export const EQUIPMENT_RARITY_RU: Record<myEquipmentRarity, myEquipmentRarityRu> = {
    common: "Обычная",
    uncommon: "Необычная",
    rare: "Редкая",
    unique: "Уникальная",
    epic: "Эпическая",
    legendary: "Легендарная",
    divine: "Божественная"
};

/**
 * Общие пары редкости-цвета для предметов экипировки
 */
export const EQUIPMENT_RARITY_COLORS: Record<myEquipmentRarity, myEquipmentRarityColor> = {
    common: "var(--gray-a5)",
    uncommon: "var(--jade-a5)",
    rare: "var(--yellow-a5)",
    unique: "var(--purple-a5)",
    epic: "var(--pink-a5)",
    legendary: "var(--ruby-a5)",
    divine: "var(--tomato-a5)"
};