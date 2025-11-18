import type { ItemCellProps, DragItem } from "../types/interfaces";
import React from "react";
import { useInventoryStore } from "../stores/inventoryStore";
import { useDrag, useDrop } from "react-dnd";
import { ITEM_TYPES } from "../types/consts";
import { Flex, Text } from "@radix-ui/themes";

/**
 * Компонент ячейки предмета, который может быть перетаскиваемым (draggable)
 * и принимать перетаскиваемые предметы (droppable)
 * 
 * @param id уникальный идентификатор ячейки (индекс в массиве)
 * @param item предмет в ячейке (или null, если ячейка пуста)
 * @param containerType тип контейнера (сундук, инвентарь, ячейка экипировки)
 */
function ItemCell({ id, item, containerType } : ItemCellProps) {
    // Ref для DOM-элемента ячейки, необходим для работы Drag and Drop
    const ref = React.useRef<HTMLDivElement>(null);
    // Получаем метод перемещения предметов из хранилища
    const moveItem = useInventoryStore(state => state.moveItem);

    /**
     * Настройка функциональности перетаскивания (drag) для ячейки.
     * useDrag hook предоставляет методы и состояние для перетаскивания
     */
    const [{ isDragging }, drag] = useDrag({
        // Тип перетаскиваемого элемента - должен совпадать с accept в useDrop
        type: ITEM_TYPES.ITEM,

        /**
         * Данные, которые передаются при перетаскивании.
         * Эти данные будут доступны в drop-цели
         * 
         * Важно: перетаскивать можно только существующие предметы (item не null),
         * поэтому перед созданием DragItem проверяем, что item существует
         */
        item: (): DragItem => {
            // TypeScript теперь знает, что item не null благодаря проверке в canDrag
            // но для дополнительной безопасности используем проверку
            if (!item) {
                throw new Error("Attempting to drag a null item");
            }
            return {
                id: id,
                item: item, // Теперь item гарантированно типа Item, а не Item | null
                container: containerType
            };
        },

        // Можно ли перетаскивать эту ячейку (только если в ней есть предмет)
        canDrag: () => !!item,

        /**
         * Функция для сбора состояния перетаскивания.
         * isDragging - true, когда этот элемент перетаскивается
         */
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });

    /**
     * Настройка функциональности приёма перетаскиваемых элементов (drop) для ячейки.
     * useDrop hook предоставляет методы и состояние для приёма элементов
     */
    const [{ isOver }, drop] = useDrop({
        // Типы элементов, которые эта ячейка может принимать
        accept: ITEM_TYPES.ITEM,

        /**
         * Срабатывает, когда перетаскиваемый элемент находится над этой ячейкой.
         * Можно использовать для дополнительной логики при наведении
         */
        hover: (draggedItem: DragItem) => {
            if (!ref.current) return;

            // Если предмет перетаскивается над самим собой - игнорируем
            if (draggedItem.container === containerType && draggedItem.id === id) return;
        },

        /**
         * Срабатывает, когда перетаскиваемый элемент "бросают" на эту ячейку.
         * Здесь происходит основная логика перемещения
         */
        drop: (draggedItem: DragItem) => {
            // Если предмет перетаскивается над самим собой - игнорируем
            if (draggedItem.container === containerType && draggedItem.id === id) return;

            // Вызываем метод перемещения предмета с исходными и целевыми данными
            moveItem(draggedItem.container, containerType, draggedItem.id, id);
        },

        /**
         * Функция для сбора состояния приёма элементов.
         * isOver - true, когда над ячейкой находится перетаскиваемый элемент
         * canDrop - true, когда ячейка может принять перетаскиваемый элемент
         */
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    });

    // Связываем ref для одновременной работы drag и drop на одном элементе
    drag(drop(ref));

    return(
        <Flex
            ref={ ref }
            width="75px"
            height="75px"
            direction="column"
            justify="center"
            align="center"
            style={{
                border: "1px solid",
                borderColor: isOver ? "var(--accent-10)" : "var(--gray-a6)",
                borderRadius: "var(--radius-5)",
                opacity: isDragging ? 0.5 : 1,
                backgroundColor: item ? "var(--gray-a3)" : "var(--gray-a1)",
                cursor: item ? 'grab' : 'default'
            }}
        >
            {/* Отображаем название предмета или пустоту, если ячейка пуста */}
            <Text size="1">{ item === null ? "" : item.name }</Text>
        </Flex>
    )
}

export default ItemCell;