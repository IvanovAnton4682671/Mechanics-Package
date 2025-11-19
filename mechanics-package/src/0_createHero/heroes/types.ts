/**
 * Тип "типа" героя
 */
type myHeroType = "knight" | "thief" | "wizard";

/**
 * Тип для характеристик героя
 */
type myHeroStat = "health" | "mana" | "strength" | "agility" | "intelligence";

/**
 * Тип, описывающий все статы персонажа
 */
type myHeroStats = Record<myHeroStat, number>;

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