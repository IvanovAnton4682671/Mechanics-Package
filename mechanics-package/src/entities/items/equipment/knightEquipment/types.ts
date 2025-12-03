/**
 * Тип, описывающий все предметы героя рыцаря
 */
export type myKnightEquipmentType =
    // Броня
    "boots" | "footArmor" | "belt" | "chestArmor" | "shoulderPads"
    | "bracers" | "gloves" | "helmet"
    // Одноручное оружие
    | "sword" | "mace"
    // Двуручное оружие
    | "longSword"
    // Вспомогательное
    | "shield";