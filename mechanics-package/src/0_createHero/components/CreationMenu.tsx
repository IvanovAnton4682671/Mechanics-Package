import { Flex, Text, Button, Separator } from "@radix-ui/themes";

function CreationMenu() {
    return(
        <Flex width="100%" height="100%" direction="row" justify="center" align="center" gap="9">
            <Flex width="20%" height="100%" direction="row" justify="center" align="center" gap="3">
                <Flex width="100%" height="100%" direction="column" justify="center" align="center">
                    <Flex width="100%" height="20%" justify="center" align="center">
                        <Text size="8">Выбор героя</Text>
                    </Flex>
                    <Flex width="100%" height="80%" direction="column" justify="center" align="center" gap="3">
                        <Button variant="ghost">Воин</Button>
                        <Button variant="ghost">Разбойник</Button>
                        <Button variant="ghost">Волшебник</Button>
                    </Flex>
                </Flex>
                <Separator orientation="vertical" size="4"/>
            </Flex>
            <Flex width="60%" height="100%" justify="center" align="center">
                
            </Flex>
        </Flex>
    )
}

export default CreationMenu;