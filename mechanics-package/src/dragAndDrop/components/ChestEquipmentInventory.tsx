import { Flex, Text, Separator } from "@radix-ui/themes";
import Chest from "./Chest";
import Equipment from "./Equipment";
import Inventory from "./Inventory";

function ChestEquipmentInventory() {
    return(
        <Flex width="100%" height="100%" direction="row" justify="center" align="center" gap="5">
            <Flex width="45%" height="100%" direction="column" justify="center" align="center" gap="3">
                <Text size="5">Сундук</Text>
                <Separator orientation="horizontal" size="4"/>
                <Chest/>
            </Flex>
            <Flex width="45%" height="100%" direction="column" justify="center" align="center" gap="3">
                <Flex width="100%" height="50%" justify="center" align="center">
                    <Equipment/>
                </Flex>
                <Flex width="100%" height="50%" direction="column" justify="center" align="center" gap="3">
                    <Text size="5">Инвентарь</Text>
                    <Separator orientation="horizontal" size="4"/>
                    <Inventory/>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default ChestEquipmentInventory;