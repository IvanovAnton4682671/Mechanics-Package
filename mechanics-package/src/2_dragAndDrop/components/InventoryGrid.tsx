import { useInventoryStore } from "../stores/inventoryStore";
import { Flex, Grid } from "@radix-ui/themes";
import ItemCellCard from "./ItemCellCard";

function InventoryGrid() {
    // Получаем массив предметов инвентаря из хранилища
    const inventoryItems = useInventoryStore(state => state.inventoryItems);

    return(
        <Flex width="100%" height="100%" justify="center" align="center">
            <Grid columns="10">
                {
                    inventoryItems.map((item, index) => (
                        <ItemCellCard key={ index } id={ index } item={ item } backgroundImage={ null } containerType="inventory"/>
                    ))
                }
            </Grid>
        </Flex>
    );
};

export default InventoryGrid;