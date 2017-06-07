/**
 * Created by pj on 17-6-5.
 */

import {} from 'react-native'
import {
  StackNavigator,
} from 'react-navigation'
import React, {Component} from 'react'

import Register from '../components/register/register'
import AdultInfo from '../components/register/adultInfo/adultInfo'
import ChildInfo from '../components/register/childInfo/childInfo'
import AccountInfo from '../components/register/accountInfo/accountInfo'

export default RegisterRoot = StackNavigator(
  {
    Register: {
      screen: Register,
    },
    AdultInfo: {
      screen: AdultInfo
    },
    ChildInfo: {
      screen: ChildInfo
    },
    AccountInfo: {
      screen: AccountInfo
    },
  },
  {
    initialRouteName: 'Register',
    navigationOptions: {
      header: null
    }
  }
);