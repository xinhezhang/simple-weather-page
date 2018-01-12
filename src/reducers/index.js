import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

// global application state
const rootReducer = combineReducers({
    weather: WeatherReducer,
});

export default rootReducer;