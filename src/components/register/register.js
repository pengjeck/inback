/**
 * Created by pj on 17-6-5.
 */

import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  BackHandler,
  Alert
} from 'react-native'

import React, {
  Component
} from 'react'

import {
  viewportHeight,
  viewportWidth,
  widthPercentage,
  heightPercentage
} from '../basic'

import { AdultInfo } from '../../config/default'
export default class Register extends Component {
  // 组件被加载之后
  componentDidMount() {
  }

  componenetWillUnmount() {
  }

  // 构造函数
  constructor(props) {
    super(props);
  }

  getAdultInfo(name, idCard, gender) {
    AdultInfo.name = name;
    AdultInfo.idCard = idCard;
    AdultInfo.gender = gender;
    ToastAndroid.show(JSON.stringify(AdultInfo),
      ToastAndroid.SHORT, ToastAndroid.TOP)
  }

  getChildInfo(name, idCard, gender) {
    AdultInfo.childInfo = {
      name,
      idCard,
      gender
    };
    ToastAndroid.show(JSON.stringify(AdultInfo),
      ToastAndroid.SHORT, ToastAndroid.TOP)
  }

  getAccountInfo(nickName, gender, phoneNum) {
    AdultInfo.phoneNum = phoneNum;
    AdultInfo.nickName = nickName;
    AdultInfo.gender = gender;
    ToastAndroid.show(JSON.stringify(AdultInfo),
      ToastAndroid.SHORT, ToastAndroid.TOP)
  }

  onConfirm() {
    let upperThis = this;
    Alert.alert('温馨提醒', '是否保存密码?', [{
      text: '取消', onPress: () => {
        // ToastAndroid.show('go back', ToastAndroid.SHORT);
        upperThis.props.navigation.goBack();
      }
    }, {
      text: '确定', onPress: () => {
        upperThis.props.navigation.goBack();
      }
    }]);
  }

  render() {
    return (
      <View>
        <Image style={styles.background}
          source={require('./images/background.png')}>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => {
                this.props.navigation.navigate('AdultInfo',
                  { getAdultInfo: this.getAdultInfo.bind(this) })
              }}>
              <Image style={styles.imageButton}
                source={require('./images/adultInfo.png')}>
              </Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.card}
              onPress={() => {
                this.props.navigation.navigate('ChildInfo',
                  { getChildInfo: this.getChildInfo.bind(this) })
              }}>
              <Image style={styles.imageButton}
                source={require('./images/childInfo.png')}>
              </Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.card}
              onPress={() => {
                this.props.navigation.navigate('AccountInfo',
                  { getAccountInfo: this.getAccountInfo.bind(this) })
              }}>
              <Image style={styles.imageButton}
                source={require('./images/accountInfo.png')}>
              </Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.card, {
                marginTop: widthPercentage(8)
              }]}
              onPress={this.onConfirm.bind(this)}>
              <Image style={[styles.imageButton]}
                source={require('./images/finishButton.png')}>
              </Image>
            </TouchableOpacity>
          </View>
        </Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    // flex: 1,
    width: viewportWidth,
    height: viewportHeight
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: heightPercentage(30),
    marginBottom: heightPercentage(15)
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imageButton: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    height: heightPercentage(10),
  }
});