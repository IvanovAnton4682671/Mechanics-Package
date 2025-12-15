import type { myItemCell } from "./types";
import type { myContainer } from "../../entities/containersForItems/types";
import type { myItem } from "../../entities/items/types";

/**
 * Интерфейс пропсов (свойств) компонента ItemCellCard.
 * Определяет, какие данные необходимы для отображения и работы ячейки
 * 
 * @field id - уникальный идентификатор ячейки (её индекс в массиве)
 * @field item - предмет, находящийся в ячейке (или null, если ячейка пуста)
 * @field backgroundImage - задняя картинка ячейки (или null, если это не слот экипировки)
 * @field containerType - тип контейнера, к которому принадлежит ячейка
 */
export interface ItemCellCardProps {
    id: number;
    item: myItemCell;
    backgroundImage: string | null;
    containerType: myContainer;
};

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

/**
 * Интерфейс пропсов компонента Inventory
 */
export interface InventoryProps {
    onClose: () => void;
};

/**
 * Интерфейс пропсов компонента InventoryHeader
 */
export interface InventoryHeaderProps {
    onClose: () => void;
};

/**
 * Интерфейс пропсов компонента Chest
 */
export interface ChestProps {
    onClose: () => void;
};

/**
 * Интерфейс пропсов компонента ChestHeader
 */
export interface ChestHeaderProps {
    onClose: () => void;
};