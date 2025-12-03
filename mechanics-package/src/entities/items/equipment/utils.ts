import type { myHeroType } from "../../heroes/types";
import type { myEquipmentType, myEquipmentRarity } from "./types";
import type { myKnightEquipmentType } from "./knightEquipment/types";
import type { myItem } from "../types";
import { KNIGHT_EQUIPMENT_ITEMS } from "./knightEquipment/consts";
import { EQUIPMENT_TYPES_RU, EQUIPMENT_RARITY_RU, EQUIPMENT_RARITY_COLORS } from "./consts";

export function getEquipmentItem(heroClass: myHeroType, itemType: myEquipmentType, heroItemType: myKnightEquipmentType, itemRarity: myEquipmentRarity): myItem {
    // Если получили все аргументы
    if (heroClass && itemType && heroItemType && itemRarity) {
        // Если герой - рыцарь
        if (heroClass === "knight") {
            // Получаем базовый предмет по типу и типу предмета героя
            const baseItem = KNIGHT_EQUIPMENT_ITEMS.find(item => item.type === itemType && item.heroItemType === heroItemType);

            // Если получили базовый предмет
            if (baseItem) {
                // Собираем полный предмет экипировки
                const equipmentItem: myItem = {
                    id: baseItem.id,
                    class: heroClass,
                    name: baseItem.name,
                    type: baseItem.type,
                    heroItemType: baseItem.heroItemType,
                    typeRu: EQUIPMENT_TYPES_RU[baseItem.type],
                    rarity: itemRarity,
                    rarityRu: EQUIPMENT_RARITY_RU[itemRarity],
                    backgroundColor: EQUIPMENT_RARITY_COLORS[itemRarity],
                    image: baseItem.image,
                    allowedContainers: baseItem.allowedContainers
                };

                // Возвращаем полный предмет экипировки
                return equipmentItem;
            }

            throw new Error(`Не получили базовый предмет для аргументов: heroClass = ${heroClass}, itemType = ${itemType}, heroItemType = ${heroItemType}, itemRarity = ${itemRarity}`);
        }

        throw new Error(`Герой ${heroClass} пока не поддерживается`);
    }

    throw new Error(`Передан один или несколько некорректных аргументов: heroClass = ${heroClass}, itemType = ${itemType}, heroItemType = ${heroItemType}, itemRarity = ${itemRarity}`);
};