import { Flex, Text, Separator } from "@radix-ui/themes";
import Chest from "./Chest";
import Inventory from "./Inventory";

function ChestAndInventory() {
    return(
        <Flex width="100%" height="100%" direction="row" justify="center" align="center" gap="9">
            <Flex width="45%" height="100%" direction="column" justify="center" align="center" gap="5">
                <Text size="7">Сундук</Text>
                <Separator orientation="horizontal" size="4"/>
                <Chest/>
            </Flex>
            <Flex width="45%" height="100%" direction="column" justify="center" align="center" gap="5">
                <Text size="7">Инвентарь</Text>
                <Separator orientation="horizontal" size="4"/>
                <Inventory/>
            </Flex>
        </Flex>
    )
}

export default ChestAndInventory;