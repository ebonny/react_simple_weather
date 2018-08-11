/**
 * Action Creator : 데이터를 가져와서 미들웨어나 리듀서로 보내기위한 Object 로 반환한다.
 * Object 의 키로 type 과 payload 를 가진다.
 */

import axios from 'axios';

const API_KEY = 'b4498ebce3d1d11f9e6c33c47eb777d8';

export const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URLL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export function fetchWeather(city) {
    const url = `${ROOT_URLL}&q=${city},us`;

    const request = axios.get(url);     // Promise 를 반환.

    console.log("Request:", request);

    return {
        type: FETCH_WEATHER,
        payload: request
        // 분명히 payload 로 Promise 객체를 반환하고 있다. 하지만 리덕스-프로미스(미들웨어)에 의해
        // ★ Promise 를 벗겨낸, request 의 응답값(data) 만이 리듀서로 전송된다.
        // 정확히는 request가 Promise 면 action 을 멈추고, Promise 가 resolve 될때까지 기다리고,
        //   그 다음것을 실행한다. resolve 된후 새 action 을 만들어서 resolve 된 data 가 리듀서로 자연스럽게 흘러가게 만든다.
    }
}