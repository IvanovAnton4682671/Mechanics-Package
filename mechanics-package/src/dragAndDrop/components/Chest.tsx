import { useInventoryStore } from "../stores/inventoryStore";
import { Flex, Grid } from "@radix-ui/themes";
import ItemCell from "./ItemCell";

/**
 * Компонент сундука - отображает 25 ячеек (5x5 сетка) с предметами.
 * Каждая ячейка является перетаскиваемой и может принимать предметы
 */
function Chest() {
    // Получаем массив предметов сундука из хранилища
    const chestItems = useInventoryStore(state => state.chestItems);

    return(
        <Flex width="100%" height="100%" justify="center" align="center">
            <Grid columns="5" gap="3">
                {
                    // Проходим по всем ячейкам сундука и создаем компоненты ItemCell
                    chestItems.map((item, index) => (
                        <ItemCell
                            key={ `chest-${ index }` } // Уникальный ключ для React
                            id={ index } // ID ячейки = её индекс в массиве
                            item={ item } // Предмет в ячейке (или null)
                            containerType="chest" // Тип контейнера - сундук
                        />
                    ))
                }
            </Grid>
        </Flex>
    )
}

export default Chest;