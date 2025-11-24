/**
 * Тип предметов экипировки
 */
export type myEquipmentType = "boots" | "footArmor" | "belt" | "chestArmor" | "shoulderPads"
    | "bracers" | "gloves" | "helmet" | "oneHandWeapon" | "twoHandWeapon" | "offHand";

/**
 * Тип предметов экипировки на русском
 */
export type myEquipmentTypeRu = "Сапоги" | "Поножи" | "Пояс" | "Доспех" | "Наплечники"
    | "Наручи" | "Перчатки" | "Шлем" | "Одноручное оружие" | "Двуручное оружие" | "Вспомогательное";

/**
 * Тип редкости предметов экипировки
 */
export type myEquipmentRarity = "common" | "uncommon" | "rare" | "unique" | "epic"
    | "legendary" | "divine";

/**
 * Тип редкости предметов экипировки на русском
 */
export type myEquipmentRarityRu = "Обычная" | "Необычная" | "Редкая" | "Уникальная" | "Эпическая"
    | "Легендарная" | "Божественная";

/**
 * Тип цвета редкости предметов экипировки
 */
export type myEquipmentRarityColor = "var(--gray-a5)" | "var(--jade-a5)" | "var(--yellow-a5)" | "var(--purple-a5)"
    | "var(--pink-a5)" | "var(--ruby-a5)" | "var(--tomato-a5)";