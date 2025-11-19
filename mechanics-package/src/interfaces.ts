import type { myTheme, myPage } from "./types";

/**
 * Интерфейс пропсов компонента Header
 */
export interface HeaderProps {
    changeTheme: (theme : myTheme) => void;
    changePage: (page: myPage) => void;
};