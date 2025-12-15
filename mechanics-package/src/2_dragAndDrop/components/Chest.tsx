import type { ChestProps } from "../types/interfaces";
import { Flex } from "@radix-ui/themes";
import ChestHeader from "./ChestHeader";
import ChestGrid from "./ChestGrid";

function Chest({ onClose }: ChestProps) {
    return(
        <Flex width="100%" height="100%" direction="column" justify="center" align="center" style={{ border: "1px solid", borderColor: "var(--gray-a6)" }}>
            <Flex width="100%" height="5%" justify="center" align="center">
                <ChestHeader onClose={ onClose }/>
            </Flex>
            <Flex width="100%" height="95%" justify="center" align="center">
                <ChestGrid/>
            </Flex>
        </Flex>
    );
};

export default Chest;