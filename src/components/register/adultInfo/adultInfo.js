/**
 * Created by pj on 17-6-5.
 */

import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  DeviceEventEmitter,
  ToastAndroid,
  ScrollView,
  Keyboard
} from 'react-native'
import {
  Input,
  Text,
  Icon,
  Item,
} from 'native-base'
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from 'react-native-simple-radio-button';

import React, {
  Component,
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
      name: '新名字',
      idCard: '360428199605295555',
      gender: 1,
    };
  }

  onGenderSelected(value) {
    this.setState((pre, props) => {
      console.log('pre: ' + pre.gender + '||' + 'new:' + value);
      return { gender: value }
    })
  }

  onConfirm() {
    if (this.state.idCard.length !== 18) {
      let message = "请检查您的身份证号码";
      ToastAndroid.show(message, ToastAndroid.SHORT);
      return;
    }
    this.props.navigation.state.params.getAdultInfo(
      this.state.name,
      this.state.idCard,
      this.state.gender
    );
    this.props.navigation.goBack();
  }

  render() {
    let gender_props = [
      { label: '男', value: 0 },
      { label: '女', value: 1 }
    ];

    return (
      <ScrollView scrollEnabled={false} >
        <Image source={require('./background.png')}
          style={{
            width: viewportWidth,
            height: viewportHeight,
          }}>
          <View style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: heightPercentage(35),
          }}>

            <Item style={{
              width: widthPercentage(80),
            }}>
              <Icon name="ios-contact-outline"
                style={{ color: 'white', fontSize: 28 }} />
              <Input
                onChangeText={
                  (name) => this.setState({ name })
                }
                placeholder="姓名"
                placeholderTextColor="white" />
            </Item>

            <Item style={{
              width: widthPercentage(80),
            }}>
              <Icon name="ios-card-outline"
                style={{ color: 'white', fontSize: 28 }} />
              <Input
                onChangeText={
                  (idCard) => this.setState({ idCard })
                }
                placeholder="身份证号"
                placeholderTextColor="white" />
            </Item>

            {/*  --------------- 性别  -----------------*/}
            <View style={{
              flexDirection: 'row',
              alignContent: 'center',
              marginTop: heightPercentage(2),
              width: widthPercentage(80),
            }}>
              <Icon name="ios-transgender-outline"
                style={{ color: 'white', fontSize: 28 }} />
              <Text style={{
                color: 'white',
                fontSize: 18,
                marginLeft: widthPercentage(5)
              }}>性别</Text>
              <RadioForm
                formHorizontal={true}
                animation={true}>
                <RadioButton labelHorizontal={true} key={0}>
                  <RadioButtonInput
                    obj={gender_props[0]}
                    index={0}
                    isSelected={this.state.gender === 0}
                    onPress={this.onGenderSelected.bind(this)}
                    borderWidth={2}
                    buttonInnerColor={'white'}
                    buttonOuterColor={this.state.gender === 0 ? '#2196f3' : 'white'}
                    buttonSize={12}
                    buttonOuterSize={20}
                    buttonStyle={{}}
                    buttonWrapStyle={{ marginLeft: widthPercentage(5) }}
                  />
                  <RadioButtonLabel
                    obj={gender_props[0]}
                    index={0}
                    labelHorizontal={true}
                    onPress={this.onGenderSelected.bind(this)}
                    labelStyle={{ fontSize: 20, color: 'white' }}
                    labelWrapStyle={{}}
                  />

                  <RadioButtonInput
                    obj={gender_props[1]}
                    index={0}
                    isSelected={this.state.gender === 1}
                    onPress={this.onGenderSelected.bind(this)}
                    borderWidth={2}
                    buttonInnerColor={'white'}
                    buttonOuterColor={this.state.gender === 1 ? '#2196f3' : 'white'}
                    buttonSize={12}
                    buttonOuterSize={20}
                    buttonStyle={{}}
                    buttonWrapStyle={{ marginLeft: widthPercentage(3) }}
                  />
                  <RadioButtonLabel
                    obj={gender_props[1]}
                    index={1}
                    labelHorizontal={true}
                    onPress={this.onGenderSelected.bind(this)}
                    labelStyle={{ fontSize: 20, color: 'white' }}
                    labelWrapStyle={{}}
                  />
                </RadioButton>
              </RadioForm>
            </View>
          </View>

          {/*  --- 确定按钮 --- */}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: heightPercentage(6)
            }}>
            <TouchableOpacity onPress={this.onConfirm.bind(this)}>
              <Image
                source={require('./confirmButton.png')}
                style={{
                  resizeMode: 'contain',
                  height: heightPercentage(9)
                }} />
            </TouchableOpacity>
          </View>
        </Image>
      </ScrollView>
    )
  }
}

