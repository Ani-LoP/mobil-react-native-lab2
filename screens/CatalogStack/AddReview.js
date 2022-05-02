import {View, Text, TextInput, Button, StyleSheet, Image, ScrollView} from "react-native";
import Stars from "../../components/Stars";
import star from '../../assets/icons/icon-star.png'
import starEmpty from '../../assets/icons/icon-star-empty.png'
import emptyStar from "../../assets/icons/icon-star-empty.png";

const review = {
    id: 1,
    name: 'iamclient',
    text: 'У телефона есть несколько весомых недостатков, которые вполне компенсируются низкой стоимостью.\n' +
        'Стоит своих денег!',
}

const good = {
    id: 3,
    mainImg: 'https://bq.ru/upload/iblock/514/_01_Foto_600x600_6040L.jpg',
    name: 'Смар Смартфон BQ',
    price: 7499,
    inBasket: true
}

export default function AddReview({navigation, route}) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.h1}>Отзыв к смартфону {good.name}</Text>
            <Text style={styles.text}>Введите свое имя</Text>
            <TextInput style={styles.input} />
            <View style={styles.space} />
            <Text style={styles.text}>Оцените товар</Text>
            <View style={styles.stars}>
                <Image source={emptyStar} style={styles.starImg}/>
                <Image source={emptyStar} style={styles.starImg}/>
                <Image source={emptyStar} style={styles.starImg}/>
                <Image source={emptyStar} style={styles.starImg}/>
                <Image source={emptyStar} style={styles.starImg}/>
            </View>
            <View style={styles.space} />
            <Text style={styles.text}>Опишите свой опыт</Text>
            <TextInput
                style={styles.inputTextArea}
                multiline={true}
                numberOfLines={6}
            />
            <Button title={'Добавить отзыв'} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: 'red',
        flexDirection: 'column',
        paddingVertical: 10,
        paddingHorizontal: 10,
        //marginHorizontal: 20,
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
    },
    inputTextArea: {
        borderWidth: 1,
        padding: 10,
        margin: 12,
        textAlignVertical: 'top'
    },
    starImg: {
        height: 60,
        width: 60,
        flex: 1
    },
    stars: {
        marginTop: 5,
        //backgroundColor: 'red',
        flexDirection: 'row',
        //height: 50
        //justifyContent: 'space-between'
    },
    h1: {
        fontSize: 24,
        fontWeight: "bold",

    },
    text: {
        marginTop: 10,
        fontSize: 20,
    },
    space: {
        padding: 10
    }
});