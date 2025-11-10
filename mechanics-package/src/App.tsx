import "@radix-ui/themes/styles.css";
import React from "react";
import type { myTheme } from "./types";
import { Theme, Flex } from "@radix-ui/themes";
import Header from "./Header";
import DragAndDrop from "./dragAndDrop/Main";

function App() {
    // Состояние для смены темы
    const [currentTheme, setTheme] = React.useState<myTheme>("light");

    /**
     * Метод для установки конкретной темы
     * 
     * @param theme - тема, которая устанавливается
     */
    const changeTheme = (theme: myTheme) => {
        setTheme(theme);
    }

    return (
        <Theme appearance={currentTheme} scaling="100%" radius="medium" accentColor={currentTheme === "light" ? "blue" : "mint"}>
            <Flex width="100vw" height="100vh" direction="column">
                <Flex width="100%" height="10%">
                    <Header changeTheme={changeTheme}/>
                </Flex>
                <Flex width="100%" height="90%">
                    <DragAndDrop/>
                </Flex>
            </Flex>
        </Theme>
    );
}

export default App;