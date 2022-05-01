import {Image, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {BoxShadow} from 'react-native-shadow'
import star from '../assets/icons/icon-star.png'
import emptyStar from '../assets/icons/icon-star-empty.png'
import addToBasketButton from '../assets/icons/icon-add-to-basket.png'
import removeFromBasketButton from '../assets/icons/icon-delete.png'

export default function Stars(props) {
    return (

        <View style={goodStyles.stars}>
            <Image source={star}
                   style={goodStyles.starImg}/>
            <Image source={star}
                   style={goodStyles.starImg}/>
            <Image source={star}
                   style={goodStyles.starImg}/>
            <Image source={emptyStar}
                   style={goodStyles.starImg}/>
            <Image source={emptyStar}
                   style={goodStyles.starImg}/>
        </View>

    )
}


const goodStyles = StyleSheet.create({
    starImg: {
        width: 13,
        height: 13,
        flex: 1
    },
    stars: {
        marginTop: 5,
        height: 20,
        width: 80,
        //backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },

})
