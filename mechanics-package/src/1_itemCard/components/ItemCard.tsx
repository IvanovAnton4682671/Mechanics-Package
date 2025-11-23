import type { ItemCardProps } from "../types/interfaces";
import { HoverCard, Flex, Text } from "@radix-ui/themes";

function ItemCard({ item }: ItemCardProps) {
    return(
        <HoverCard.Root>
            <HoverCard.Trigger>
                <Flex width="100px" height="100px" justify="center" align="center" style={{
                    backgroundColor: item.backgroundColor,
                    border: "1px solid",
                    borderColor: "var(--gray-a6)",
                    borderRadius: "var(--radius-4)"
                 }}>
                    <img src={ item.image } alt="itemImage" style={{ width: "100%", height: "100%" }}/>
                </Flex>
            </HoverCard.Trigger>
            <HoverCard.Content side="left" style={{ padding: 0 }}>
                 <Flex width="250px" height="500px" direction="column" justify="center" align="center" style={{ backgroundColor: item.backgroundColor, padding: "10px" }}>
                    <Flex width="100%" height="50%" justify="center" align="center">
                        <img src={ item.image } alt="itemImage" style={{ width: "100%", height: "100%" }}/>
                    </Flex>
                    <Flex width="100%" height="50%" direction="column" justify="center" align="center">
                        <Text size="2">{ item.name }</Text>
                        <Text size="2">Тип: { item.typeRu }</Text>
                        <Text size="2">Редкость: { item.rarityRu }</Text>
                    </Flex>
                 </Flex>
            </HoverCard.Content>
        </HoverCard.Root>
    )
};

export default ItemCard;