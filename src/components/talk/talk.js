import {
  View,
  Alert,
  Text,
  StyleSheet,
  Image
} from 'react-native'

import React, {
  Component,
} from 'react'

import {
  Container,
  Content,
  Tab,
  Tabs,
  Header,
  Footer,
  TabHeading,
  Icon,
  Item,
  Input,
  FooterTab,
  Button,
} from 'native-base';

import {
  widthPercentage,
  heightPercentage,
  viewportHeight,
  viewportWidth
} from '../basic.js'

export default class Talk extends Component {
  render() {
    return (
      <View style={{
        width: viewportWidth,
        height: viewportHeight,
      }}>
        <Image source={require('../images/background.png')}
          style={{
            flex: 1
          }} />
      </View>
    )
  }
}