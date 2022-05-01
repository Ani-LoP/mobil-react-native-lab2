import {Button, View, Text} from "react-native";
import GoodsGrid from "../components/GoodsGrid/GoodsGrid";

export default function Laptops({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <GoodsGrid />
        </View>
    );
}