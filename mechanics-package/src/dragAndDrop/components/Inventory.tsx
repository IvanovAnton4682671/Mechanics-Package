import { useInventoryStore } from "../stores/inventoryStore";
import { Flex, Text, Separator, Grid } from "@radix-ui/themes";
import ItemCellCard from "./ItemCellCard";

/**
 * Компонент инвентаря игрока - отображает сетку ячеек с предметами.
 * Аналогичен компоненту сундука, но с другим количеством ячеек
 */
function Inventory() {
    // Получаем массив предметов инвентаря из хранилища
    const inventoryItems = useInventoryStore(state => state.inventoryItems);

    return(
        <Flex width="100%" height="100%" direction="column" justify="center" align="center" gap="3">
            <Text size="5">Инвентарь</Text>
            <Separator orientation="horizontal" size="4"/>
            <Grid columns="8">
                {
                    // Проходим по всем ячейкам инвентаря
                    inventoryItems.map((item, index) => (
                        <ItemCellCard
                            key={ `inventory-${index}` } // Уникальный ключ
                            id={ index } // ID ячейки
                            item={ item } // Предмет в ячейке
                            containerType="inventory" // Тип контейнера - инвентарь
                        />
                    ))
                }
            </Grid>
        </Flex>
    )
}

export default Inventory;