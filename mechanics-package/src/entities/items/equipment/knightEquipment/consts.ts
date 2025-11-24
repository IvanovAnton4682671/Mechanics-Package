import type { myItem } from "../../types";
import { EQUIPMENT_RARITY_COLORS } from "../consts";
import { KNIGHT_EQUIPMENT_IMAGES } from "./images/consts";
import { EQUIPMENT_RULES } from "../consts";

/**
 * Вся экипировка героя рыцаря
 */
export const KNIGHT_EQUIPMENT_ITEMS: Record<string, myItem> = {
    // Броня
    knightBoots: {
        id: 1,
        class: "knight",
        name: "Сапоги рыцаря",
        type: "boots",
        typeRu: "Сапоги",
        rarity: "common",
        rarityRu: "Обычная",
        backgroundColor: EQUIPMENT_RARITY_COLORS.common,
        image: KNIGHT_EQUIPMENT_IMAGES.knightBootsImage,
        allowedContainers: EQUIPMENT_RULES.boots
    },
    knightFootArmor: {
        id: 2,
        class: "knight",
        name: "Поножи рыцаря",
        type: "footArmor",
        typeRu: "Поножи",
        rarity: "uncommon",
        rarityRu: "Необычная",
        backgroundColor: EQUIPMENT_RARITY_COLORS.uncommon,
        image: KNIGHT_EQUIPMENT_IMAGES.knightFootArmorImage,
        allowedContainers: EQUIPMENT_RULES.footArmor
    },
    knightBelt: {
        id: 3,
        class: "knight",
        name: "Пояс рыцаря",
        type: "belt",
        typeRu: "Пояс",
        rarity: "rare",
        rarityRu: "Редкая",
        backgroundColor: EQUIPMENT_RARITY_COLORS.rare,
        image: KNIGHT_EQUIPMENT_IMAGES.knightBeltImage,
        allowedContainers: EQUIPMENT_RULES.belt
    },
    knightChestArmor: {
        id: 4,
        class: "knight",
        name: "Доспех рыцаря",
        type: "chestArmor",
        typeRu: "Доспех",
        rarity: "unique",
        rarityRu: "Уникальная",
        backgroundColor: EQUIPMENT_RARITY_COLORS.unique,
        image: KNIGHT_EQUIPMENT_IMAGES.knightChestArmorImage,
        allowedContainers: EQUIPMENT_RULES.chestArmor
    },
    knightShoulderPads: {
        id: 5,
        class: "knight",
        name: "Наплечники рыцаря",
        type: "shoulderPads",
        typeRu: "Наплечники",
        rarity: "epic",
        rarityRu: "Эпическая",
        backgroundColor: EQUIPMENT_RARITY_COLORS.epic,
        image: KNIGHT_EQUIPMENT_IMAGES.knightShoulderPadsImage,
        allowedContainers: EQUIPMENT_RULES.shoulderPads
    },
    knightBracers: {
        id: 6,
        class: "knight",
        name: "Наручи рыцаря",
        type: "bracers",
        typeRu: "Наручи",
        rarity: "legendary",
        rarityRu: "Легендарная",
        backgroundColor: EQUIPMENT_RARITY_COLORS.legendary,
        image: KNIGHT_EQUIPMENT_IMAGES.knightBracersImage,
        allowedContainers: EQUIPMENT_RULES.bracers
    },
    knightGloves: {
        id: 7,
        class: "knight",
        name: "Перчатки рыцаря",
        type: "gloves",
        typeRu: "Перчатки",
        rarity: "divine",
        rarityRu: "Божественная",
        backgroundColor: EQUIPMENT_RARITY_COLORS.divine,
        image: KNIGHT_EQUIPMENT_IMAGES.knightGlovesImage,
        allowedContainers: EQUIPMENT_RULES.gloves
    },
    knightHelmet: {
        id: 8,
        class: "knight",
        name: "Шлем рыцаря",
        type: "helmet",
        typeRu: "Шлем",
        rarity: "common",
        rarityRu: "Обычная",
        backgroundColor: EQUIPMENT_RARITY_COLORS.common,
        image: KNIGHT_EQUIPMENT_IMAGES.knightHelmetImage,
        allowedContainers: EQUIPMENT_RULES.helmet
    },
    // Оружие
    knightSword: {
        id: 9,
        class: "knight",
        name: "Одноручный меч рыцаря",
        type: "oneHandWeapon",
        typeRu: "Одноручное оружие",
        rarity: "uncommon",
        rarityRu: "Необычная",
        backgroundColor: EQUIPMENT_RARITY_COLORS.uncommon,
        image: KNIGHT_EQUIPMENT_IMAGES.knightSwordImage,
        allowedContainers: EQUIPMENT_RULES.oneHandWeapon
    },
    knightMace: {
        id: 10,
        class: "knight",
        name: "Одноручная булава рыцаря",
        type: "oneHandWeapon",
        typeRu: "Одноручное оружие",
        rarity: "rare",
        rarityRu: "Редкая",
        backgroundColor: EQUIPMENT_RARITY_COLORS.rare,
        image: KNIGHT_EQUIPMENT_IMAGES.knightMaceImage,
        allowedContainers: EQUIPMENT_RULES.oneHandWeapon
    },
    knightLongSword: {
        id: 11,
        class: "knight",
        name: "Двуручный рыцаря",
        type: "twoHandWeapon",
        typeRu: "Двуручное оружие",
        rarity: "unique",
        rarityRu: "Уникальная",
        backgroundColor: EQUIPMENT_RARITY_COLORS.unique,
        image: KNIGHT_EQUIPMENT_IMAGES.knightLongSwordImage,
        allowedContainers: EQUIPMENT_RULES.twoHandWeapon
    },
    knightShield: {
        id: 11,
        class: "knight",
        name: "Щит рыцаря",
        type: "offHand",
        typeRu: "Вспомогательное",
        rarity: "epic",
        rarityRu: "Эпическая",
        backgroundColor: EQUIPMENT_RARITY_COLORS.epic,
        image: KNIGHT_EQUIPMENT_IMAGES.knightShieldImage,
        allowedContainers: EQUIPMENT_RULES.offHand
    }
};