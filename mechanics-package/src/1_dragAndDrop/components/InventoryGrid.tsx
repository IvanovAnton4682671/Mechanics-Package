import { Flex, Grid } from "@radix-ui/themes";
import ItemCellCard from "./ItemCellCard";

function InventoryGrid() {
    return(
        <Flex width="100%" height="100%" justify="center" align="center">
            <Grid columns="10">
                {
                    Array.from({ length: 30 }, (_, index) => (
                        <ItemCellCard key={ index } item={ null } />
                    ))
                }
            </Grid>
        </Flex>
    );
};

export default InventoryGrid;