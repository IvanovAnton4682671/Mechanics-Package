import type { myContainer } from "../containersForItems/types";
import type { myEquipmentType } from "./equipment/types";

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
    image: string;
    backgroundColor: string;
    type: myEquipmentType;
    allowedContainers: myAllowedContainers;
};