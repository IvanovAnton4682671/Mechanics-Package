import { Flex } from "@radix-ui/themes";
import Chest from "./Chest";
import Equipment from "./Equipment";
import Inventory from "./Inventory";

function SharedInventory() {
    return(
        <Flex width="100%" height="100%" direction="row" justify="center" align="center" gap="5">
            <Flex width="45%" height="100%" justify="center" align="center">
                <Chest/>
            </Flex>
            <Flex width="45%" height="100%" direction="column" justify="center" align="center" gap="3">
                <Flex width="100%" height="50%" justify="center" align="center">
                    <Equipment/>
                </Flex>
                <Flex width="100%" height="50%" justify="center" align="center">
                    <Inventory/>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default SharedInventory;