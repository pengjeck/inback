/**
 * Created by pj on 17-6-2.
 */
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  BackHandler
} from 'react-native'
import React, { Component } from 'react'

import {
  Container,
  Content,
} from 'native-base'

import {
  viewportWidth,
  viewportHeight,
  widthPercentage,
  heightPercentage
} from '../basic'

export default class Catalog extends Component {
  register() {
    this.props.navigation.navigate('Register');
  }

  login() {
    console.log('pressed');
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <Image source={require('./images/background.png')}
        style={{
          width: viewportWidth,
          height: viewportHeight
        }} >
        <View style={{
          flex: 1,
        }}>
          {/* 顶部的空隙 */}
          <View style={{ flex: 1 }}></View>
          {/* 第一行 */}
          <View style={{
            flex: 2,
            alignItems: 'center',
          }}>
            <Image source={require('./images/1.png')}
              style={{
                resizeMode: 'contain',
                height: heightPercentage(20),
              }} />
          </View>

          {/* 第二行*/}
          <View style={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
            <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
              <Image source={require('./images/2.png')}
                style={{
                  resizeMode: 'contain',
                  height: heightPercentage(20),
                }} />
            </View>

            <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
              <Image source={require('./images/3.png')}
                style={{
                  resizeMode: 'contain',
                  height: heightPercentage(20),
                }} />
            </View>
          </View>

          {/* 第三行 */}
          <View style={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
            <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
              <Image source={require('./images/4.png')}
                style={{
                  resizeMode: 'contain',
                  height: heightPercentage(20),
                }} />
            </View>

            <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
              <Image source={require('./images/5.png')}
                style={{
                  resizeMode: 'contain',
                  height: heightPercentage(20),
                }} />
            </View>
          </View>

          {/*  --- 注册|登录 --- */}
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
              <TouchableOpacity
                onPress={this.register.bind(this)}>
                <Image source={require('./images/7.png')}
                  style={{
                    resizeMode: 'contain',
                    width: widthPercentage(20),
                  }} />
              </TouchableOpacity>
            </View>

            <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
              <TouchableOpacity
                onPress={this.login.bind(this)}>
                <Image source={require('./images/6.png')}
                  style={{
                    resizeMode: 'contain',
                    width: widthPercentage(20),
                  }} />
              </TouchableOpacity>

            </View>
          </View>
          {/* 底部的空隙 */}
          <View style={{ flex: 1 }}></View>
        </View>
      </Image>
    )
  }
}
