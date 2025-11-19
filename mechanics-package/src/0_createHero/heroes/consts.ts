import type { myHero } from "./types";

export const HEROES: Array<myHero> = [
    {
        id: 1,
        type: "knight",
        image: "./images/knight_no_background.png",
        name: null,
        stats: {
            health: 100,
            mana: 50,
            strength: 10,
            agility: 5,
            intelligence: 3
        },
        description: "Закованный в сталь доблестный воин, непоколебимый страж и опора любой армии. Его клятва - его закон, а щит - защита для слабых.\nОсновные характеристики: Сила и Здоровье. Полагается на грубую мощь и невероятную живучесть.\nСнаряжение: Тяжелые латы, меч-палаш и большой башенный щит."
    }
];