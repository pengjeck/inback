/**
 * Created by pj on 17-5-22.
 */

import {StyleSheet, Dimensions, Platform} from 'react-native'

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

export {viewportHeight, viewportWidth, wp}

