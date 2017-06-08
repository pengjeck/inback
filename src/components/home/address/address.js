import {
  View,
  Image,
  StyleSheet,
} from 'react-native'

import {
  Item,
  Icon,
  Input
} from 'native-base'

import React, {
  Component,
} from 'react'

import {
  viewportHeight,
  viewportWidth,
  heightPercentage,
  widthPercentage
} from '../../basic.js'


export default class Address extends Component {

  render() {
    let styles = StyleSheet.create({
    });

    return (
      <View>
        <Image
          style={{
            height: heightPercentage(14),
            resizeMode: 'stretch',
            width: viewportWidth,
          }}
          source={require('./out.png')}>
          <Item
            style={{
              width: widthPercentage(90),
              marginLeft: widthPercentage(5),
              marginRight: widthPercentage(5),
              marginTop: 3,
              borderColor: 'transparent',
              backgroundColor: 'white'
            }}
            rounded>
            <Icon name='ios-swap-outline'
              style={{ color: 'gray' }} />
            <Input
              style={{
                height: 35,
                fontSize: 12.5,
              }}
              placeholder='输入接孩子地址'
              placeholderTextColor='gray' />
          </Item>
          <Item
            style={{
              width: widthPercentage(90),
              marginLeft: widthPercentage(5),
              marginRight: widthPercentage(5),
              marginTop: 3,
              borderColor: 'transparent',
              backgroundColor: 'white',
            }}
            rounded>
            <Input
              style={{
                height: 35,
                fontSize: 12
              }}
              placeholder='输入送孩子地址'
              placeholderTextColor='gray'
            />
            <Icon name='ios-swap-outline'
              style={{ color: 'gray' }} />
          </Item>
        </Image>

        {/*   ---- 地图 TODO:怎么和上面的输入框联动？ ---- */}

        <View style={{
          flex: 20,
          backgroundColor: 'gray',
        }}>
        </View>
      </View>
    )
  }
}