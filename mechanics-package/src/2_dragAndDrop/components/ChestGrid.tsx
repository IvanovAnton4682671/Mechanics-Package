import { useInventoryStore } from "../stores/inventoryStore";
import { Flex, Grid } from "@radix-ui/themes";
import ItemCellCard from "./ItemCellCard";

function ChestGrid() {
    // Получаем массив предметов сундука из хранилища
    const chestItems = useInventoryStore(state => state.chestItems);

    return(
        <Flex width="100%" height="100%" justify="center" align="center">
            <Grid columns="10">
                {
                    chestItems.map((item, index) => (
                        <ItemCellCard key={ index } id={ index } item={ item } backgroundImage={ null } containerType="chest"/>
                    ))
                }
            </Grid>
        </Flex>
    );
};

export default ChestGrid;