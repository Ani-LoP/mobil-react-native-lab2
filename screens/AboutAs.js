import {Button, View, Text, StyleSheet} from "react-native";
import GoodsGrid from "../components/GoodsGrid/GoodsGrid";

export default function AboutAs({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', margin: 10}}>
            <Text style={styles.h1}>Магазин техники МагТех</Text>
            <Text style={styles.text}>Заказывайте технику у нас или приходите в гости по адресу Академика Киренского 26к1</Text>
            <Text>Тут будет карта</Text>
        </View>
    );
}

const styles = StyleSheet.create({
        h1: {
            fontWeight: "bold",
            fontSize: 32,
            textAlign: 'center',
            marginBottom: 10,
        },
        text: {
            fontSize: 18,
            textAlign: 'center',
            marginBottom: 10,
        }
    }
)