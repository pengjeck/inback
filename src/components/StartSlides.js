/**
 * Created by pj on 17-5-22.
 */

import Carousel from 'react-native-snap-carousel';
import {Text, View, Image} from 'react-native'
export default class StartSlides extends Carousel {
    render() {
        return (
            <View>
                <Image
                    source={{uri: '/home/pj/pro/android/inBack/src/res/img/accessory.png'}}
                />
            </View>
        )
    }
}