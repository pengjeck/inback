/**
 * Created by pj on 17-6-2.
 */
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  View
} from 'react-native'
import React, {Component} from 'react'
import {
  viewportWidth,
  viewportHeight,
  widthPercentage,
  heightPercentage
} from '../basic'

export default class Open extends Component {
  openPress() {
    console.log('press')
  }

  render() {
    return (
      <View style={styles.pack}>
        <Image
          style={styles.background}
          source={require('./background.png')}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.openPress.bind(this)}>
            <Image
              style={styles.button_image}
              source={require('./buttonBackground.png')}/>
          </TouchableOpacity>
        </Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  pack: {
    flex: 1
  },
  background: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: viewportWidth,
    height: viewportHeight
  },
  button: {
    marginTop: 350
  },
  button_image: {
    resizeMode: 'contain',
    height: heightPercentage(15),
    width: widthPercentage(50)
  }
});