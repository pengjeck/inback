/**
 * Created by pj on 17-6-5.
 */

import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import React, {Component} from 'react'
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
      phoneNum: null,
      password: null
    };
  }

  login() {
    console.log(this.state.phoneNum + ":" + this.state.password);
    if (this.state.phoneNum === '13006305269' &&
    this.state.password === '123') {
      // TODO: 跳转到哪里？
      this.props.navigation.navigate('')
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
                  <Item>
                    <Icon name="home"/>
                    <Input
                      onChangeText={
                        (text) => {
                          this.setState((pre, props) => {
                            return {phoneNum: text}
                          });
                          console.log(text);
                        }
                      }
                      value={this.state.phoneNum}
                      placeholder="手机号"/>
                  </Item>

                  <Item style={{flex: 1}}>
                    <Icon name="md-key"/>
                    <Input
                      onChangeText={(text) => {
                        this.setState((pre, props) => {
                          return {password: text}
                        });
                        console.log(text)
                      }}
                      placeholder="密码"/>
                  </Item>
                  <TouchableOpacity onPress={this.login.bind(this)}
                                    style={styles.loginButton}>
                    <Image style={styles.loginButtonImage}
                           source={require('./images/loginButton.png')}/>
                  </TouchableOpacity>
                </Content>
              </Container>
            </View>
            <View style={{}}>
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
    height: heightPercentage(10),
    width: widthPercentage(80),
  }

  // endregion <<<<<<<< elements <<<<<<
});