import { Flex, Separator } from "@radix-ui/themes";
import InventoryEquipmentSlotsContainer from "./InventoryEquipmentSlotsContainer";
import InventoryEquipmentHeroContainer from "./InventoryEquipmentHeroContainer";

function InventoryEquipment() {
    return(
        <Flex width="100%" height="100%" direction="column" justify="center" align="center">
            <Flex width="100%" height="100%" direction="row" justify="center" align="center">
                <Flex width="50%" height="100%" justify="center" align="center">
                    <InventoryEquipmentSlotsContainer/>
                </Flex>
                <Flex width="50%" height="100%" justify="center" align="center">
                    <InventoryEquipmentHeroContainer/>
                </Flex>
            </Flex>
            <Separator orientation="horizontal" size="4"/>
        </Flex>
    );
};

export default InventoryEquipment;