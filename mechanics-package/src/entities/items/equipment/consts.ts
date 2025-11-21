import type { myEquipmentType } from "./types";
import type { myAllowedContainers } from "../types";
import type { myItem } from "../types";
import { EQUIPMENT_IMAGES } from "./images/consts";

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
 * Список со всеми предметами экипировки
 */
export const EQUIPMENT_ITEMS: Array<myItem> = [
    // Броня
    { id: 1, name: "Сапоги", image: EQUIPMENT_IMAGES.bootsImage, backgroundColor: "var(--gray-a3)", type: "boots", allowedContainers: EQUIPMENT_RULES.boots },
    { id: 2, name: "Поножи", image: EQUIPMENT_IMAGES.footArmorImage, backgroundColor: "var(--gray-a3)", type: "footArmor", allowedContainers: EQUIPMENT_RULES.footArmor },
    { id: 3, name: "Пояс", image: EQUIPMENT_IMAGES.beltImage, backgroundColor: "var(--gray-a3)", type: "belt", allowedContainers: EQUIPMENT_RULES.belt },
    { id: 4, name: "Доспех", image: EQUIPMENT_IMAGES.chestArmorImage, backgroundColor: "var(--gray-a3)", type: "chestArmor", allowedContainers: EQUIPMENT_RULES.chestArmor },
    { id: 5, name: "Наплечники", image: EQUIPMENT_IMAGES.shoulderPadsImage, backgroundColor: "var(--gray-a3)", type: "shoulderPads", allowedContainers: EQUIPMENT_RULES.shoulderPads },
    { id: 6, name: "Наручи", image: EQUIPMENT_IMAGES.bracersImage, backgroundColor: "var(--gray-a3)", type: "bracers", allowedContainers: EQUIPMENT_RULES.bracers },
    { id: 7, name: "Перчатки", image: EQUIPMENT_IMAGES.glovesImage, backgroundColor: "var(--gray-a3)", type: "gloves", allowedContainers: EQUIPMENT_RULES.gloves },
    { id: 8, name: "Шлем", image: EQUIPMENT_IMAGES.helmetImage, backgroundColor: "var(--gray-a3)", type: "helmet", allowedContainers: EQUIPMENT_RULES.helmet },
    // Оружие
    { id: 9, name: "Одноручный меч", image: EQUIPMENT_IMAGES.swordImage, backgroundColor: "var(--gray-a3)", type: "oneHandWeapon", allowedContainers: EQUIPMENT_RULES.oneHandWeapon },
    { id: 10, name: "Одноручная булава", image: EQUIPMENT_IMAGES.maceImage, backgroundColor: "var(--gray-a3)", type: "oneHandWeapon", allowedContainers: EQUIPMENT_RULES.oneHandWeapon },
    { id: 11, name: "Двуручный меч", image: EQUIPMENT_IMAGES.longSwordImage, backgroundColor: "var(--gray-a3)", type: "twoHandWeapon", allowedContainers: EQUIPMENT_RULES.twoHandWeapon },
    { id: 12, name: "Щит", image: EQUIPMENT_IMAGES.shieldImage, backgroundColor: "var(--gray-a3)", type: "offHand", allowedContainers: EQUIPMENT_RULES.offHand }
];