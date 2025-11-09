import type { myTheme } from "./types";
import "@radix-ui/themes/styles.css";
import React from "react";
import { Theme, Flex } from "@radix-ui/themes";
import Header from "./Header";

import DragAndDrop from "./dragAndDrop/Main";

function App() {
    const [currentTheme, setTheme] = React.useState<myTheme>("light");

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