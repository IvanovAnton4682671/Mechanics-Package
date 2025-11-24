import React from "react";
import type { myHero } from "../../entities/heroes/types";
import { HEROES } from "../../entities/heroes/consts";
import { Flex, Text, Button } from "@radix-ui/themes";
import HeroContainer from "./HeroContainer";

function CreationMenu() {
    const [currentHero, setCurrentHero] = React.useState<myHero>(HEROES.knight);

    return(
        <Flex width="100%" height="100%" direction="row">
            <Flex width="20%" height="100%" direction="column" justify="center" align="center">
                <Flex width="100%" height="10%" justify="center" align="center">
                    <Text size="8">Выбор героя</Text>
                </Flex>
                <Flex width="100%" height="90%" direction="column" justify="center" align="center" gap="3">
                    <Button variant="soft" onClick={ () => setCurrentHero(HEROES.knight) }>Воин</Button>
                    <Button variant="soft" onClick={ () => setCurrentHero(HEROES.thief) }>Разбойник</Button>
                    <Button variant="soft" onClick={ () => setCurrentHero(HEROES.wizard) }>Волшебник</Button>
                </Flex>
            </Flex>
            <Flex width="80%" height="100%" justify="center" align="center">
                <HeroContainer hero={ currentHero }/>
            </Flex>
        </Flex>
    )
};

export default CreationMenu;