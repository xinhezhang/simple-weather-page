import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
    //console.log('Action received ', action);
    switch (action.type) {
        case FETCH_WEATHER:
            // Using "concat" instead of "push/append" since it create a new array instead of edit original array,
            // which should NEVER happen, since we do NOT change state directly (like using this.setState()).
            // This rule applies for both Redux and React!!!
            //return state.concat([ action.payload.data ]);
            
            // same as above, using spread operator
            return [ action.payload.data, ...state ];
        default:
            return state;
    }
}