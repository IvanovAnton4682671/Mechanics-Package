import { useInventoryStore } from "../stores/inventoryStore";
import { Flex, Text, Separator } from "@radix-ui/themes";
import ItemCell from "./ItemCell";

function Equipment() {
    // Получаем всю экипировку из хранилища
    const equipment = useInventoryStore(state => state.equipment);

    return(
        <Flex width="100%" height="100%" direction="column" justify="center" align="center" gap="3">
            <Text size="5">Экипировка</Text>
            <Separator orientation="horizontal" size="4"/>
            <Flex width="100%" height="100%" direction="column" justify="center" align="center" gap="3">
                <Flex width="50%" height="100%" direction="row" justify="center" align="center" gap="3">
                    <Flex direction="column" justify="center" align="center" gap="2">
                        <Text size="1">Перчатки</Text>
                        <ItemCell id={ 1 } item={ equipment.gloves } containerType="gloves"/>
                    </Flex>
                    <Flex direction="column" justify="center" align="center" gap="2">
                        <Text size="1">Наплечники</Text>
                        <ItemCell id={ 2 } item={ equipment.shoulderPads } containerType="shoulderPads"/>
                    </Flex>
                    <Flex direction="column" justify="center" align="center" gap="2">
                        <Text size="1">Правая рука</Text>
                        <ItemCell id={ 3 } item={ equipment.rightHand } containerType="rightHand"/>
                    </Flex>
                    <Flex direction="column" justify="center" align="center" gap="2">
                        <Text size="1">Пояс</Text>
                        <ItemCell id={ 4 } item={ equipment.belt } containerType="belt"/>
                    </Flex>
                    <Flex direction="column" justify="center" align="center" gap="2">
                        <Text size="1">Сапоги</Text>
                        <ItemCell id={ 5 } item={ equipment.boots } containerType="boots"/>
                    </Flex>
                </Flex>
                <Flex width="50%" height="100%" direction="row" justify="center" align="center" gap="3">
                    <Flex direction="column" justify="center" align="center" gap="2">
                        <Text size="1">Шлем</Text>
                        <ItemCell id={ 6 } item={ equipment.helmet } containerType="helmet"/>
                    </Flex>
                    <Flex direction="column" justify="center" align="center" gap="2">
                        <Text size="1">Наручи</Text>
                        <ItemCell id={ 7 } item={ equipment.bracers } containerType="bracers"/>
                    </Flex>
                    <Flex direction="column" justify="center" align="center" gap="2">
                        <Text size="1">Левая рука</Text>
                        <ItemCell id={ 8 } item={ equipment.leftHand } containerType="leftHand"/>
                    </Flex>
                    <Flex direction="column" justify="center" align="center" gap="2">
                        <Text size="1">Доспехи</Text>
                        <ItemCell id={ 9 } item={ equipment.chestArmor } containerType="chestArmor"/>
                    </Flex>
                    <Flex direction="column" justify="center" align="center" gap="2">
                        <Text size="1">Поножи</Text>
                        <ItemCell id={ 10 } item={ equipment.footArmor } containerType="footArmor"/>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Equipment;