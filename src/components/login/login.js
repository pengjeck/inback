/**
 * Created by pj on 17-6-5.
 */

import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native'
import React, { Component } from 'react'
import {
  Container,
  Content,
  Item,
  Input,
  Icon,
} from 'native-base';

import {
  viewportHeight,
  viewportWidth,
  widthPercentage,
  heightPercentage
} from '../basic'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNum: '13006305269',
      password: '1234',
    };
  }

  login() {
    if (this.state.phoneNum === '13006305269' &&
      this.state.password === '1234') {
      this.props.navigation.navigate('Home');
    } else {
      ToastAndroid.show('用户名或密码错误',
        ToastAndroid.SHORT,
        ToastAndroid.TOP);
      return;
    }
  }

  render() {
    return (
      <View>
        <Image style={styles.background}
          source={require('./images/background.png')}>
          <View style={styles.container}>
            <View style={styles.form}>
              <Container>
                <Content>
                  <Item style={{
                    marginLeft: widthPercentage(5),
                    marginRight: widthPercentage(5),
                  }}>
                    <Icon name="home"
                      style={{ color: 'white' }} />
                    <Input
                      onChangeText={
                        (phoneNum) => {
                          this.setState({ phoneNum });
                        }
                      }
                      placeholder="手机号" placeholderTextColor='white' />
                  </Item>

                  <Item style={{
                    marginLeft: widthPercentage(5),
                    marginRight: widthPercentage(5),
                  }}>
                    <Icon name="md-key"
                      style={{ color: 'white' }} />
                    <Input
                      onChangeText={(password) => {
                        this.setState({ password });
                        console.log(text)
                      }}
                      placeholder="密码" placeholderTextColor='white' />
                  </Item>
                  <TouchableOpacity onPress={this.login.bind(this)}
                    style={styles.loginButton}>
                    <Image style={styles.loginButtonImage}
                      source={require('./images/loginButton.png')} />
                  </TouchableOpacity>
                </Content>
              </Container>
            </View>
          </View>
        </Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    width: viewportWidth,
    height: viewportHeight
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    // width: widthPercentage(96)
  },
  form: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: heightPercentage(54)
  },
  bottom: {
    flex: 1,
  },

  // region >>>>>>> elements >>>>>>>
  loginButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginButtonImage: {
    flex: 1,
    resizeMode: 'contain',
    height: heightPercentage(8),
    width: widthPercentage(80),
  }
  // endregion <<<<<<<< elements <<<<<<
});