import { Flex, DataList } from "@radix-ui/themes";
import { HEROES_IMAGES } from "../../entities/heroes/images/consts";
import { HEROES } from "../../entities/heroes/consts";
import type { myHeroStatName, myHeroStat } from "../../entities/heroes/types";

function InventoryEquipmentHeroContainer() {
    return(
        <Flex width="100%" height="100%" direction="row" justify="center" align="center">
            <Flex width="50%" height="100%" justify="center" align="center">
                <Flex width="160px" height="280px" justify="center" align="center">
                    <img src={ HEROES_IMAGES.knightImage } alt="hero" style={{
                        width: "auto",
                        height: "auto",
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain"
                    }}/>
                </Flex>
            </Flex>
            <Flex width="50%" height="100%" justify="center" align="center">
                <DataList.Root>
                    {
                        (Object.entries(HEROES.knight.stats) as Array<[myHeroStatName, myHeroStat]>).map(
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
        </Flex>
    );
};

export default InventoryEquipmentHeroContainer;