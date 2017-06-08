import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';

import React, {
  Component
} from 'react';

import {
  Content,
  Input,
  Text,
  Separator,
  ListItem,
  Body,
  List,
  Right,
  Left,
  Icon,
  Switch,
  Button,
  CardItem,
  Card
} from 'native-base'

import Picker from 'react-native-picker';

import {
  viewportHeight,
  viewportWidth,
  widthPercentage,
  heightPercentage
} from '../../basic.js'

export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homework: '',
      out: '',
      interest: '',
    }
  }

  render() {
    let styles = StyleSheet.create({
      separator: {
        color: 'transparent',
        backgroundColor: 'white'
      },
      partHeader: {
      },
      partSelectedContent: {
        fontSize: 14,
        color: 'white'
      }
    });

    return (
      <View style={{
        flex: 1,
      }}>
        <Image source={require('./background.png')}
          style={{
            flex: 1,
            resizeMode: 'stretch'
          }}>
          <Content style={{
            marginTop: heightPercentage(2),
          }}>
          </Content>
        </Image>
      </View>
    )
  }
}