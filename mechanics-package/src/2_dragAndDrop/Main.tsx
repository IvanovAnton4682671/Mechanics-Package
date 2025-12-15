import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Flex, Button } from "@radix-ui/themes";
import Inventory from "./components/Inventory";
import Chest from "./components/Chest";

function Main() {
    // Состояние инвентаря
    const [isInventoryOpen, setInventoryOpen] = React.useState<boolean>(false);

    // Состояние сундука
    const [isChestOpen, setChestOpen] = React.useState<boolean>(false);

    return(
        <DndProvider backend={ HTML5Backend }>
            <Flex width="100%" height="100%" justify="center" align="center" style={{ position: "relative" }}>
                <Flex width="100%" height="100%" direction="column" justify="center" align="center" gap="3">
                    <Button variant="surface" onClick={ () => setInventoryOpen(true) }>Инвентарь</Button>
                    <Button variant="surface" onClick={ () => setChestOpen(true) }>Сундук</Button>
                </Flex>
                {
                    isInventoryOpen &&
                    <Flex width="40vw" height="95vh" style={{ position: "absolute", zIndex: "1", top: "0", right: "0" }}>
                        <Inventory onClose={ () => setInventoryOpen(false) }/>
                    </Flex>
                }
                {
                    isChestOpen &&
                    <Flex width="40vw" height="95vh" style={{ position: "absolute", zIndex: "1", top: "0", left: "0" }}>
                        <Chest onClose={ () => setChestOpen(false) }/>
                    </Flex>
                }
            </Flex>
        </DndProvider>
    );
};

export default Main;