import type { myItem } from "../../entities/items/types";

/**
 * Интерфейс пропсов компонента ItemCellCard
 */
export interface ItemCellCardProps {
    item: myItem | null;
};

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