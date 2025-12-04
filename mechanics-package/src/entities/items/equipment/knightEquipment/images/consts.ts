import knightBootsImage from "./knight_boots.png";
import knightFootArmorImage from "./knight_footArmor.png";
import knightBeltImage from "./knight_belt.png";
import knightChestArmorImage from "./knight_chestArmor.png";
import knightShoulderPadsImage from "./knight_shoulder_pads.png";
import knightBracersImage from "./knight_bracers.png";
import knightGlovesImage from "./knight_gloves.png";
import knightHelmetImage from "./knight_helmet.png";
import knightSwordImage from "./knight_sword.png";
import knightMaceImage from "./knight_mace.png";
import knightLongSwordImage from "./knight_longSword.png";
import knightShieldImage from "./knight_shield.png";

/**
 * Вспомогательный тип, облегчает доступ к картинкам
 */
type myKnightEquipmentImages = "knightBootsImage" | "knightFootArmorImage" | "knightBeltImage" | "knightChestArmorImage"
    | "knightShoulderPadsImage" | "knightBracersImage" | "knightGlovesImage" | "knightHelmetImage"
    | "knightSwordImage" | "knightMaceImage" | "knightLongSwordImage" | "knightShieldImage";

/**
 * Все картинки предметов экипировки героя рыцаря
 */
export const KNIGHT_EQUIPMENT_IMAGES: Record<myKnightEquipmentImages, string> = {
    // Броня
    knightBootsImage: knightBootsImage,
    knightFootArmorImage: knightFootArmorImage,
    knightBeltImage: knightBeltImage,
    knightChestArmorImage: knightChestArmorImage,
    knightShoulderPadsImage: knightShoulderPadsImage,
    knightBracersImage: knightBracersImage,
    knightGlovesImage: knightGlovesImage,
    knightHelmetImage: knightHelmetImage,
    // Одноручное оружие
    knightSwordImage: knightSwordImage,
    knightMaceImage: knightMaceImage,
    // Двуручное оружие
    knightLongSwordImage: knightLongSwordImage,
    // Вспомогательное
    knightShieldImage: knightShieldImage
};