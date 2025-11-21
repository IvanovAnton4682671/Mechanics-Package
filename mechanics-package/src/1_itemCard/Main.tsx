import { Flex } from "@radix-ui/themes";
import ItemCard from "./components/ItemCard";
import { EQUIPMENT_ITEMS } from "../entities/items/equipment/consts";

function Main() {
    return(
        <Flex width="100%" height="100%" justify="center" align="center" gap="3">
            {
                Array.from({ length: 5 }).map((_, index) => (
                    <ItemCard key={ index } item={ EQUIPMENT_ITEMS[index] }/>
                ))
            }
        </Flex>
    )
};

export default Main;