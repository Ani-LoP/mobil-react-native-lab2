import {Button, View, Text, StyleSheet, Image} from "react-native";
import Stars from "../Stars";

const review = {
    id: 1,
    name: 'iamclient',
    text: 'У телефона есть несколько весомых недостатков, которые вполне компенсируются низкой стоимостью.\n' +
        'Стоит своих денег!',
}

export default function Review(props) {
    return (
        <View >
            <Text>{review.name}</Text>
            <Stars />
            <Text>
                {review.text}
            </Text>
        </View>
    )
}