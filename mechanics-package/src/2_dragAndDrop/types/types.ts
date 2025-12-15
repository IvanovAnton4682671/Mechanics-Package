import type { myItem } from "../../entities/items/types";

/**
 * Тип массива, который содержит предметы.
 * Такой массив состоит как из предметов, так и из пустых ячеек (null)
 */
export type myItemArray = Array<myItem | null>;

/**
 * Тип ячейки контейнера, которая может принимать предмет или быть пустой (null)
 */
export type myItemCell = myItem | null;