import React from "react";
import type { HeroContainerProps } from "../types/interfaces";
import type { myHeroStatEn, myHeroStat } from "../../entities/heroes/types";
import { Flex, TextField, DataList, Text, Dialog, Button } from "@radix-ui/themes";
import Message from "./Message";

function HeroContainer({ hero }: HeroContainerProps) {
    // Состояние для установки имени героя
    const [heroName, setHeroName] = React.useState<string>(hero.name ?? "");
    // Проверки имени на пустоту
    const isHeroNameFilled = heroName.trim().length > 0;

    // Автоматический сброс имени при каждой смене героя
    React.useEffect(() => {
        setHeroName(hero.name ?? "");
    }, [hero]);

    return(
        <Flex width="100%" height="100%" direction="row" justify="center" align="center">
            <Flex width="40%" height="100%" direction="column" justify="center" align="center" gap="3">
                <Flex width="320px" height="560px">
                    <img src={ hero.image } alt="hero" style={{ width: "100%", height: "100%" }}/>
                </Flex>
                <TextField.Root
                    placeholder="Имя героя"
                    value={ heroName }
                    onChange={ (event: React.ChangeEvent<HTMLInputElement>) => setHeroName(event.target.value) }
                />
            </Flex>
            <Flex width="30%" height="100%" justify="center" align="center">
                <DataList.Root>
                    {
                        (Object.entries(hero.stats) as Array<[myHeroStatEn, myHeroStat]>).map(
                            ([statKey, { statRu, statValue }]) => (
                                <DataList.Item key={ statKey }>
                                    <DataList.Label>{ statRu }</DataList.Label>
                                    <DataList.Value>{ statValue }</DataList.Value>
                                </DataList.Item>
                            )
                        )
                    }
                </DataList.Root>
            </Flex>
            <Flex width="30%" height="100%" direction="column" justify="center" align="center">
                <Flex width="100%" height="90%" direction="column" justify="center" align="center" gap="3">
                    <Text size="7">Описание героя</Text>
                    <Text size="3" style={{ whiteSpace: "pre-line" }}>{ hero.description }</Text>
                </Flex>
                <Flex width="100%" height="10%" justify="center" align="center">
                    <Dialog.Root>
                        <Dialog.Trigger>
                            <Button variant="soft" size="4" disabled={ !isHeroNameFilled }>Начать</Button>
                        </Dialog.Trigger>
                        <Dialog.Content maxWidth="100%" maxHeight="100%" style={{ width: "30vw", height: "20vh", overflow: "hidden" }}>
                            <Dialog.Title/>
                            <Dialog.Description/>
                            <Message/>
                        </Dialog.Content>
                    </Dialog.Root>
                </Flex>
            </Flex>
        </Flex>
    )
};

export default HeroContainer;