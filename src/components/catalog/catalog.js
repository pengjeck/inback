/**
 * Created by pj on 17-6-2.
 */
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native'
import React, {Component} from 'react'
import {
  viewportWidth,
  viewportHeight,
  widthPercentage,
  heightPercentage
} from '../basic'

/**
 *

 */

export default class Catalog extends Component {
  register() {
    this.props.navigation.navigate('Register')
  }

  login() {
    console.log('pressed');
    this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <View style={styles.pack}>
        <Image
          style={styles.background}
          source={require('./images/background.png')}>
          <View style={styles.container}>
            <View style={styles.rowFirst}>
              <Image style={styles.b1WhatsInBack}
                     source={require('./images/1.png')}/>
            </View>
            <View style={styles.rowSecond}>
              <Image style={styles.b2Know }
                     source={require('./images/2.png')}>
              </Image>
              <Image style={styles.b3Recall}
                     source={require('./images/3.png')}/>
            </View>
            <View style={styles.rowThird}>
              <Image style={styles.b4Gossip }
                     source={require('./images/4.png')}>
              </Image>
              <Image style={styles.b5Heart}
                     source={require('./images/5.png')}/>
            </View>

            <View style={styles.rowFourth}>
              <TouchableOpacity style={styles.bRegister}
                                onPress={this.register.bind(this)}>
                <Image style={styles.bRegister}
                       source={require('./images/7.png')}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bLogin}
                                onPress={this.login.bind(this)}>
                <Image style={styles.bLogin}
                       source={require('./images/6.png')}/>
              </TouchableOpacity>
            </View>
          </View>
        </Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  pack: {
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: viewportWidth,
    height: viewportHeight,
    // marginLeft: widthPercentage(1),
    // marginRight: widthPercentage(1)
  },
  background: {
    width: viewportWidth,
    height: viewportHeight
  },
  rowFirst: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: heightPercentage(8),
    marginBottom: heightPercentage(3),
  },
  rowSecond: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: heightPercentage(1),
  },
  rowThird: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rowFourth: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: heightPercentage(5),
  },
  // region >>>>>>>>>>>> buttons >>>>>>>>>
  bRegister: {
    flex: 1,
    resizeMode: 'contain',
    height: heightPercentage(7)
  },
  bLogin: {
    flex: 1,
    resizeMode: 'contain',
    height: heightPercentage(7)
  },
  b1WhatsInBack: {
    flex: 1,
    resizeMode: 'contain',
    height: heightPercentage(22)
  },
  b2Know: {
    flex: 1,
    resizeMode: 'contain',
    height: heightPercentage(20)
  },
  b3Recall: {
    flex: 1,
    resizeMode: 'contain',
    height: heightPercentage(20),
  },
  b4Gossip: {
    flex: 1,
    resizeMode: 'contain',
    height: heightPercentage(20),
  },
  b5Heart: {
    flex: 1,
    resizeMode: 'contain',
    height: heightPercentage(20),
  }
  // endregion <<<<<<<< buttons <<<<<<<<<
});