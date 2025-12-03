import knightImage from "./knight.png";
import thiefImage from "./thief.png";
import wizardImage from "./wizard.png";

/**
 * Вспомогательный тип, облегчает доступ к картинкам
 */
type heroesImages = "knightImage" | "thiefImage" | "wizardImage";

/**
 * Все картинки героев
 */
export const HEROES_IMAGES: Record<heroesImages, string> = {
    knightImage: knightImage,
    thiefImage: thiefImage,
    wizardImage: wizardImage
};