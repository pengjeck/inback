import {
  View,
  Alert,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
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

export default class Talk extends Component {
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
                <TouchableOpacity>
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

                  <Image style={{
                    resizeMode: 'contain',
                    width: widthPercentage(40),
                    marginLeft: widthPercentage(5),
                  }} source={require('./cancelOrder.png')} />
                </View>
              </View>

              {/* ---- 聊天内容 ---- */}
              <View style={{
                flex: 4,
                height: heightPercentage(46),
              }}>
              </View>

              <View style={{
                height: heightPercentage(7),
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f9f9f9'
              }}>
                <Icon name='ios-volume-up-outline'
                  style={{
                    color: 'gray',
                    marginLeft: 5,
                    marginRight: 5,
                  }} />
                <Item rounded style={{
                  height: heightPercentage(5),
                  flex: 1,
                }}>
                  <Input placeholder='' />
                </Item>
                <Icon name='ios-happy-outline'
                  style={{
                    color: 'gray',
                    marginLeft: 5,
                  }} />
                <Icon name='md-add'
                  style={{
                    color: 'gray',
                    marginLeft: 5,
                    marginRight: 5,
                  }} />
              </View>
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
    )
  }
}