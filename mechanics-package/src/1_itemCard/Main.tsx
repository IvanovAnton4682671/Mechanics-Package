import { Flex } from "@radix-ui/themes";
import ItemCellCard from "./components/ItemCellCard";
import { TEST_KNIGHT_EQUIPMENT } from "../entities/items/equipment/knightEquipment/consts";

function Main() {
    return(
        <Flex width="100%" height="100%" justify="center" align="center">
            <ItemCellCard item={ null }/>
            <ItemCellCard item={ TEST_KNIGHT_EQUIPMENT[0] }/>
            <ItemCellCard item={ TEST_KNIGHT_EQUIPMENT[1] }/>
            <ItemCellCard item={ TEST_KNIGHT_EQUIPMENT[2] }/>
            <ItemCellCard item={ TEST_KNIGHT_EQUIPMENT[3] }/>
            <ItemCellCard item={ TEST_KNIGHT_EQUIPMENT[4] }/>
            <ItemCellCard item={ TEST_KNIGHT_EQUIPMENT[5] }/>
            <ItemCellCard item={ TEST_KNIGHT_EQUIPMENT[6] }/>
            <ItemCellCard item={ TEST_KNIGHT_EQUIPMENT[7] }/>
            <ItemCellCard item={ TEST_KNIGHT_EQUIPMENT[8] }/>
            <ItemCellCard item={ TEST_KNIGHT_EQUIPMENT[9] }/>
            <ItemCellCard item={ TEST_KNIGHT_EQUIPMENT[10] }/>
            <ItemCellCard item={ TEST_KNIGHT_EQUIPMENT[11] }/>
            <ItemCellCard item={ null }/>
        </Flex>
    )
};

export default Main;