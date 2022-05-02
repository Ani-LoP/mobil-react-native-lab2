
import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Basket from "./Basket";
import Pay from "./Pay";

const Stack = createStackNavigator();

export default function BasketStack({navigation}) {
    return (
        <Stack.Navigator useLegacyImplementation={true}>
            <Stack.Screen name="Главная" component={Basket} />
            <Stack.Screen name="Оплата" component={Pay} />
        </Stack.Navigator>
    );
}