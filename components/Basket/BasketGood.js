import {Image, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {BoxShadow} from 'react-native-shadow'
import removeFromBasketButton from '../../assets/icons/icon-delete.png'
import Stars from "../Stars";


export default function BasketGood(props) {
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
                    <View style={goodStyles.info}>
                        <Text style={goodStyles.name} numberOfLines={2}>{props.good.name}</Text>
                        <Text style={goodStyles.price}>{props.good.price} руб</Text>
                        <Stars/>
                    </View>
                    <TouchableHighlight style={goodStyles.addToBasketContainer}>
                        <Image source={removeFromBasketButton}
                               style={goodStyles.addToBasketImg}/>
                    </TouchableHighlight>
                </View>
            </BoxShadow>
        </View>
    )
}

const containerWidth = 320;
const containerHeight = 120;

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
        margin: 5
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
        justifyContent: "space-between",
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center'
        /*box-shadow: '2px 5px 8px 1px rgba(0, 0, 0, 0.25)'*/
    },
    mainImageContainer: {
        width: 80,
        height: 70,
        backgroundColor: 'pink',
        marginRight: 10
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
    /*addToBasketContainer: {
        position: 'absolute',
        right: 10,
        bottom: 15
    },*/
    addToBasketImg: {
        width: 35,
        height: 35,
        marginRight: 10
    },
    info: {
        flex: 3
    }
})
