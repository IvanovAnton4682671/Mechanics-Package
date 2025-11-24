import knightImage from "./knight_no_background.png";
import thiefImage from "./thief_no_background.png";
import wizardImage from "./wizard_no_background.png";

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