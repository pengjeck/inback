import {
  View,
  Alert,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native'

import React, {
  Component,
} from 'react'

import {
  Container,
  Content,
  Tab,
  Tabs,
  Header,
  Footer,
  TabHeading,
  Icon,
  Item,
  Input,
  FooterTab,
  Button,
} from 'native-base';

import {
  widthPercentage,
  heightPercentage,
  viewportHeight,
  viewportWidth
} from '../basic.js'

import {
  WorkerInfo
} from '../data.js'

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from 'react-native-simple-radio-button';

import { GiftedChat } from 'react-native-gifted-chat';

export default class Talk extends Component {
  static Reasons = [
    { label: '态度不好', value: 0 },
    { label: '半天没接到孩子', value: 1 },
    { label: '另有安排', value: 2 },
    { label: '其他原因', value: 3 },
  ];

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: '你好，正在前往',
          createdAt: new Date(Date.UTC(2017, 6, 9, 5, 20, 0)),
          user: {
            _id: 2,
            name: WorkerInfo.name,
          },
        },
      ],
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      screenName: 'chat',
      cancelReason: 2,   // 默认取消订单的原因是另有安排
      messages: []
    }
  }
  /**
   * 选择取消的原因
   */
  onCancelReasonSelected(value) {
    this.setState({ cancelReason: value })
  }

  /**
   * 得到一个单选的按钮
   * @param {*int} index 
   */
  getRadio(index) {
    return (
      <RadioButton style={{
        marginBottom: 10,
      }}
        labelHorizontal={true} key={index}>
        <RadioButtonInput
          obj={Talk.Reasons[index]}
          index={index}
          isSelected={this.state.cancelReason === index}
          onPress={this.onCancelReasonSelected.bind(this)}
          borderWidth={2}
          buttonInnerColor={'white'}
          buttonOuterColor={this.state.cancelReason === index ? '#2196f3' : 'white'}
          buttonSize={12}
          buttonOuterSize={20}
          buttonStyle={{}}
          buttonWrapStyle={{ marginLeft: widthPercentage(5) }}
        />
        <RadioButtonLabel
          obj={Talk.Reasons[index]}
          index={index}
          labelHorizontal={true}
          onPress={this.onCancelReasonSelected.bind(this)}
          labelStyle={{ fontSize: 20, color: 'white' }}
          labelWrapStyle={{}}
        />
      </RadioButton>
    )
  }

  /**
   * 取消订单需要渲染的内容
   */
  cancelScreen() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text style={{
          color: 'gray',
          fontSize: 18,
        }}>超过两分钟取消订单收费3元</Text>
        <Text style={{
          color: 'gray',
          fontSize: 18,
          marginBottom: 10,
          marginTop: 10,
        }}>取消原因：</Text>
        <View style={{
          flex: 1,
          marginBottom: 20,
        }}>
          <RadioForm
            animation={true}>
            {Talk.Reasons.map((item) => {
              return this.getRadio(item.value)
            })}
          </RadioForm>
        </View>
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('Home'); // 这是可以传参数的。
        }}>
          <Image source={require('../home/order/confirmButton.png')}
            style={{
              height: heightPercentage(8),
              resizeMode: 'contain',
            }} />
        </TouchableOpacity>
      </View>
    )
  }

  onSend(messages = []) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }

  /**
   * 聊天需要渲染的内容
   */
  chatScreen() {
    return (
      <View>
        {/* ---- 聊天内容 ---- */}
        <View style={{
          flex: 5,
          height: heightPercentage(46),
        }}>
          <GiftedChat
            messages={this.state.messages}
            onSend={this.onSend.bind(this)}
            user={{
              _id: 1,
            }}
          />
        </View>
      </View>
    )
  }

  switchScreen() {
    if (this.state.screenName === 'chat') {
      return this.chatScreen();
    } else if (this.state.screenName === 'cancelOrder') {
      return this.cancelScreen();
    }
  }

  render() {
    let styles = StyleSheet.create({
      footerTabText: {
        color: 'white',
      },
      footerTabIcon: {
        color: 'white',
      }
    });
    return (
      <ScrollView scrollEnabled={false}>
        <Container>
          <Image source={require('./background.png')}
            style={{
              flex: 1,
              resizeMode: 'stretch',
              width: viewportWidth
            }}>
            <Content>
              <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}>
                {/*  ---  top tabs --- */}
                <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  height: heightPercentage(10),
                }}>
                  <TouchableOpacity onPress={
                    () => {this.props.navigation.navigate('Home');}
                  }>
                    <Image style={{
                      resizeMode: 'contain',
                      width: widthPercentage(45),
                    }}
                      source={require('./backButton.png')} />
                  </TouchableOpacity>
                </View>

                {/*  ---- 员工信息 ----- */}
                <View style={{
                  flex: 4,
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 15,
                }}>
                  <View style={{
                    flex: 4,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: heightPercentage(11),
                  }}>
                    <View style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                      <Image source={require('../home/order/headIcon.png')}
                        style={{
                          flex: 1,
                          resizeMode: 'contain',
                          height: heightPercentage(10),
                        }} />

                      <View style={{
                        flex: 1,
                      }}>
                        <Text style={{
                          color: 'white',
                          fontSize: 20,
                        }}>{WorkerInfo.name}</Text>
                        <Text style={{
                          color: 'white',
                        }}>{WorkerInfo.describe}</Text>
                      </View>
                    </View>

                    <View style={{
                      flex: 1,
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}>
                      <Text style={{
                        color: 'white',
                      }}>{WorkerInfo.age} , {WorkerInfo.job}</Text>
                      <Text style={{
                        color: 'white',
                      }}>{WorkerInfo.interest.map((item) => {
                        return item + '  ';
                      })}</Text>
                      <Text style={{
                        color: 'white',
                      }}>已完成{WorkerInfo.finishedOrder}单</Text>
                    </View>
                  </View>

                  {/*  --- 回话和取消订单按钮 ---*/}
                  <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                    <Image style={{
                      resizeMode: 'contain',
                      width: widthPercentage(40),
                      marginRight: widthPercentage(5),
                    }} source={require('./talkButton.png')} />
                    <TouchableOpacity onPress={() => {
                      let upperThis = this;
                      Alert.alert('提醒', '确认是否取消订单', [{
                        text: '取消', onPress: () => {
                          console.log('不取消订单');
                        }
                      }, {
                        text: '确定', onPress: () => {
                          upperThis.setState({ screenName: 'cancelOrder' })
                        }
                      }]);
                    }}>
                      <Image style={{
                        resizeMode: 'contain',
                        width: widthPercentage(40),
                        marginLeft: widthPercentage(5),
                      }} source={require('./cancelOrder.png')} />
                    </TouchableOpacity>
                  </View>
                </View>
                {this.switchScreen()}
              </View>
            </Content>

            <Footer>
              <FooterTab style={{
                backgroundColor: '#ff9972'
              }}>
                <Button>
                  <Icon style={{ color: 'white' }}
                    name="ios-alert-outline" />
                  <Text style={styles.footerTabText}>
                    投诉
                  </Text>
                </Button>
                <Button>
                  <Icon style={{ color: 'white' }}
                    name="ios-mic-outline" />
                  <Text style={styles.footerTabText}>
                    语音通话
                  </Text>
                </Button>
                <Button>
                  <Icon style={{ color: 'white' }}
                    name="ios-videocam-outline" />
                  <Text style={styles.footerTabText}>
                    视频通话
                  </Text>
                </Button>
              </FooterTab>
            </Footer>
          </Image>
        </Container>
      </ScrollView>
    )
  }
}