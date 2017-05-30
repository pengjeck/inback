/**
 * Created by pj on 17-5-21.
 */

import React, {Component} from 'react';
import allReducers from './countReducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Counter from './counter.js';
const store = createStore(allReducers);
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Counter />
            </Provider>
        );
    }
}
