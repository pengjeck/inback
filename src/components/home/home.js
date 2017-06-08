import {
  View,
  Alert,
  Text,
  StyleSheet,
  Image
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

import Address from './address/address'
import Project from './project/project'
import Insurance from './insurance/insurance'
import Order from './order/order'
/**
 * 场景配置
 */
class Screen {
  static address = 'address';
  static project = 'project';
  static insurance = 'insurance';
  static order = 'order';

  static GetScreenName = (index) => {
    let names = [
      'address',
      'project',
      'insurance',
      'order'
    ];
    return names[index]
  }
}

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenName: Screen.address
    }
  }

  switchScreen(index) {
    this.setState({ screenName: Screen.GetScreenName(index) })
  }

  /**
   * 是否是激活的标签
   * @param {*string} screenName 
   */
  isActive(screenName) {
    return this.state.screenName === screenName
  }

  render() {
    let styles = StyleSheet.create({
      background: {
        height: viewportHeight,
        width: viewportWidth,
      },
      container: {
        height: viewportHeight,
        width: viewportWidth,
      },
      footerTabText: {
        color: 'white',
      },
      footerTabIcon: {
        color: 'white',
      }
    });
    let MainContent = null;
    if (this.state.screenName === Screen.address) {
      MainContent = Address;
    } else if (this.state.screenName === Screen.project) {
      MainContent = Project;
    } else if (this.state.screenName === Screen.insurance) {
      MainContent = Insurance;
    } else if (this.state.screenName === Screen.order) {
      MainContent = Order;
    } else {
      MainContent = Address;
    }
    return (
      <Container style={{
        height: viewportHeight,
        width: viewportWidth,
        flex: 1,
      }}>
        <Content>
          <MainContent />
        </Content>
        {/*  ------ 底部一栏  -------*/}
        <Footer>
          <FooterTab
            style={{
              backgroundColor: '#ff9972',
            }}>
            <Button
              onPress={() => this.setState({ screenName: Screen.address })}
              active={this.isActive(Screen.address)}>
              <Icon
                active={this.isActive(Screen.address)}
                name="ios-time-outline"/>
              <Text style={styles.footerTabText}>
                地点
              </Text>
            </Button>
            <Button
              onPress={() => this.setState({ screenName: Screen.project })}
              active={this.isActive(Screen.project)}>
              <Icon
                active={this.isActive(Screen.project)}
                name="ios-transgender-outline" />
              <Text
                style={styles.footerTabText}>
                项目
              </Text>
            </Button>
            <Button
              onPress={() => this.setState({ screenName: Screen.insurance })}
              active={this.isActive(Screen.insurance)}>
              <Icon
                active={this.isActive(Screen.insurance)}
                name="ios-contact-outline"/>
              <Text style={styles.footerTabText}>
                保险
              </Text>
            </Button>
            <Button
              onPress={() => this.setState({ screenName: Screen.order })}
              active={this.isActive(Screen.order)}>
              <Icon
                active={this.isActive(Screen.order)}
                name="ios-bulb-outline" />
              <Text style={styles.footerTabText}>
                下单
              </Text>
            </Button>
          </FooterTab>
        </Footer>

      </Container>

    )
  }
}