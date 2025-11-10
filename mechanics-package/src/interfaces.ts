import type { myTheme } from "./types";

/**
 * Интерфейс пропсов компонента Header
 */
export interface HeaderProps {
    changeTheme: (theme : myTheme) => void;
}