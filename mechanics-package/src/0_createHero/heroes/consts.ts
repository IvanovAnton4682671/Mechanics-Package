import type { myHero } from "./types";
import knightImage from "./images/knight_no_background.png";
import thiefImage from "./images/thief_no_background.png";
import wizardImage from "./images/wizard_no_background.png";

/**
 * Список всех героев
 */
export const HEROES: Array<myHero> = [
    {
        id: 1,
        type: "knight",
        image: knightImage,
        name: null,
        stats: {
            health: { statRu: "Здоровье", statValue: 100 },
            mana: { statRu: "Мана", statValue: 50 },
            strength: { statRu: "Сила", statValue: 10 },
            agility: { statRu: "Ловкость", statValue: 4 },
            intelligence: { statRu: "Интеллект", statValue: 4 }
        },
        description: "Закованный в сталь доблестный воин, непоколебимый страж и опора любой армии. Его клятва - его закон, а щит - защита для слабых.\n\nОсновная характеристика: Сила. Полагается на грубую мощь и невероятную живучесть.\n\nСнаряжение: Тяжелые латы, меч-палаш и большой башенный щит."
    },
    {
        id: 2,
        type: "thief",
        image: thiefImage,
        name: null,
        stats: {
            health: { statRu: "Здоровье", statValue: 100 },
            mana: { statRu: "Мана", statValue: 50 },
            strength: { statRu: "Сила", statValue: 4 },
            agility: { statRu: "Ловкость", statValue: 10 },
            intelligence: { statRu: "Интеллект", statValue: 4 }
        },
        description: "Призрак в тенях, мастер обмана и скрытности. Он предпочитает ловкость честному бою, а его кинжал наносит решающий удар, когда враг менее всего этого ожидает.\n\nОсновная характеристика: Ловкость. Полагается на скорость, точность и умение манипулировать.\n\nСнаряжение: Кожаная броня, парные кинжалы или кастеты, и набор отмычек с метательными лезвиями."
    },
    {
        id: 3,
        type: "wizard",
        image: wizardImage,
        name: null,
        stats: {
            health: { statRu: "Здоровье", statValue: 70 },
            mana: { statRu: "Мана", statValue: 80 },
            strength: { statRu: "Сила", statValue: 4 },
            agility: { statRu: "Ловкость", statValue: 4 },
            intelligence: { statRu: "Интеллект", statValue: 10 }
        },
        description: "Учёный, черпающий силу в древних знаниях и собственной воле. Его заклинания могут испепелить врага или изменить саму реальность, но за могущество приходится платить.\n\nОсновная характеристика: Интеллект. Полагается на магическую мощь и глубину резерва маны.\n\nСнаряжение: Мантийные одеяния, магический посох или кристальный жезл, и толстый гримуар с заклинаниями."
    }
];