import { useInventoryStore } from "../stores/inventoryStore";
import { Flex, Text, Separator, Grid } from "@radix-ui/themes";
import ItemCellCard from "./ItemCellCard";

/**
 * Компонент сундука - отображает сетку ячеек с предметами.
 * Каждая ячейка является перетаскиваемой и может принимать предметы
 */
function Chest() {
    // Получаем массив предметов сундука из хранилища
    const chestItems = useInventoryStore(state => state.chestItems);

    return(
        <Flex width="100%" height="100%" direction="column" justify="center" align="center" gap="3">
            <Text size="5">Сундук</Text>
            <Separator orientation="horizontal" size="4"/>
            <Grid columns="8">
                {
                    // Проходим по всем ячейкам сундука и создаём компоненты ItemCell
                    chestItems.map((item, index) => (
                        <ItemCellCard
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