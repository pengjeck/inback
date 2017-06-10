/**
 * Created by pj on 17-6-5.
 */

import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native'
import React, { Component } from 'react'
import {
  Container,
  Content,
  Item,
  Input,
  Icon,
} from 'native-base';

import {
  viewportHeight,
  viewportWidth,
  widthPercentage,
  heightPercentage
} from '../basic'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNum: '13006305269',
      password: '1234',
    };
  }

  login() {
    if (this.state.phoneNum === '13006305269' &&
      this.state.password === '1234') {
      this.props.navigation.navigate('Home');
    } else {
      ToastAndroid.show('用户名或密码错误',
        ToastAndroid.SHORT,
        ToastAndroid.TOP);
      return;
    }
  }

  render() {
    return (
      <ScrollView scrollEnabled={false} >
        <Image source={require('./images/background.png')}
          style={{
            width: viewportWidth,
            height: viewportHeight,
          }}>
          <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            marginTop: heightPercentage(35),
          }}>
            {/* --- 输入手机号 --- */}
            <Item style={{
              marginLeft: widthPercentage(5),
              marginRight: widthPercentage(5),
            }}>
              <Icon name="home"
                style={{ color: 'white' }} />
              <Input placeholder="手机号" placeholderTextColor='white'
                onChangeText={
                  (phoneNum) => {
                    this.setState({ phoneNum });
                  }
                } />
            </Item>

            {/* --- 输入密码 --- */}
            <Item style={{
              marginLeft: widthPercentage(5),
              marginRight: widthPercentage(5),
            }}>
              <Icon name="md-key"
                style={{ color: 'white' }} />
              <Input placeholder="密码"
                placeholderTextColor='white'
                secureTextEntry={true}
                onChangeText={(password) => {
                  this.setState({ password });
                }} />
            </Item>

            {/* 登录按钮 */}
            <View style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: heightPercentage(2),
            }}>
              <TouchableOpacity onPress={this.login.bind(this)}>
                <Image source={require('./images/loginButton.png')}
                  style={{
                    resizeMode: 'center',
                    height: heightPercentage(8),
                  }} />
              </TouchableOpacity>
            </View>
          </View>
        </Image>
      </ScrollView>
    )
  }
}
