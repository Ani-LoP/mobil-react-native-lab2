import {Image, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {BoxShadow} from 'react-native-shadow'
import star from '../../assets/icons/icon-star.png'
import emptyStar from '../../assets/icons/icon-star-empty.png'
import addToBasketButton from '../../assets/icons/icon-add-to-basket.png'
import removeFromBasketButton from '../../assets/icons/icon-delete.png'
import Stars from "../Stars";

export default function Good(props) {
    debugger
    return (
        <View style={goodStyles.outerContainer}>
            <BoxShadow setting={shadowOpt}>
                <View style={goodStyles.container}>
                    <View style={goodStyles.mainImageContainer}>
                        <Image
                            style={goodStyles.mainImage}
                            source={{uri: props.good.mainImg}}
                        />
                    </View>
                    <Text style={goodStyles.name} numberOfLines={2}>{props.good.name}</Text>
                    <Text style={goodStyles.price}>{props.good.price} руб</Text>
                    <Stars />
                    <TouchableHighlight style={goodStyles.addToBasketContainer}>
                        <Image source={props.good.inBasket ? removeFromBasketButton : addToBasketButton}
                               style={goodStyles.addToBasketImg}/>
                    </TouchableHighlight>
                </View>
            </BoxShadow>
        </View>
    )
}

const containerWidth = 140;
const containerHeight = 180;

const shadowOpt = {
    width: containerWidth,
    height: containerHeight,
    color: "#000",
    border: 10,
    radius: 3,
    opacity: 0.1,
    x: 8,
    y: 8,
    style: {marginVertical: 5}
}

const goodStyles = StyleSheet.create({
    outerContainer: {
        margin: 10
    },
    container: {
        width: containerWidth,
        height: containerHeight,
        backgroundColor: 'white',
        borderRadius: 6,
        //margin: 15,
        //shadowOffset: {width: 8, height: 8,},
        //shadowColor: 'rgba(0, 0, 0, 0.25)',
        //shadowOpacity: 1.0,
        //shadowRadius: 10,
        justifyContent: 'center',
        paddingHorizontal: 15,
        /*box-shadow: '2px 5px 8px 1px rgba(0, 0, 0, 0.25)'*/
    },
    mainImageContainer: {
        width: 100,
        height: 70,
        backgroundColor: 'pink',
        alignSelf: "center"
    },
    mainImage: {
        height: 70,
        //width: 'auto',
    },
    content: {
        width: 100,
        height: 150,
        backgroundColor: 'yellow'
    },
    name: {
        marginTop: 8,
        fontWeight: 'bold',
    },
    price: {
        color: '#535050',
        fontWeight: '600',
        marginTop: 5
    },
    addToBasketContainer: {
        position: 'absolute',
        right: 10,
        bottom: 15
    },
    addToBasketImg: {
        width: 30,
        height: 30,
    },
})
