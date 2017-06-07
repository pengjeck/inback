/**
 * Created by pj on 17-6-5.
 */

import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  DeviceEventEmitter
} from 'react-native'
import {
  Input,
  Text,
  Item,
  Icon,
  Button,
  Container,
  Content,
} from 'native-base'

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from 'react-native-simple-radio-button';

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
      gender: 1,
      idCard: '',
      name: ''
    };

    this._carousel = null;
    this.sliderWidth = widthPercentage(90);
    this.itemWidth = this.sliderWidth + this.horizontalMargin * 2;
    this.itemHeight = heightPercentage(60);
  }

  onGenderSelected(value) {
    this.setState((pre, props) => {
      console.log('pre: ' + pre.gender + '||' + 'new:' + value);
      return {gender: value}
    })
  }

  onConfirm() {
    this.setState({idCard: '360428199605295333'});
    if (this.state.idCard.length !== 18) {
      ToastAndroid.show('请检查身份证号码', ToastAndroid.SHORT);
      return;
    }
    DeviceEventEmitter.emit('RegisterChildInfo', {
      ...this.state
    });
    this.props.navigation.navigate('Register')
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

    let gender_props = [
      {label: '男', value: 0},
      {label: '女', value: 1}
    ];

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
                  (name) => this.setState({name})
                }
                placeholder="姓名"
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
                  (idCard) => this.setState({idCard})
                }
                placeholder="身份证号"
                placeholderTextColor="white"/>
            </Item>
            {/*  --------------- 性别  -----------------*/}
            <View style={{
              alignContent: 'center',
              marginTop: heightPercentage(4),
              marginLeft: widthPercentage(5),
              marginRight: widthPercentage(5),
              height: heightPercentage(10)
            }}>
              <View style={{
                flex: 1,
                flexDirection: 'row',
              }}>
                <Icon name="ios-transgender-outline"
                      style={{color: 'white', fontSize: 28}}/>
                <Text style={{
                  color: 'white',
                  fontSize: 18,
                  marginLeft: widthPercentage(5)
                }}>
                  性别
                </Text>
                <View style={{
                  flex: 1
                }}>
                  <RadioForm
                    formHorizontal={true}
                    animation={true}
                  >
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
                        buttonWrapStyle={{marginLeft: widthPercentage(5)}}
                      />
                      <RadioButtonLabel
                        obj={gender_props[0]}
                        index={0}
                        labelHorizontal={true}
                        onPress={this.onGenderSelected.bind(this)}
                        labelStyle={{fontSize: 20, color: 'white'}}
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
                        buttonWrapStyle={{marginLeft: widthPercentage(3)}}
                      />
                      <RadioButtonLabel
                        obj={gender_props[1]}
                        index={1}
                        labelHorizontal={true}
                        onPress={this.onGenderSelected.bind(this)}
                        labelStyle={{fontSize: 20, color: 'white'}}
                        labelWrapStyle={{}}
                      />
                    </RadioButton>
                  </RadioForm>
                </View>
              </View>
            </View>
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
                  }}/>
              </TouchableOpacity>
            </View>
          </View>
        </Image>
      </View>
    )
  }
}


