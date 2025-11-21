/**
 * Тип слотов экипировки, в которых могут находиться предметы
 */
export type myEquipmentSlot = "boots" | "footArmor" | "belt" | "chestArmor" | "shoulderPads"
    | "bracers" | "gloves" | "helmet" | "leftHand" | "rightHand";

/**
 * Тип контейнеров, в которых могут находиться предметы
 */
export type myContainer = "chest" | "inventory" | myEquipmentSlot;