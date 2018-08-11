/**
 * 리듀서 : 어플리케이션 스테이트를 관리
 * state 초기화 : 함수의 첫번째 인자부분에서 초기화.
 */
import {FETCH_WEATHER} from "../actions";


export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            // 새 도시를 검색하면 기존 도시(목록) 대체하는게 아니고 기존 도시리스트에 새 도시를 추가한다.
            // return state.push(action.payload.data);          // 잘못된 사용. this.state.xx = 'yyy' 처럼 state 를 직접 변형하면 안된다.
            // return state.concat( [action.payload.data] );    // 올바른 사용. state 변형은 안되므로, 새로운 state 인스턴스를 반환한다.
            return [ action.payload.data, ...state ];           // 위와 동일한 ES6 구문.  "...배열" 의 의미는 배열에 모든값을 가져와서 추가하는것. 새 data 가 앞쪽에 온다는걸 한눈에 알수있다.

    }
    return state;
}