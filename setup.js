/**
 * Created by pj on 17-5-21.
 */
import React, {Component} from 'react';
// import StartSlides from './src/components/StartSlides';
// import Open from './src/components/initScreen/initScreen';
// import SimpleStack from './src/components/tests/navigater'
// import ModalStack from './src/components/tests/ModalStack'
// import Test from './src/components/tests/nativeBase';
import {Root} from './src/config/router'
export default class setup extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Root />
    )
  }
}