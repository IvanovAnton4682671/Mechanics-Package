import { Flex, Dialog, Button } from "@radix-ui/themes";
import CreationMenu from "./components/CreationMenu";

function Main() {
    return(
        <Flex width="100%" height="100%" direction="row" justify="center" align="center" gap="5">
            <Dialog.Root>
                <Dialog.Trigger>
                    <Button variant="surface">Меню создания героя</Button>
                </Dialog.Trigger>
                <Dialog.Content maxWidth="100%">
                    <Dialog.Title/>
                    <Dialog.Description/>
                    <CreationMenu/>
                </Dialog.Content>
            </Dialog.Root>
        </Flex>
    )
}

export default Main;