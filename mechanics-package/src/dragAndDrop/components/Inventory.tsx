import { useInventoryStore } from "../stores/inventoryStore";
import { Flex, Grid } from "@radix-ui/themes";
import ItemCell from "./ItemCell";

/**
 * Компонент инвентаря игрока - отображает 15 ячеек (5x3 сетка) с предметами.
 * Аналогичен компоненту сундука, но с другим количеством ячеек
 */
function Inventory() {
    // Получаем массив предметов инвентаря из хранилища
    const inventoryItems = useInventoryStore(state => state.inventoryItems);

    return(
        <Flex width="100%" height="100%" justify="center" align="center">
            <Grid columns="5" gap="3">
                {
                    // Проходим по всем ячейкам инвентаря
                    inventoryItems.map((item, index) => (
                        <ItemCell
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