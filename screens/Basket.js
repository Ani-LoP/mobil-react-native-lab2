import {Button, View, Text, StyleSheet} from "react-native";
import GoodsGrid from "../components/GoodsGrid/GoodsGrid";
import BasketGood from "../components/Basket/BasketGood";
import Good from "../components/GoodsGrid/Good";
import BasketSum from "../components/Basket/BasketSum";

export default function Basket({navigation}) {
    let goods = [
        {
            id: 3,
            mainImg: 'https://bq.ru/upload/iblock/514/_01_Foto_600x600_6040L.jpg',
            name: 'Смартфон BQ',
            price: 7499,
            inBasket: true
        },
        {
            id: 4,
            mainImg: 'data:image/jpeg;base64,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',
            name: 'Смартфон Huawei P40 Lite',
            price: 24683,
            inBasket: false
        },
    ]

    return (
        <View style={styles.containerGood}>
            <BasketSum />
            {goods.map(el => <BasketGood key={el.id} good={el}/>)}
        </View>
    );
}

const styles = StyleSheet.create({
    containerGood: {
        //backgroundColor: 'red',
        flexDirection: 'column',
        alignItems: "center",
        //marginHorizontal: 20,
    },
})