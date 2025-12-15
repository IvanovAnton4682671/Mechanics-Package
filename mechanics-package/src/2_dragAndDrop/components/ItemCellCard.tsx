import type { ItemCellCardProps } from "../types/interfaces";
import { HoverCard, Flex, Text } from "@radix-ui/themes";

function ItemCellCard({ item, backgroundImage }: ItemCellCardProps) {
    return(
        <HoverCard.Root open={ item ? undefined : false }>
            <HoverCard.Trigger>
                <Flex width="64px" height="128px" justify="center" align="center" style={{
                    overflow: "hidden",
                    backgroundColor: item ? item.backgroundColor : "var(--gray-a1)",
                    border: "1px solid",
                    borderColor: "var(--gray-a6)"
                }}>
                    {
                        item ?
                        <img src={ item.image } alt="itemImage" style={{
                            width: "auto",
                            height: "auto",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            objectFit: "contain"
                        }}/>
                        :
                        backgroundImage ?
                        <img src={ backgroundImage } alt="slotBackground" style={{
                            width: "auto",
                            height: "auto",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            objectFit: "contain",
                            opacity: "0.2"
                        }}/>
                        :
                        null
                    }
                </Flex>
            </HoverCard.Trigger>
            <HoverCard.Content side="left" style={{ borderRadius: "0", padding: "0" }}>
                {
                    item ?
                    <Flex width="256px" height="512px" direction="column" justify="center" align="center" style={{
                        backgroundColor: item.backgroundColor,
                        border: "1px solid",
                        borderColor: "var(--gray-a6)",
                        padding: "10px"
                    }}>
                        <Flex width="50%" height="50%" justify="center" align="center" style={{ overflow: "hidden" }}>
                            <img src={ item.image } alt="itemImage" style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain"
                            }}/>
                        </Flex>
                        <Flex width="100%" height="50%" direction="column" justify="center" align="center">
                            <Text size="2">{ item.name }</Text>
                            <Text size="2">Тип: { item.typeRu }</Text>
                            <Text size="2">Редкость: { item.rarityRu }</Text>
                        </Flex>
                    </Flex>
                    : null
                }
            </HoverCard.Content>
        </HoverCard.Root>
    )
};

export default ItemCellCard;