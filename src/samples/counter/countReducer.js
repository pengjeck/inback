/**
 * Created by pj on 17-5-21.
 */
import {combineReducers} from 'redux'

let count = 0;
function countChange(state = count, action) {
    switch (action.type) {
        case "Increment":
            count++;
            break;
        case "Decrement":
            count--;
            break;
        default:
            break
    }
    return count;
}

export default combineReducers({
    count: countChange
})
