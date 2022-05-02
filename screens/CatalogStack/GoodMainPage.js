import {Button, View, Text, StyleSheet, Image, ScrollView} from "react-native";
import Stars from "../../components/Stars";
import Review from "../../components/Review/Review";

const reviews = [
    {
        id: 1,
        name: 'iamclient',
        text: 'У телефона есть несколько весомых недостатков, которые вполне компенсируются низкой стоимостью.\n' +
            'Стоит своих денег!',
    },
    {
        id: 2,
        name: 'iamclient2',
        text: 'У телефона есть несколько весомых недостатков, которые вполне компенсируются низкой стоимостью.\n' +
            'Стоит своих денег!',
    }
]

export default function GoodMainPage({navigation, route}) {
    debugger
    let initialProps = route.params.initialProps
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={[styles.h1, {flex: 4}]}>{initialProps.name}</Text>
                {/*<View style={{flex: 1}}>
                    <Image source={back} style={[styles.iconBack]}/>
                </View>*/}
            </View>

            <Image
                style={styles.mainImage}
                source={{uri: initialProps.mainImg}}
            />
            <Text style={styles.price}>{initialProps.price} руб</Text>
            <Stars/>
            <Button title={'Добавить в корзину'}/>

            <View style={{marginVertical: 20}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', }}>
                    <Text style={styles.h1}>Отзывы</Text>
                    <Text onPress={() => navigation.navigate('Новый отзыв')}>Оставить отзыв</Text>
                </View>
                {reviews.map(el => <Review props={el} key={el.id}/>)}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: 'red',
        flexDirection: 'column',
        paddingVertical: 10,
        paddingHorizontal: 20,
        //marginHorizontal: 20,
    },
    h1: {
        fontSize: 24,
        fontWeight: "bold",

    },
    iconBack: {
        width: 50,
        height: 50,
    },
    mainImage: {
        width: 250,
        height: 250,
    },
    price: {
        fontSize: 36,
        fontWeight: "bold",
    },
})