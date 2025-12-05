import "@radix-ui/themes/styles.css";
import React from "react";
import type { myTheme, myPage } from "./types";
import { Theme, Flex } from "@radix-ui/themes";
import Header from "./Header";
import CreateHero from "./0_createHero/Main";
import ItemCard from "./1_itemCard/Main";
import DragAndDrop from "./dragAndDrop/Main";
import DragAndDropFull from "./1_dragAndDrop/Main";

function App() {
    // Состояние для смены темы
    const [currentTheme, setTheme] = React.useState<myTheme>("light");
    // Состояние для смены страницы
    const [currentPage, setPage] = React.useState<myPage>("createHero");

    /**
     * Метод для установки конкретной темы
     * 
     * @param theme тема, которая устанавливается
     */
    const changeTheme = (theme: myTheme) => {
        setTheme(theme);
    };

    /**
     * Метод для смены активных страниц
     * 
     * @param page страница, которая отображается
     */
    const changePage = (page: myPage) => {
        setPage(page);
    };

    return (
        <Theme appearance={ currentTheme } scaling="100%" radius="medium" accentColor={ currentTheme === "light" ? "blue" : "mint" }>
            <Flex width="100vw" height="100vh" direction="column">
                <Flex width="100%" height="5%">
                    <Header changeTheme={ changeTheme } changePage={ changePage }/>
                </Flex>
                <Flex width="100%" height="95%">
                    { currentPage === "createHero" && <CreateHero/> }
                    { currentPage === "itemCard" && <ItemCard/> }
                    { currentPage === "dragAndDrop" && <DragAndDrop/> }
                    { currentPage === "dragAndDropFull" && <DragAndDropFull/> }
                </Flex>
            </Flex>
        </Theme>
    );
};

export default App;