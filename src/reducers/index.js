/**
 * 주요역할 : combineReducers 로 리듀서들의 이름을 선언.
 */

import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
