import type { myEquipmentContainer } from "../items/equipment/types";
import type { myItem } from "../items/types";

/**
 * Тип контейнеров, между которыми можно перемещать предметы.
 * Это позволяет системе различать, откуда и куда перемещается предмет
 */
export type myContainer = "chest" | myEquipmentContainer | "inventory";

/**
 * Тип массива, который содержит предметы.
 * Такой массив состоит как из предметов, так и из пустых ячеек (null)
 */
export type myItemArray = Array<myItem | null>;

/**
 * Тип ячейки контейнера, которая может принимать предмет или быть пустой (null)
 */
export type myItemCell = myItem | null;

/**
 * Тип для определения допустимых контейнеров для предмета
 */
export type myAllowedContainers = Array<myContainer>;