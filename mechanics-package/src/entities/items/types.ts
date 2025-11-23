import type { myContainer } from "../containersForItems/types";
import type {
    myEquipmentType,
    myEquipmentTypeRu,
    myEquipmentRarity,
    myEquipmentRarityRu,
    myEquipmentRarityColor
} from "./equipment/types";

/**
 * Тип, описывающий список контейнеров, куда можно переместить определённый предмет
 */
export type myAllowedContainers = Array<myContainer>;

/**
 * Тип, описывающий любой предмет
 */
export type myItem = {
    id: number;
    name: string;
    type: myEquipmentType;
    typeRu: myEquipmentTypeRu;
    rarity: myEquipmentRarity;
    rarityRu: myEquipmentRarityRu;
    backgroundColor: myEquipmentRarityColor;
    image: string;
    allowedContainers: myAllowedContainers;
};