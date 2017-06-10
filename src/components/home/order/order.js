import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Modal
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

import {
  WorkerInfo
} from '../../data.js'

export default class Order extends Component {
  /**
   * 所有的年龄区间
   */
  static _ageRanges = [
    [18, 25],
    [25, 30],
    [30, 35],
    [35, 40],
    [40, 45],
    [45, 50],
    [50, 55],
    [55, 60],
    [60, 65],
    [65, 70]
  ];
  /**
   * 学历列表
   */
  static _grades = [
    '大专',
    '本科',
    '研究生'
  ]

  /**
   * 构造函数
   * @param {*object} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      begTime: null,
      endTime: null,
      gender: 1,  // 性别要求，1: 男性，2: 女性
      ageRangeIndex: 6,
      gradeIndex: 0,
      waitingModalVisible: false,  // 默认等待的窗口不可见
      workerInfoModalVisible: false,  // 员工信息的窗口
    }
  }

  _stateGrade2Text() {
    console.log(this.state.gradeIndex);
    return Order._grades[this.state.gradeIndex]
  }

  _grade2Text(index) {
    return Order._grade2Text[index]
  }

  _grade2Index(text) {
    if (text === Order._grades[0]) {
      return 0
    } else if (text === Order._grades[1]) {
      return 1
    } else if (text === Order._grades[2]) {
      return 2
    }
  }

  _gender2Text(index) {
    if (index === 1) {
      return '男'
    } else if (index === 2) {
      return '女'
    } else {
      // 默认情况
      return '男'
    }
  }

  _stateGender2Text() {
    if (this.state.gender === 1) {
      return '男'
    } else if (this.state.gender === 2) {
      return '女'
    } else {
      this.setState({ gender: 1 })
      return '男'
    }
  }

  _ageRangeIndex2Text(index) {
    let range = Order._ageRanges[index];
    return range[0].toString() + '~' + range[1].toString() + '岁';
  }

  _stateAgeRangeIndex2Text() {
    let range = Order._ageRanges[this.state.ageRangeIndex];
    return range[0].toString() + '~' + range[1].toString() + '岁';
  }

  _showGenderPicker() {
    let out = ['男', '女'];
    let pickerData = [out];
    let selectedValue = [
      [out[0]]
    ];
    let upperThis = this;
    Picker.init({
      pickerData,
      selectedValue,
      pickerTitleText: '性别',
      wheelFlex: [2, 2],
      onPickerConfirm: pickedValue => {
        let value = pickedValue[0];
        if (value === '男') {
          upperThis.setState({gender: 1})
        } else if (value === '女') {
          upperThis.setState({gender: 2})
        }
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

  _showAgeRangePicker() {
    let out = Order._ageRanges.map((range) => {
      return range[0].toString() + '~' + range[1].toString();
    });
    let pickerData = [out];
    let selectedValue = [
      [out[5]]
    ];
    Picker.init({
      pickerData,
      selectedValue,
      pickerTitleText: '年龄',
      wheelFlex: [2, 2],
      onPickerConfirm: pickedValue => {
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

  _showGradePicker() {
    let out = Order._grades;
    let pickerData = [out];
    let selectedValue = [
      [out[0]]
    ];
    let upperThis = this;
    Picker.init({
      pickerData,
      selectedValue,
      pickerTitleText: '学历',
      wheelFlex: [2, 2],
      onPickerConfirm: pickedValue => {
        if (value == '研究生') {
          upperThis.setState({ gradeIndex: 2 })
        } else if (value === '本科') {
          upperThis.setState({ gradeIndex: 1 })
        } else if (value === '大专') {
          upperThis.setState({ gradeIndex: 0 })
        } else {
          console.log('error');
        }
      },
      onPickerCancel: pickedValue => {
      },
      onPickerSelect: pickedValue => {
      }
    });
    Picker.show();
  }

  _showTimePickerBeg() {
    let years = [],
      months = [],
      days = [],
      hours = [],
      minutes = [];

    for (let i = 1; i < 13; i++) {
      months.push(i);
      hours.push(i);
    }
    for (let i = 1; i < 32; i++) {
      days.push(i);
    }
    for (let i = 1; i < 61; i++) {
      minutes.push(i);
    }
    let pickerData = [months, days, ['am', 'pm'], hours, minutes];
    let date = new Date();
    let selectedValue = [
      [date.getMonth() + 1],
      [date.getDate()],
      [date.getHours() > 11 ? 'pm' : 'am'],
      [date.getHours() === 12 ? 12 : date.getHours() % 12],
      [date.getMinutes()]
    ];
    let upperThis = this;
    Picker.init({
      pickerData,
      selectedValue,
      pickerTitleText: '开始时间',
      wheelFlex: [1, 1, 1, 1, 1],
      onPickerConfirm: pickedValue => {
        let targetValue = [...pickedValue];
        if (parseInt(targetValue[1]) === 2) {
          if (targetValue[0] % 4 === 0 && targetValue[2] > 29) {
            targetValue[2] = 29;
          }
          else if (targetValue[0] % 4 !== 0 && targetValue[2] > 28) {
            targetValue[2] = 28;
          }
        }
        else if (targetValue[1] in { 4: 1, 6: 1, 9: 1, 11: 1 } && targetValue[2] > 30) {
          targetValue[2] = 30;
        }
        upperThis.setState({ begTime: targetValue[3] + ':' + targetValue[4] + targetValue[2] })
      },
      onPickerCancel: pickedValue => {
      },
      onPickerSelect: pickedValue => {
      }
    });
    Picker.show();
  }

  _showTimePickerEnd() {
    let years = [],
      months = [],
      days = [],
      hours = [],
      minutes = [];
    for (let i = 1; i < 13; i++) {
      months.push(i);
      hours.push(i);
    }
    for (let i = 1; i < 32; i++) {
      days.push(i);
    }
    for (let i = 1; i < 61; i++) {
      minutes.push(i);
    }
    let pickerData = [months, days, ['am', 'pm'], hours, minutes];
    let date = new Date();
    let selectedValue = [
      [date.getMonth() + 1],
      [date.getDate()],
      [date.getHours() > 11 ? 'pm' : 'am'],
      [date.getHours() === 12 ? 12 : date.getHours() % 12],
      [date.getMinutes()]
    ];
    let upperThis = this;
    Picker.init({
      pickerData,
      selectedValue,
      pickerTitleText: '结束时间',
      wheelFlex: [1, 1, 1, 1, 1],
      onPickerConfirm: pickedValue => {
        let targetValue = [...pickedValue];
        if (parseInt(targetValue[1]) === 2) {
          if (targetValue[0] % 4 === 0 && targetValue[2] > 29) {
            targetValue[2] = 29;
          }
          else if (targetValue[0] % 4 !== 0 && targetValue[2] > 28) {
            targetValue[2] = 28;
          }
        }
        else if (targetValue[1] in { 4: 1, 6: 1, 9: 1, 11: 1 } && targetValue[2] > 30) {
          targetValue[2] = 30;
        }
        upperThis.setState({ endTime: targetValue[3] + ':' + targetValue[4] + targetValue[2] })
      },
      onPickerCancel: pickedValue => {
      },
      onPickerSelect: pickedValue => {
      }
    });
    Picker.show();
  }

  _onConfirm() {
    this.setWaitingModalVisible(true);
    // 一秒钟之后模拟有接单的人
    let upperThis = this;
    setTimeout(function () {
      upperThis.setWaitingModalVisible(false);
      upperThis.setWorkerInfoModalVisible(true);
    }, 1000);
  }

  setWaitingModalVisible(visible) {
    this.setState({ waitingModalVisible: visible });
  }

  setWorkerInfoModalVisible(visible) {
    this.setState({ workerInfoModalVisible: visible })
  }

  showStars(mark) {
    let full = (key) => {
      return <Icon key={key}
        name='ios-star'
        style={{
          color: 'yellow',
          fontSize: 24,
        }} />
    };

    let half = (key) => {
      return <Icon key={key}
        name='ios-star-half'
        style={{
          color: 'yellow',
          fontSize: 24,
        }} />
    }

    let empty = (key) => {
      return <Icon key={key}
        name='ios-star-outline'
        style={{
          fontSize: 24,
        }} />
    };
    let fullCount = parseInt(mark / 2);
    let haveHalf = mark % 2 === 1;
    let emptyCount = parseInt((10 - mark) / 2);

    let stars = [];
    for (let i = 0; i < fullCount; i++) {
      stars.push(full(i));
    }
    if (haveHalf) {
      stars.push(half(fullCount * 2 + 1));
    }
    for (let i = 0; i < emptyCount; i++) {
      start.push(empty(fullCount * 2 + (haveHalf ? 1 : 0) + i));
    }

    return (
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
        {
          stars.map((item) => {
            return item
          })
        }
      </View>
    )
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
      },
      modalView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      centerView: {
        width: 200,
        height: 120,
        backgroundColor: '#ccc',
        borderRadius: 5,
      },
      message: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 3,
      },
      bottomView: {
        flex: 1,
        flexDirection: 'row',
        borderTopWidth: 2,
        borderColor: '#fff',
        marginTop: 4,
      },
      btnHide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 0.5,
        borderColor: '#fff',
      },
    });

    return (
      <View style={{
        flex: 1,
      }}>
        {/* ====== 接单人的信息 ======*/}
        <Modal
          animationType={'none'}
          transparent={true}
          visible={this.state.workerInfoModalVisible}
          onRequestClose={() => {
            console.log("<== modal has been closed.");
            this.setWorkerInfoModalVisible(false)
          }}>
          <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <View style={{
              width: widthPercentage(96),
              height: heightPercentage(40),
              backgroundColor: '#ccc',
              borderRadius: 5,
            }}>
              <View style={styles.message}>
                <View style={{
                  flex: 3,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                  <View style={{
                    flex: 3,
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}>
                    <Image style={{
                      width: 80,
                      resizeMode: 'contain',
                    }}
                      source={require('./headIcon.png')} />
                  </View>

                  <View style={{
                    flex: 10,
                    marginLeft: 30,
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}>
                    <Text style={{ color: 'gray' }}> {WorkerInfo.name} </Text>
                    <View style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                      <Icon name='ios-paper-plane-outline' style={{
                        fontSize: 24,
                        color: 'gray',
                      }} />
                      <Text style={{
                        flex: 1,
                        color: 'gray',
                        marginRight: 3,
                      }}> {WorkerInfo.distance} </Text>

                      <Icon name='ios-person-outline' style={{
                        fontSize: 24,
                        color: 'gray',
                      }} />
                      <Text style={{
                        flex: 1, color: 'gray'
                      }}> {WorkerInfo.age} </Text>
                      <View style={{
                        flex: 3,
                        flexDirection: 'row',
                        justifyContent: 'center',
                      }}>
                        <Icon name='ios-create-outline' style={{
                          fontSize: 24,
                          color: 'gray',
                        }} />
                        {this.showStars(9)}
                      </View>
                    </View>
                  </View>
                </View>

                <View style={{
                  flex: 1,
                }}>
                  <Text> {WorkerInfo.name}已经接单，正在尽快前往，请等待...</Text>
                </View>

              </View>

              <View style={styles.bottomView}>
                <TouchableOpacity
                  style={styles.btnHide}
                  onPress={() => {
                    // 准备跳转
                    this.setWorkerInfoModalVisible(false);
                    this.props.callbackSubmit();
                  }}>
                  <Text style={{
                    fontSize: 20,
                  }}>开始会话</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {/*==== 等待弹出窗口 ====*/}
        <Modal
          animationType={'none'}
          transparent={true}
          visible={this.state.waitingModalVisible}
          onRequestClose={() => {
            console.log("<== modal has been closed.");
            this.setState({ waitingModalVisible: false });
          }}>
          <View style={styles.modalView}>
            <View style={styles.centerView}>
              <View style={styles.message}>
                <Text style={{
                }}
                >正在为您寻找接单者</Text>
                <Text>请稍等...</Text>
              </View>

              <View style={styles.bottomView}>
                <TouchableOpacity
                  style={styles.btnHide}
                  onPress={() => {
                    this.setState({ waitingModalVisible: false })
                  }}>
                  <Text>确定</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {/* ===== 实际界面显示的内容 =====*/}
        <Image source={require('./background.png')}
          style={{
            flex: 1,
            resizeMode: 'stretch'
          }}>
          <Content style={{
            marginTop: heightPercentage(2),
          }}>
            <Card style={{
              width: widthPercentage(90),
              marginLeft: widthPercentage(5),
              marginRight: widthPercentage(5),
            }}>
              <CardItem>
                <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                  <Text style={{
                    fontSize: 25,
                    color: '#ff9972',
                    fontWeight: 'bold',
                  }}>订单</Text>
                </View>
              </CardItem>

              <CardItem>
                <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                  {/* --- 起始地点 ---*/}
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
                      <Text>
                        <Text style={{ color: 'gray' }}>从：</Text>武大二附小
                      </Text>
                    </View>
                    <View style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginTop: 8,
                    }}>
                      {/* TODO: 选择开始的时间 */}
                      <TouchableOpacity onPress={this._showTimePickerBeg.bind(this)}>
                        <Text style={{
                          color: '#ff9972'
                        }}>
                          {this.state.begTime == null ?
                            '点击选择时间' : this.state.begTime}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  {/* --- 结束地点 --- */}
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
                      <Text>
                        <Text style={{ color: 'gray' }}>至：</Text>珞珈小区
                      </Text>
                    </View>
                    <View style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginTop: 8,
                    }}>
                      {/* TODO: 选择结束的时间 */}
                      <TouchableOpacity onPress={this._showTimePickerEnd.bind(this)}>
                        <Text style={{
                          color: '#ff9972'
                        }}>
                          {this.state.endTime == null ?
                            '点击选择时间' : this.state.endTime}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </CardItem>
            </Card>

            <Card style={{
              width: widthPercentage(90),
              marginLeft: widthPercentage(5),
              marginRight: widthPercentage(5),
            }}>
              <CardItem>
                <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                  <Text style={{
                    color: '#ff9972',
                    fontSize: 24,
                    fontWeight: 'bold',
                  }}>
                    要求
                    </Text>
                </View>
              </CardItem>
              <CardItem>
                <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                  {/* 定义onPress */}
                  <TouchableOpacity onPress={this._showGenderPicker.bind(this)}
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}>
                    <Text style={{
                      flex: 1,
                      color: '#ff9972'
                    }}>
                      {this._stateGender2Text()}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={this._showAgeRangePicker.bind(this)}
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}>
                    <Text style={{
                      flex: 1,
                      color: '#ff9972'
                    }}>
                      {this._stateAgeRangeIndex2Text()}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={this._showGradePicker.bind(this)}
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}>
                    <Text style={{
                      color: '#ff9972'
                    }}>
                      {this._stateGrade2Text()}
                    </Text>
                  </TouchableOpacity>
                </View>
              </CardItem>
            </Card>

            <Card style={{
              width: widthPercentage(90),
              marginLeft: widthPercentage(5),
              marginRight: widthPercentage(5),
            }}>
              <CardItem >
                <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                  <Text style={{
                    color: '#ff9972',
                    fontSize: 24,
                    fontWeight: 'bold',
                  }}>
                    详情
                  </Text>
                </View>
              </CardItem>

              <CardItem>
                <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                  <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}>
                    <View style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'center'
                    }}>
                      <Text>作业辅导</Text>
                    </View>

                    <View style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'center'
                    }}>
                      <Text>兴趣培养</Text>
                    </View>

                    <View style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'center'
                    }}>
                      <Text>外出游玩</Text>
                    </View>

                  </View>

                  <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}>
                    <View style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'center'
                    }}>
                      <Text>{this.props.homework}</Text>
                    </View>
                    <View style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'center'
                    }}>
                      <Text>{this.props.interest}</Text>
                    </View>
                    <View style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'center'
                    }}>
                      <Text>{this.props.out}</Text>
                    </View>
                  </View>
                </View>
              </CardItem>
            </Card>

            <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: widthPercentage(3),
              width: widthPercentage(90),
              marginLeft: widthPercentage(5),
              marginRight: widthPercentage(5),
            }}>
              <TouchableOpacity onPress={this._onConfirm.bind(this)}>
                <Image source={require('./confirmButton.png')}
                  style={{
                    resizeMode: 'contain',
                    height: heightPercentage(8),
                  }} />
              </TouchableOpacity>
            </View>
          </Content>
        </Image>
      </View>
    )
  }
}