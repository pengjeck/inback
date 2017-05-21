/**
 * Created by pj on 17-5-21.
 */

import {combineReducers} from 'redux';
import countReducer from './countReducer.js';
const allReducers = combineReducers({
    count: countReducer
});
export default allReducers;