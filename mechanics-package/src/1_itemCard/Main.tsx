import { Flex } from "@radix-ui/themes";
import ItemCard from "./components/ItemCard";
import { KNIGHT_EQUIPMENT_ITEMS } from "../entities/items/equipment/knightEquipment/consts";

function Main() {
    return(
        <Flex width="100%" height="100%" justify="center" align="center" gap="3">
            <ItemCard item={ KNIGHT_EQUIPMENT_ITEMS.knightBoots }/>
            <ItemCard item={ KNIGHT_EQUIPMENT_ITEMS.knightFootArmor }/>
            <ItemCard item={ KNIGHT_EQUIPMENT_ITEMS.knightBelt }/>
            <ItemCard item={ KNIGHT_EQUIPMENT_ITEMS.knightChestArmor }/>
            <ItemCard item={ KNIGHT_EQUIPMENT_ITEMS.knightShoulderPads }/>
            <ItemCard item={ KNIGHT_EQUIPMENT_ITEMS.knightBracers }/>
            <ItemCard item={ KNIGHT_EQUIPMENT_ITEMS.knightGloves }/>
            <ItemCard item={ KNIGHT_EQUIPMENT_ITEMS.knightHelmet }/>
            <ItemCard item={ KNIGHT_EQUIPMENT_ITEMS.knightSword }/>
            <ItemCard item={ KNIGHT_EQUIPMENT_ITEMS.knightMace }/>
            <ItemCard item={ KNIGHT_EQUIPMENT_ITEMS.knightLongSword }/>
            <ItemCard item={ KNIGHT_EQUIPMENT_ITEMS.knightShield }/>
        </Flex>
    )
};

export default Main;