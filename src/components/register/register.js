/**
 * Created by pj on 17-6-5.
 */

import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import {
  Input,
  Text,
  Button,
  Container,
  Content,
} from 'native-base'

import React, {
  Component
} from 'react'

import {
  viewportHeight,
  viewportWidth,
  widthPercentage,
  heightPercentage
} from '../basic'


export default class Register extends Component {
  render() {
    return (
      <View>
        <Image style={styles.background}
               source={require('./images/background.png')}>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => {
                this.props.navigation.navigate('AdultInfo')
              }}>
              <Image style={styles.imageButton}
                     source={require('./images/adultInfo.png')}>
              </Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.card}
              onPress={() => {
                this.props.navigation.navigate('ChildInfo')
              }}>
              <Image style={styles.imageButton}
                     source={require('./images/childInfo.png')}>
              </Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.card}
              onPress={() => {
                this.props.navigation.navigate('AccountInfo')
              }}>
              <Image style={styles.imageButton}
                     source={require('./images/accountInfo.png')}>
              </Image>
            </TouchableOpacity>
            <View style={{
              flex: 1,
              flexDirection: 'row',
            }}/>
            <TouchableOpacity
              style={styles.card}
              onPress={() => {
              }}>
              <Image style={[styles.imageButton]}
                     source={require('./images/finishButton.png')}>
              </Image>
            </TouchableOpacity>
          </View>
        </Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    // flex: 1,
    width: viewportWidth,
    height: viewportHeight
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: heightPercentage(30),
    marginBottom: heightPercentage(15)
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imageButton: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    height: heightPercentage(10),
  }
});