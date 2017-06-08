import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Alert
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

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homework: '',
      out: '',
      interest: '',
    }
  }

  _showHomeworkPicker() {
    let grade = ['幼儿园', '小学', '初中'];
    let homeworks = ['语文', '数学', '外语'];
    let pickerData = [grade, homeworks];
    let selectedValue = [
      [grade[0]],
      [homeworks[0]]
    ];
    Picker.init({
      pickerData,
      selectedValue,
      pickerTitleText: '作业辅导',
      wheelFlex: [2, 2],
      onPickerConfirm: pickedValue => {
        console.log('area', pickedValue);
      },
      onPickerCancel: pickedValue => {
        console.log('area', pickedValue);
      },
      onPickerSelect: pickedValue => {
        console.log('area', pickedValue);
      }
    });
    Picker.show();
  }
  _showInterestPicker() {
    let interests = ['烹饪', '绘画', '舞蹈', '乐器',
      '声乐', '插花', '篮球', '溜冰'];
    let pickerData = [interests];
    let selectedValue = [
      [interests[0]]
    ];
    Picker.init({
      pickerData,
      selectedValue,
      pickerTitleText: '兴趣培养',
      wheelFlex: [2, 2],
      onPickerConfirm: pickedValue => {
        console.log(pickedValue);
      },
      onPickerCancel: pickedValue => {
        console.log('area', pickedValue);
      },
      onPickerSelect: pickedValue => {
        console.log('area', pickedValue);
      }
    });
    Picker.show();
  }
  _showOutPicker() {
    let out = ['博物馆', '游乐场', '艺术馆', '图书城'];
    let pickerData = [out];
    let selectedValue = [
      [out[0]]
    ];
    Picker.init({
      pickerData,
      selectedValue,
      pickerTitleText: '外出游玩',
      wheelFlex: [2, 2],
      onPickerConfirm: pickedValue => {
        console.log('area', pickedValue);
      },
      onPickerCancel: pickedValue => {
        console.log('area', pickedValue);
      },
      onPickerSelect: pickedValue => {
        console.log('area', pickedValue);
      }
    });
    Picker.show();
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
            <Card
              style={{
                width: widthPercentage(90),
                marginLeft: widthPercentage(5),
                marginRight: widthPercentage(5)
              }}>
              <CardItem header button
                onPress={this._showHomeworkPicker.bind(this)}>
                <Text style={{
                  color: '#ff9975',
                  fontSize: 20,
                  fontWeight: 'bold'
                }}>作业辅导</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text style={{
                    color: 'gray',
                  }}>
                    {this.state.homework === '' ? '点击选择' : this.state.homework}
                  </Text>
                </Body>
              </CardItem>
            </Card>
            <Card style={{
                width: widthPercentage(90),
                marginLeft: widthPercentage(5),
                marginRight: widthPercentage(5)
              }}>
              <CardItem header button
                onPress={this._showInterestPicker.bind(this)}>
                <Text style={{
                  color: '#ff9975',
                  fontSize: 20,
                  fontWeight: 'bold'
                }}>兴趣培养</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text style={{
                    color: 'gray',
                  }}>
                    {this.state.interest === '' ? '点击选择' : this.state.interest}
                  </Text>
                </Body>
              </CardItem>
            </Card>
            <Card style={{
                width: widthPercentage(90),
                marginLeft: widthPercentage(5),
                marginRight: widthPercentage(5)
              }}>
              <CardItem header button
                onPress={this._showOutPicker.bind(this)}>
                <Text style={{
                  color: '#ff9975',
                  fontSize: 20,
                  fontWeight: 'bold'
                }}>外出游玩</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text style={{
                    color: 'gray',
                  }}>
                    {this.state.out === '' ? '点击选择' : this.state.out}
                  </Text>
                </Body>
              </CardItem>
            </Card>
          </Content>
        </Image>
      </View>
    )
  }
}