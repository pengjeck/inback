/**
 * Created by pj on 17-5-22.
 */
import React, {Component} from 'react';
// import Carousel from 'react-native-snap-carousel';
import {Text, View, Image} from 'react-native'
export default class StartSlides extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <Image source={pic} style={{width: 193, height: 110}}/>
        )
    }
}
// let style = Stylesheet.create({
//     baseText: {
//         fontFamily: 'Cochin',
//     },
//     titleText: {
//         fontSize: 20,
//         fontWeight: 'bold',
//     },
// });