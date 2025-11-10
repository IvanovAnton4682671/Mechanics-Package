import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Flex, Dialog, Button } from "@radix-ui/themes";
import SharedInventory from "./components/SharedInventory";

function Main() {
    return(
        <DndProvider backend={ HTML5Backend }>
            <Flex width="100%" height="100%" direction="row" justify="center" align="center" gap="5">
                <Dialog.Root>
                    <Dialog.Trigger>
                        <Button variant="surface">
                            Сундук, экипировка и инвентарь
                        </Button>
                    </Dialog.Trigger>
                    <Dialog.Content maxWidth="100%">
                        <Dialog.Title/>
                        <Dialog.Description/>
                        <SharedInventory/>
                    </Dialog.Content>
                </Dialog.Root>
            </Flex>
        </DndProvider>
    )
}

export default Main;