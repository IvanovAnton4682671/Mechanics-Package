import type { HeroContainerProps } from "../types/interfaces";
import { Flex, TextField, Separator, DataList } from "@radix-ui/themes";

function HeroContainer({ hero }: HeroContainerProps) {
    return(
        <Flex width="100%" height="100%" direction="row" justify="center" align="center" gap="3">
            <Flex width="60%" height="100%" direction="column" justify="center" align="center" gap="3">
                <Flex width="320px" height="560px">
                    <img src={ hero.image } alt="hero" style={{ display: "block", objectFit: "cover" }}/>
                </Flex>
                <TextField.Root placeholder="Имя героя"/>
            </Flex>
            <Separator orientation="vertical" size="4"/>
            <Flex width="40%" height="100%" justify="center" align="center">
                <DataList.Root>
                    
                </DataList.Root>
            </Flex>
        </Flex>
    )
};

export default HeroContainer;