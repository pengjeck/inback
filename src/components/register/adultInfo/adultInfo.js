/**
 * Created by pj on 17-6-5.
 */

import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import {
  Input,
  Text,
  Icon,
  Item,
  Button,
  Container,
  Content,
} from 'native-base'

import React, {
  Component
} from 'react'

import {
  viewportHeight,
  viewportWidth,
  widthPercentage,
  heightPercentage
} from '../../basic'


export default class AdultInfo extends Component {
  render() {
    return (
      <View>
        <Image source={require('./background.png')}
               style={styles.background}>
          <View style={styles.container}>
            <Item>
              <Icon name="closed-caption"/>
              <Input placeholder="123">

              </Input>
            </Item>
          </View>
        </Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    width: viewportWidth,
    height: viewportHeight
  },
  container: {
    flex: 1,
  }
});
