import type { InventoryProps } from "../types/interfaces";
import { Flex } from "@radix-ui/themes";
import InventoryHeader from "./InventoryHeader";
import InventoryEquipment from "./InventoryEquipment";
import InventoryGrid from "./InventoryGrid";

function Inventory({ onClose }: InventoryProps) {
    return(
        <Flex width="100%" height="100%" direction="column" justify="center" align="center" style={{ border: "1px solid", borderColor: "var(--gray-a6)" }}>
            <Flex width="100%" height="5%" justify="center" align="center">
                <InventoryHeader onClose={ onClose }/>
            </Flex>
            <Flex width="100%" height="45%" justify="center" align="center">
                <InventoryEquipment/>
            </Flex>
            <Flex width="100%" height="50%" justify="center" align="center">
                <InventoryGrid/>
            </Flex>
        </Flex>
    );
};

export default Inventory;