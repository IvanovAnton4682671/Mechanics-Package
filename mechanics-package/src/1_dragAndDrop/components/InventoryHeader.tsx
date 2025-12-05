import type { InventoryHeaderProps } from "../types/interfaces";
import { Flex, Button, Separator } from "@radix-ui/themes";
import { Cross1Icon } from "@radix-ui/react-icons";

function InventoryHeader({ onClose }: InventoryHeaderProps) {
    return(
        <Flex width="100%" height="100%" direction="column" justify="start">
            <Flex width="10%" height="100%" justify="center" align="center">
                <Button variant="surface" size="1" onClick={ onClose }><Cross1Icon/></Button>
            </Flex>
            <Separator orientation="horizontal" size="4"/>
        </Flex>
    );
};

export default InventoryHeader;