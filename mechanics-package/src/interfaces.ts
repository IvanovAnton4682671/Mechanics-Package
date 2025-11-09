import type { myTheme } from "./types";

export interface HeaderProps {
    changeTheme: (theme : myTheme) => void;
}