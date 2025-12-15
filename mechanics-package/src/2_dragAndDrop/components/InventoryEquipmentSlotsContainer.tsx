import { useInventoryStore } from "../stores/inventoryStore";
import { Flex } from "@radix-ui/themes";
import ItemCellCard from "./ItemCellCard";
import { KNIGHT_EQUIPMENT_IMAGES } from "../../entities/items/equipment/knightEquipment/images/consts";

function InventoryEquipmentSlotsContainer() {
    // Получаем всю экипировку из хранилища
    const equipment = useInventoryStore(state => state.equipment);

    return(
        <Flex width="100%" height="100%" direction="column" justify="center" align="center" gap="1">
            <Flex width="100%" height="33%" direction="row" justify="center" align="center" gap="1">
                <ItemCellCard id={ 10 } item={ equipment.helmet } backgroundImage={ KNIGHT_EQUIPMENT_IMAGES.knightHelmetImage } containerType="helmet"/>
                <ItemCellCard id={ 9 } item={ equipment.gloves } backgroundImage={ KNIGHT_EQUIPMENT_IMAGES.knightGlovesImage } containerType="gloves"/>
                <ItemCellCard id={ 8 } item={ equipment.bracers } backgroundImage={ KNIGHT_EQUIPMENT_IMAGES.knightBracersImage } containerType="bracers"/>
                <ItemCellCard id={ 7 } item={ equipment.shoulderPads } backgroundImage={ KNIGHT_EQUIPMENT_IMAGES.knightShoulderPadsImage } containerType="shoulderPads"/>
            </Flex>
            <Flex width="100%" height="33%" direction="row" justify="center" align="center" gap="1">
                <ItemCellCard id={ 6 } item={ equipment.rightHand } backgroundImage={ KNIGHT_EQUIPMENT_IMAGES.knightSwordImage } containerType="rightHand"/>
                <ItemCellCard id={ 5 } item={ equipment.leftHand } backgroundImage={ KNIGHT_EQUIPMENT_IMAGES.knightShieldImage } containerType="leftHand"/>
            </Flex>
            <Flex width="100%" height="33%" direction="row" justify="center" align="center" gap="1">
                <ItemCellCard id={ 4 } item={ equipment.chestArmor } backgroundImage={ KNIGHT_EQUIPMENT_IMAGES.knightChestArmorImage } containerType="chestArmor"/>
                <ItemCellCard id={ 3 } item={ equipment.belt } backgroundImage={ KNIGHT_EQUIPMENT_IMAGES.knightBeltImage } containerType="belt"/>
                <ItemCellCard id={ 2 } item={ equipment.footArmor } backgroundImage={ KNIGHT_EQUIPMENT_IMAGES.knightFootArmorImage } containerType="footArmor"/>
                <ItemCellCard id={ 1 } item={ equipment.boots } backgroundImage={ KNIGHT_EQUIPMENT_IMAGES.knightBootsImage } containerType="boots"/>
            </Flex>
        </Flex>
    );
};

export default InventoryEquipmentSlotsContainer;