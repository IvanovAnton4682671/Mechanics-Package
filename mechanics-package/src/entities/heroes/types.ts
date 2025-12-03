/**
 * Тип "типа" героя
 */
export type myHeroType = "knight" | "thief" | "wizard";

/**
 * Тип для названия характеристики героя
 */
export type myHeroStatName = "health" | "mana" | "strength" | "agility" | "intelligence";

/**
 * Тип для русского названия характеристики героя
 */
export type myHeroStatNameRu = "Здоровье" | "Мана" | "Сила" | "Ловкость" | "Интеллект";

/**
 * Тип для лучшей информативности характеристики героя
 */
export type myHeroStat = {
    statRu: myHeroStatNameRu;
    statValue: number;
};

/**
 * Тип, описывающий все характеристики героя
 */
export type myHeroStats = Record<myHeroStatName, myHeroStat>;

/**
 * Тип героя
 */
export type myHero = {
    id: number;
    type: myHeroType;
    image: string;
    name: string | null;
    stats: myHeroStats;
    description: string;
};