import type { myEquipmentType } from "./types";
import type { myAllowedContainers } from "../../types/types";
import type { myItem } from "../types";
import helmetImage from "./images/knight_helmet_no_background.png";
import glovesImage from "./images/knight_gloves_no_background.png";
import bracersImage from "./images/knight_bracers_no_background.png";
import shoulderPadsImage from "./images/knight_shoulder_pads_no_background.png";
import chestArmorImage from "./images/knight_chestArmor_no_background.png";
import beltImage from "./images/knight_belt_no_background.png";
import footArmorImage from "./images/knight_footArmor_no_background.png";
import bootsImage from "./images/knight_boots_no_background.png";
import swordImage from "./images/knight_sword_no_background.png";
import longSwordImage from "./images/knight_longSword_no_background.png";
import shieldImage from "./images/knight_shield_no_background.png";

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
 * Картинки всей используемой экипировки
 */
export const EQUIPMENT_IMAGES: Record<string, string> = {
    helmet: helmetImage,
    gloves: glovesImage,
    bracers: bracersImage,
    shoulderPads: shoulderPadsImage,
    chestArmor: chestArmorImage,
    belt: beltImage,
    footArmor: footArmorImage,
    boots: bootsImage,
    sword: swordImage,
    longSword: longSwordImage,
    shield: shieldImage
};

/**
 * Список со всеми предметами экипировки
 */
export const EQUIPMENT_ITEMS: Array<myItem> = [
    // Броня
    { id: 1, name: "Шлем", image: helmetImage, backgroundColor: "var(--gray-a3)", type: "helmet", allowedContainers: EQUIPMENT_RULES.helmet },
    { id: 2, name: "Перчатки", image: glovesImage, backgroundColor: "var(--gray-a3)", type: "gloves", allowedContainers: EQUIPMENT_RULES.gloves },
    { id: 3, name: "Наручи", image: bracersImage, backgroundColor: "var(--gray-a3)", type: "bracers", allowedContainers: EQUIPMENT_RULES.bracers },
    { id: 4, name: "Наплечники", image: shoulderPadsImage, backgroundColor: "var(--gray-a3)", type: "shoulderPads", allowedContainers: EQUIPMENT_RULES.shoulderPads },
    { id: 5, name: "Доспех", image: chestArmorImage, backgroundColor: "var(--gray-a3)", type: "chestArmor", allowedContainers: EQUIPMENT_RULES.chestArmor },
    { id: 6, name: "Пояс", image: beltImage, backgroundColor: "var(--gray-a3)", type: "belt", allowedContainers: EQUIPMENT_RULES.belt },
    { id: 7, name: "Поножи", image: footArmorImage, backgroundColor: "var(--gray-a3)", type: "footArmor", allowedContainers: EQUIPMENT_RULES.footArmor },
    { id: 8, name: "Сапоги", image: bootsImage, backgroundColor: "var(--gray-a3)", type: "boots", allowedContainers: EQUIPMENT_RULES.boots },
    // Оружие
    { id: 9, name: "Одноручный меч", image: swordImage, backgroundColor: "var(--gray-a3)", type: "oneHandWeapon", allowedContainers: EQUIPMENT_RULES.oneHandWeapon },
    { id: 10, name: "Двуручный меч", image: longSwordImage, backgroundColor: "var(--gray-a3)", type: "twoHandWeapon", allowedContainers: EQUIPMENT_RULES.twoHandWeapon },
    { id: 11, name: "Щит", image: shieldImage, backgroundColor: "var(--gray-a3)", type: "offHand", allowedContainers: EQUIPMENT_RULES.offHand }
];