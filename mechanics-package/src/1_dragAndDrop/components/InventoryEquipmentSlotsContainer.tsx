import { Flex } from "@radix-ui/themes";
import ItemCellCard from "./ItemCellCard";

function InventoryEquipmentSlotsContainer() {
    return(
        <Flex width="100%" height="100%" direction="column" justify="center" align="center" gap="1">
            <Flex width="100%" height="33%" direction="row" justify="center" align="center" gap="1">
                <ItemCellCard item={ null }/>
                <ItemCellCard item={ null }/>
                <ItemCellCard item={ null }/>
                <ItemCellCard item={ null }/>
            </Flex>
            <Flex width="100%" height="33%" direction="row" justify="center" align="center" gap="1">
                <ItemCellCard item={ null }/>
                <ItemCellCard item={ null }/>
            </Flex>
            <Flex width="100%" height="33%" direction="row" justify="center" align="center" gap="1">
                <ItemCellCard item={ null }/>
                <ItemCellCard item={ null }/>
                <ItemCellCard item={ null }/>
                <ItemCellCard item={ null }/>
            </Flex>
        </Flex>
    );
};

export default InventoryEquipmentSlotsContainer;