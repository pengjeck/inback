import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ToastAndroid,
  // Button
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

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from 'react-native-simple-radio-button';

export default class Insurance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPay: false,
      price: 0,
    }
  }

  _showPricePicker() {
    let price = ['1', '3', '5', '10'];
    let pickerData = [price];
    let selectedValue = [
      [price[0]]
    ];
    let upperThis = this;
    Picker.init({
      pickerData,
      selectedValue,
      pickerTitleText: '购买保险(元)',
      wheelFlex: [2],
      onPickerConfirm: pickedValue => {
        upperThis.setState({ price: parseInt(pickedValue) })
        upperThis.props.submitInfo({ ...this.state })
      },
      onPickerCancel: pickedValue => {
        upperThis.props.submitInfo({ ...this.state })
      },
      onPickerSelect: pickedValue => {
      }
    });
    Picker.show();
  }

  _pressSelectPrice() {
    if (this.state.isPay) {
      this._showPricePicker();
      return;
    } else {
      ToastAndroid.show("请先选择是否购买保险", ToastAndroid.show);
      return;
    }
  }
  onPaySelected(value) {
    // 如果选择不买保险
    if (!value) {
      this.setState({ price: 0 })
    }
    this.setState((pre, props) => {
      return { isPay: value }
    })
    this.props.submitInfo({ ...this.state })
  }

  render() {
    let styles = StyleSheet.create({
      separator: {
        color: 'transparent',
        backgroundColor: 'white'
      },
    });

    let yesORno = [
      { label: '是', value: true },
      { label: '否', value: false }
    ];

    return (
      <View style={{
        flex: 1,
      }}>
        <Image source={require('./background.png')}
          style={{
            flex: 1,
            resizeMode: 'stretch'
          }}>
          <Content>
            <Card
              style={{
                width: widthPercentage(90),
                marginTop: heightPercentage(2),
                marginLeft: widthPercentage(5),
                marginRight: widthPercentage(5),
              }}>
              <CardItem header>
                <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                  <Text style={{
                    fontSize: 25,
                    color: '#ff9972',
                    fontWeight: 'bold',
                  }}>购买保险</Text>
                </View>
              </CardItem>

              {/* ---- 是否购买保险 ----*/}
              <CardItem>
                <View style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                  <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                    <Text>IN 蓓壳已经为您购买基本人身意外险，</Text>
                  </View>
                  <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 5,
                  }}>
                    <Text>是否继续购买？</Text>
                  </View>

                  {/* ----- 单选按钮 -----*/}
                  <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: heightPercentage(4),
                  }}>
                    <RadioForm
                      formHorizontal={true}
                      animation={true}>
                      <RadioButton labelHorizontal={true} key={0}>
                        <RadioButtonInput
                          obj={yesORno[0]}
                          index={0}
                          isSelected={this.state.isPay}
                          onPress={this.onPaySelected.bind(this)}
                          borderWidth={2}
                          buttonInnerColor={'#ff9972'}
                          buttonOuterColor={this.state.gender === 0 ? '#2196f3' : 'gray'}
                          buttonSize={12}
                          buttonOuterSize={20}
                          buttonStyle={{}}
                          buttonWrapStyle={{ marginLeft: widthPercentage(5) }}
                        />
                        <RadioButtonLabel
                          obj={yesORno[0]}
                          index={0}
                          labelHorizontal={true}
                          onPress={this.onPaySelected.bind(this)}
                          labelStyle={{ fontSize: 20, color: 'black' }}
                          labelWrapStyle={{}}
                        />
                        <RadioButtonInput
                          obj={yesORno[1]}
                          index={0}
                          isSelected={!this.state.isPay}
                          onPress={this.onPaySelected.bind(this)}
                          borderWidth={2}
                          buttonInnerColor={'#ff9972'}
                          buttonOuterColor={this.state.gender === 1 ? '#2196f3' : 'gray'}
                          buttonSize={12}
                          buttonOuterSize={20}
                          buttonStyle={{}}
                          buttonWrapStyle={{ marginLeft: widthPercentage(3) }}
                        />
                        <RadioButtonLabel
                          obj={yesORno[1]}
                          index={1}
                          labelHorizontal={true}
                          onPress={this.onPaySelected.bind(this)}
                          labelStyle={{ fontSize: 20, color: 'black' }}
                          labelWrapStyle={{}}
                        />
                      </RadioButton>
                    </RadioForm>
                  </View>

                </View>
              </CardItem>
              {/*  ---- 购买保险 ----*/}
              <CardItem button
                onPress={this._pressSelectPrice.bind(this)}>
                <Text style={{
                  textAlign: 'center',
                  color: '#ff9972',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                  点击选择价格 : {
                    this.state.price
                  }
                </Text>
              </CardItem>
            </Card>
          </Content>
        </Image>
      </View>
    )
  }
}