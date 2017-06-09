import {
  View,
  Image,
  StyleSheet,
  Alert,
  ToastAndroid,
} from 'react-native'

import {
  Item,
  Icon,
  Input
} from 'native-base'

import React, {
  Component,
} from 'react'

import {
  viewportHeight,
  viewportWidth,
  heightPercentage,
  widthPercentage
} from '../../basic.js'

import {
  MapView,
  MapTypes,
  MapModule,
  Geolocation
} from 'react-native-baidu-map'

import Dimensions from 'Dimensions';


export default class Address extends Component {
  constructor(props) {
    super(props);

    this.state = {
      center: {
        longitude: 114.368134,
        latitude: 30.547663
      },
      trafficEnabled: false,
      baiduHeatMapEnabled: false,
      markders: [
        {
          longitude: 114.368134,
          latitude: 30.547663,
          title: '您当前的位置'
        }
      ],
      inAddress: {
        latitude: 0,
        longitude: 0,
        title: '接孩子的地址'
      },
      outAddress: {
        latitude: 0,
        longitude: 0,
        title: '送孩子的地址'
      },
      yourAddress: {
        latitude: 0,
        longitude: 0,
        title: '您当前的位置'
      }
    };
  }

  inAddress = (text) => {
    let out = Geolocation.geocode('武汉', text);
    try {
      this.setState({
        center: {
          longitude: out.longitude,
          latitude: out.latitude
        }
      });
      this.setState({
        inAddress: {
          longitude: out.longitude,
          latitude: out.latitude,
          title: '接小孩的地址'
        }
      })
    } catch (err) {
      console.log(err);
    }
  }

  outAddress = (text) => {
    let out = Geolocation.geocode('武汉', text);
    console.log(out);
    ToastAndroid.show(JSON.stringify(out), ToastAndroid.SHORT);
    try {
      this.setState({
        center: {
          longitude: out.longitude,
          latitude: out.latitude
        }
      });
      this.setState({
        inAddress: {
          longitude: out.longitude,
          latitude: out.latitude,
          title: '送小孩的地址'
        }
      })
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const styles = StyleSheet.create({
      row: {
        flexDirection: 'row',
        height: 40
      },
      container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      map: {
        width: viewportWidth,
        height: heightPercentage(74),
      }
    });

    return (
      <View style={{
        flex: 1,
      }}>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          {/* 顶部输入框 */}
          <Image source={require('./out.png')}
            style={{
              flex: 1,
              height: heightPercentage(13),
              resizeMode: 'stretch',
            }}>
            <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Item rounded
                style={{
                  width: widthPercentage(90),
                  borderColor: 'transparent',
                  backgroundColor: 'white'
                }} >
                <Icon name='ios-swap-outline'
                  style={{ color: 'gray' }} />
                <Input
                  onEndEditing={this.inAddress}
                  style={{
                    height: 35,
                    fontSize: 12.5,
                  }}
                  placeholder='输入接孩子地址'
                  placeholderTextColor='gray' />
              </Item>
              <Item rounded
                style={{
                  width: widthPercentage(90),
                  marginLeft: widthPercentage(5),
                  marginRight: widthPercentage(5),
                  marginTop: 3,
                  borderColor: 'transparent',
                  backgroundColor: 'white',
                }}>
                <Input
                  onEndEditing={this.outAddress}
                  style={{
                    height: 35,
                    fontSize: 12
                  }}
                  placeholder='输入送孩子地址'
                  placeholderTextColor='gray'
                />
                <Icon name='ios-swap-outline'
                  style={{ color: 'gray' }} />
              </Item>
            </View>
          </Image>

          <MapView
            trafficEnabled={false}
            baiduHeatMapEnabled={false}
            zoom={15}
            mapType={MapTypes.NORMAL}
            center={this.state.center}
            markder={this.state.markder}
            markers={this.state.markders}
            style={styles.map}>
          </MapView>
        </View>
      </View >
    )
  }
}