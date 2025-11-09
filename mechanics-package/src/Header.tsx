import type { HeaderProps } from "./interfaces";
import { Flex, Button, Separator } from "@radix-ui/themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

function Header({ changeTheme } : HeaderProps) {
    return(
        <Flex width="100%" height="100%" direction="column">
            <Flex width="10%" height="100%" justify="center" align="center" direction="row" gap="3">
                <Button variant="surface" onClick={() => changeTheme("light")}>
                    <SunIcon/>
                </Button>
                <Button variant="surface" onClick={() => changeTheme("dark")}>
                    <MoonIcon/>
                </Button>
            </Flex>
            <Separator orientation="horizontal" size="4"/>
        </Flex>
    )
}

export default Header;