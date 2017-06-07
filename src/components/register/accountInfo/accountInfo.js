/**
 * Created by pj on 17-6-5.
 */
/**
 * Created by pj on 17-6-5.
 */

import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
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
  horizontalMargin = 20;
  _carousel = null;
  sliderWidth = 0;
  itemWidth = 0;
  itemHeight = 0;

  constructor(props) {
    super(props);
    this.state = {
      phoneNum: '12345678912',
      nickName: '新昵称',
      password: '1234'
    };

    this._carousel = null;
    this.sliderWidth = widthPercentage(90);
    this.itemWidth = this.sliderWidth + this.horizontalMargin * 2;
    this.itemHeight = heightPercentage(60);
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
    const styles = StyleSheet.create({
      background: {
        width: viewportWidth,
        height: viewportHeight
      },
      container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        width: viewportWidth,
        height: viewportHeight,
        marginTop: heightPercentage(20),
        // paddingBottom: heightPercentage(10),
        // marginBottom: heightPercentage()
        // marginBottom: heightPercentage(20)
        // marginLeft: widthPercentage(8),
        // marginRight: widthPercentage(5)
      },
      slide: {
        width: this.itemWidth,
        height: this.itemHeight
      }
    });

    return (
      <View>
        <Image source={require('./background.png')}
               style={styles.background}>
          <View style={styles.container}>
            <Item style={{
              marginLeft: widthPercentage(5),
              marginRight: widthPercentage(5),
              marginTop: heightPercentage(5)
            }}>
              <Icon name="ios-contact-outline"
                    style={{color: 'white', fontSize: 28}}/>
              <Input
                onChangeText={
                  (nickName) => this.setState({nickName})
                }
                placeholder="用户名"
                placeholderTextColor="white"/>
            </Item>
            <Item style={{
              marginLeft: widthPercentage(5),
              marginRight: widthPercentage(5),
              marginTop: heightPercentage(3)
            }}>
              <Icon name="ios-card-outline"
                    style={{color: 'white', fontSize: 28}}/>
              <Input
                onChangeText={
                  (phoneNum) => this.setState({phoneNum})
                }
                placeholder="电话号码"
                placeholderTextColor="white"/>
            </Item>
            <Item style={{
              marginLeft: widthPercentage(5),
              marginRight: widthPercentage(5),
              marginTop: heightPercentage(3)
            }}>
              <Icon name="ios-unlock-outline"
                    style={{color: 'white', fontSize: 28}}/>
              <Input
                onChangeText={
                  (password) => this.setState({password})
                }
                placeholder="密码"
                placeholderTextColor="white"/>
            </Item>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: heightPercentage(10)
              }}>
              <TouchableOpacity onPress={this.onConfirm.bind(this)}>
                <Image
                  source={require('./confirmButton.png')}
                  style={{
                    resizeMode: 'contain',
                    height: heightPercentage(9)
                  }}/>
              </TouchableOpacity>
            </View>
          </View>
        </Image>
      </View>
    )
  }
}
