import { Flex } from "@radix-ui/themes";
import ItemCellCard from "./ItemCellCard";
import { KNIGHT_EQUIPMENT_IMAGES } from "../../entities/items/equipment/knightEquipment/images/consts";

function InventoryEquipmentSlotsContainer() {
    return(
        <Flex width="100%" height="100%" direction="column" justify="center" align="center" gap="1">
            <Flex width="100%" height="33%" direction="row" justify="center" align="center" gap="1">
                <ItemCellCard item={ null } backgroundImage={ KNIGHT_EQUIPMENT_IMAGES.knightHelmetImage }/>
                <ItemCellCard item={ null } backgroundImage={ KNIGHT_EQUIPMENT_IMAGES.knightGlovesImage }/>
                <ItemCellCard item={ null } backgroundImage={ KNIGHT_EQUIPMENT_IMAGES.knightBracersImage }/>
                <ItemCellCard item={ null } backgroundImage={ KNIGHT_EQUIPMENT_IMAGES.knightShoulderPadsImage }/>
            </Flex>
            <Flex width="100%" height="33%" direction="row" justify="center" align="center" gap="1">
                <ItemCellCard item={ null } backgroundImage={ KNIGHT_EQUIPMENT_IMAGES.knightSwordImage }/>
                <ItemCellCard item={ null } backgroundImage={ KNIGHT_EQUIPMENT_IMAGES.knightShieldImage }/>
            </Flex>
            <Flex width="100%" height="33%" direction="row" justify="center" align="center" gap="1">
                <ItemCellCard item={ null } backgroundImage={ KNIGHT_EQUIPMENT_IMAGES.knightChestArmorImage }/>
                <ItemCellCard item={ null } backgroundImage={ KNIGHT_EQUIPMENT_IMAGES.knightBeltImage }/>
                <ItemCellCard item={ null } backgroundImage={ KNIGHT_EQUIPMENT_IMAGES.knightFootArmorImage }/>
                <ItemCellCard item={ null } backgroundImage={ KNIGHT_EQUIPMENT_IMAGES.knightBootsImage }/>
            </Flex>
        </Flex>
    );
};

export default InventoryEquipmentSlotsContainer;