/**
 * Created by pj on 17-5-21.
 */
let count = 0;
export default function (state = count, action) {
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