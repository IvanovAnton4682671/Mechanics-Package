import type { HeaderProps } from "./interfaces";
import { Flex, Button, DropdownMenu, Separator } from "@radix-ui/themes";
import { SunIcon, MoonIcon, CaretDownIcon } from "@radix-ui/react-icons";

function Header({ changeTheme, changePage } : HeaderProps) {
    return(
        <Flex width="100%" height="100%" direction="column">
            <Flex width="100%" height="100%" direction="row" justify="start" align="center">
                <Flex width="10%" height="100%" direction="row" justify="center" align="center" gap="3">
                    <Button variant="surface" onClick={ () => changeTheme("light") }><SunIcon/></Button>
                    <Button variant="surface" onClick={ () => changeTheme("dark") }><MoonIcon/></Button>
                </Flex>
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                        <Button variant="surface">
                            Выбор механики
                            <CaretDownIcon/>
                        </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                        <DropdownMenu.Item onSelect={ () => changePage("createHero") }>Создание героя</DropdownMenu.Item>
                        <DropdownMenu.Item onSelect={ () => changePage("dragAndDrop") }>Drag and Drop</DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
            </Flex>
            <Separator orientation="horizontal" size="4"/>
        </Flex>
    )
}

export default Header;