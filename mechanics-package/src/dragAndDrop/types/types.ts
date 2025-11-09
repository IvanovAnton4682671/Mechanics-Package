import type { Item } from "./interfaces";

/**
 * Тип контейнеров, между которыми можно перемещать предметы.
 * Это позволяет системе различать, откуда и куда перемещается предмет
 */
export type myContainer = "chest"
    | "inventory"
    | "helmet"
    | "gloves"
    | "bracers"
    | "shoulderPads"
    | "leftHand"
    | "rightHand"
    | "chestArmor"
    | "belt"
    | "footArmor"
    | "boots";

/**
 * Тип массива, который содержит предметы.
 * Такой массив состоит как из предметов, так и из пустых ячеек (null)
 */
export type myItemArray = Item | null;

/**
 * Тип ячейки контейнера, которая может принимать предмет или быть пустой (null)
 */
export type myItemCell = Item | null;

/**
 * Типы предметов для определения правил экипировки
 */
export type myItemType = "helmet"
    | "gloves"
    | "bracers"
    | "shoulderPads"
    | "offHand"
    | "twoHandWeapon"
    | "oneHandWeapon"
    | "chestArmor"
    | "belt"
    | "footArmor"
    | "boots";

/**
 * Тип для определения допустимых контейнеров для предмета
 */
export type myAllowedContainers = myContainer[];