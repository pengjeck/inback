/**
 * Created by pj on 17-6-5.
 */
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
} from 'react-native'
import {
  Input,
  Item,
  Icon,
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
  constructor(props) {
    super(props);
    this.state = {
      phoneNum: '12345678912',
      nickName: '新昵称',
      password: '1234'
    };
    this._scrollView;
  }

  onConfirm() {
    // this.setState({idCard: '360428199605295333'});
    if (this.state.phoneNum.length !== 11) {
      ToastAndroid.show('请检查手机号码',
        ToastAndroid.SHORT,
        ToastAndroid.TOP);
      return;
    }
    if (this.state.phoneNum.length === 0) {
      ToastAndroid.show('请输入密码',
        ToastAndroid.SHORT,
        ToastAndroid.TOP)
    }
    this.props.navigation.state.params.getAccountInfo(
      this.state.nickName,
      this.state.gender,
      this.state.phoneNum
    );
    this.props.navigation.goBack()
  }

  render() {
    return (
      <ScrollView scrollEnabled={false}>
        <Image source={require('./background.png')}
          style={{
            height: viewportHeight,
            width: viewportWidth
          }}>
          <View style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <View style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: heightPercentage(30),
            }}>
              <Item style={{
                width: widthPercentage(80),
              }}>
                <Icon name="ios-contact-outline"
                  style={{ color: 'white', fontSize: 28 }} />
                <Input
                  onChangeText={
                    (nickName) => this.setState({ nickName })
                  }
                  placeholder="用户名"
                  placeholderTextColor="white" />
              </Item>

              <Item style={{
                width: widthPercentage(80),
              }}>
                <Icon name="ios-card-outline"
                  style={{ color: 'white', fontSize: 28 }} />
                <Input
                  placeholder="电话号码"
                  placeholderTextColor="white"
                  onChangeText={
                    (phoneNum) => this.setState({ phoneNum })
                  } />
              </Item>

              <Item style={{
                width: widthPercentage(80),
              }}>
                <Icon name="ios-unlock-outline"
                  style={{ color: 'white', fontSize: 28 }} />
                <Input
                  onChangeText={
                    (password) => this.setState({ password })
                  }
                  placeholder="密码"
                  placeholderTextColor="white" />
              </Item>
            </View>

            {/*  ---- 确定按钮 ---- */}
            <View style={{
              flex: 3,
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: heightPercentage(2),
            }}>
              <TouchableOpacity style={{
                height: heightPercentage(20),
              }}
               onPress={this.onConfirm.bind(this)}>
                <Image
                  source={require('./confirmButton.png')}
                  style={{
                    resizeMode: 'contain',
                    width: widthPercentage(70),
                  }} />
              </TouchableOpacity>
            </View>
          </View>
        </Image>
      </ScrollView>
    )
  }
}
