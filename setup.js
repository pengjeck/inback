/**
 * Created by pj on 17-5-21.
 */
import React, {Component} from 'react';
// import StartSlides from './src/components/StartSlides';
import Open from './src/components/open/open';
export default class setup extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Open/>
    )
  }
}