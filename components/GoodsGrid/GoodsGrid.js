import Good from "./Good";
import {Button, StyleSheet, ScrollView, TouchableHighlight} from "react-native";

export default function GoodsGrid({navigation, route}) {
    debugger
    const goods = route.params.goods
    return (
        <ScrollView contentContainerStyle={styles.containerGood}>
            {
                goods.map(el =>
                    <TouchableHighlight  onPress={() => {
                        navigation.navigate('Товар', {initialProps: el})
                    }}>
                        <Good good={el}/>
                </TouchableHighlight>)
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    containerGood: {
        //backgroundColor: 'red',
        flexDirection: 'row',
        flexWrap: 'wrap',
        //alignItems: "center",
        marginHorizontal: 10,
    },
})