/**
 * Created by pj on 17-6-5.
 */
import {} from 'react-native'
import {
  TabNavigator,
  StackNavigator,
  StackRouter
} from 'react-navigation'
import React, {Component} from 'react'

import InitScreen from '../components/initScreen/initScreen'
import Catalog from '../components/catalog/catalog'
import Login from '../components/login/login'
import Register from '../components/register/register'
import AdultInfo from '../components/register/adultInfo/adultInfo'
import ChildInfo from '../components/register/childInfo/childInfo'
import AccountInfo from '../components/register/accountInfo/accountInfo'
export const Root = StackNavigator(
  {
    InitScreen: {
      screen: InitScreen,
    },
    Catalog: {
      screen: Catalog,
    },
    Login: {
      screen: Login,
    },
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
    initialRouteName: 'InitScreen',
    navigationOptions: {
      header: null
    }
  }
);
