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
import RegisterRoot from './registerRouter'

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
    RegisterRoot: {
      screen: RegisterRoot,
    }
  },
  {
    navigationOptions: {
      header: null
    }
  }
);
