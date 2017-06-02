/**
 * Created by pj on 17-6-2.
 */
import {Dimensions} from 'react-native'

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

function widthPercentage(percentage) {
  return viewportWidth * percentage / 100
}

function heightPercentage(percentage) {
  return viewportHeight * percentage / 100
}

export {
  viewportWidth, viewportHeight,
  widthPercentage, heightPercentage
}
