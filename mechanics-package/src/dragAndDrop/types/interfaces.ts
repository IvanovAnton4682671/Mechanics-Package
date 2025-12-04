import type { myItemCell } from "./types";
import type { myContainer } from "../../entities/containersForItems/types";
import type { myItem } from "../../entities/items/types";

/**
 * Интерфейс пропсов (свойств) компонента ItemCell.
 * Определяет, какие данные необходимы для отображения и работы ячейки
 * 
 * @field id - уникальный идентификатор ячейки (её индекс в массиве)
 * @field item - предмет, находящийся в ячейке (или null, если ячейка пуста)
 * @field containerType - тип контейнера, к которому принадлежит ячейка
 */
export interface ItemCellCardProps {
    id: number;
    item: myItemCell;
    containerType: myContainer;
}

/**
 * Интерфейс данных, которые передаются при перетаскивании предмета.
 * Эта информация необходима системе Drag and Drop для корректной обработки перемещения
 * 
 * @field id - ID ячейки, откуда начинается перетаскивание
 * @field item - сам перетаскиваемый предмет
 * @field container - тип контейнера, из которого перетаскивается предмет
 */
export interface DragItem {
    id: number;
    item: myItem;
    container: myContainer;
}