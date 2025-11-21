import type { myEquipmentType } from "./equipment/types";
import type { myAllowedContainers } from "../types/types";

/**
 * Тип для любого предмета
 */
export type myItem = {
    id: number;
    name: string;
    image: string;
    backgroundColor: string;
    type: myEquipmentType;
    allowedContainers: myAllowedContainers;
};