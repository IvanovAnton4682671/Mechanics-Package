import type { myEquipmentItemBase } from "../types";
import { EQUIPMENT_RULES } from "../consts";
import { KNIGHT_EQUIPMENT_IMAGES } from "./images/consts";
import type { myItem } from "../../types";
import { getEquipmentItem } from "../utils";

/**
 * Вся экипировка героя рыцаря
 */
export const KNIGHT_EQUIPMENT_ITEMS: Array<myEquipmentItemBase> = [
    // Броня
    {
        id: 1,
        type: "boots",
        heroItemType: "boots",
        allowedContainers: EQUIPMENT_RULES.boots,
        name: "Сапоги рыцаря",
        image: KNIGHT_EQUIPMENT_IMAGES.knightBootsImage
    },
    {
        id: 2,
        type: "footArmor",
        heroItemType: "footArmor",
        allowedContainers: EQUIPMENT_RULES.footArmor,
        name: "Поножи рыцаря",
        image: KNIGHT_EQUIPMENT_IMAGES.knightFootArmorImage
    },
    {
        id: 3,
        type: "belt",
        heroItemType: "belt",
        allowedContainers: EQUIPMENT_RULES.belt,
        name: "Пояс рыцаря",
        image: KNIGHT_EQUIPMENT_IMAGES.knightBeltImage
    },
    {
        id: 4,
        type: "chestArmor",
        heroItemType: "chestArmor",
        allowedContainers: EQUIPMENT_RULES.chestArmor,
        name: "Доспех рыцаря",
        image: KNIGHT_EQUIPMENT_IMAGES.knightChestArmorImage
    },
    {
        id: 5,
        type: "shoulderPads",
        heroItemType: "shoulderPads",
        allowedContainers: EQUIPMENT_RULES.shoulderPads,
        name: "Наплечники рыцаря",
        image: KNIGHT_EQUIPMENT_IMAGES.knightShoulderPadsImage
    },
    {
        id: 6,
        type: "bracers",
        heroItemType: "bracers",
        allowedContainers: EQUIPMENT_RULES.bracers,
        name: "Наручи рыцаря",
        image: KNIGHT_EQUIPMENT_IMAGES.knightBracersImage
    },
    {
        id: 7,
        type: "gloves",
        heroItemType: "gloves",
        allowedContainers: EQUIPMENT_RULES.gloves,
        name: "Перчатки рыцаря",
        image: KNIGHT_EQUIPMENT_IMAGES.knightGlovesImage
    },
    {
        id: 8,
        type: "helmet",
        heroItemType: "helmet",
        allowedContainers: EQUIPMENT_RULES.helmet,
        name: "Шлем рыцаря",
        image: KNIGHT_EQUIPMENT_IMAGES.knightHelmetImage
    },
    // Одноручное оружие
    {
        id: 9,
        type: "oneHandWeapon",
        heroItemType: "sword",
        allowedContainers: EQUIPMENT_RULES.oneHandWeapon,
        name: "Одноручный меч рыцаря",
        image: KNIGHT_EQUIPMENT_IMAGES.knightSwordImage
    },
    {
        id: 10,
        type: "oneHandWeapon",
        heroItemType: "mace",
        allowedContainers: EQUIPMENT_RULES.oneHandWeapon,
        name: "Одноручная булава рыцаря",
        image: KNIGHT_EQUIPMENT_IMAGES.knightMaceImage
    },
    // Двуручное оружие
    {
        id: 11,
        type: "twoHandWeapon",
        heroItemType: "longSword",
        allowedContainers: EQUIPMENT_RULES.twoHandWeapon,
        name: "Двуручный меч рыцаря",
        image: KNIGHT_EQUIPMENT_IMAGES.knightLongSwordImage
    },
    // Вспомогательное
    {
        id: 12,
        type: "offHand",
        heroItemType: "shield",
        allowedContainers: EQUIPMENT_RULES.offHand,
        name: "Щит рыцаря",
        image: KNIGHT_EQUIPMENT_IMAGES.knightShieldImage
    }
];

/**
 * Массив тестовых предметов рыцаря
 */
export const TEST_KNIGHT_EQUIPMENT: Array<myItem> = [
    // Броня
    getEquipmentItem("knight", "boots", "boots", "common"),
    getEquipmentItem("knight", "footArmor", "footArmor", "uncommon"),
    getEquipmentItem("knight", "belt", "belt", "rare"),
    getEquipmentItem("knight", "chestArmor", "chestArmor", "unique"),
    getEquipmentItem("knight", "shoulderPads", "shoulderPads", "epic"),
    getEquipmentItem("knight", "bracers", "bracers", "legendary"),
    getEquipmentItem("knight", "gloves", "gloves", "divine"),
    getEquipmentItem("knight", "helmet", "helmet", "common"),
    // Одноручное оружие
    getEquipmentItem("knight", "oneHandWeapon", "sword", "uncommon"),
    getEquipmentItem("knight", "oneHandWeapon", "mace", "rare"),
    // Двуручное оружие
    getEquipmentItem("knight", "twoHandWeapon", "longSword", "unique"),
    // Вспомогательное
    getEquipmentItem("knight", "offHand", "shield", "epic")
];