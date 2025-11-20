/**
 * Тип "типа" героя
 */
type myHeroType = "knight" | "thief" | "wizard";

/**
 * Тип для названия характеристики героя
 */
export type myHeroStatEn = "health" | "mana" | "strength" | "agility" | "intelligence";

/**
 * Тип для русского названия характеристики героя
 */
type myHeroStatRu = "Здоровье" | "Мана" | "Сила" | "Ловкость" | "Интеллект";

/**
 * Тип для лучшей иформативности характеристики героя
 */
export type myHeroStat = {
    statRu: myHeroStatRu;
    statValue: number;
};

/**
 * Тип, описывающий все характеристики персонажа
 */
type myHeroStats = Record<myHeroStatEn, myHeroStat>;

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