import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import _ from 'lodash';

class WeatherList extends Component {
    renderWeather(item) {
        const name = item.city.name;
        const temps = _.map(item.list.map(weather => weather.main.temp), temp => temp - 273);   // Kelvin -> C
        const pressures = item.list.map(weather => weather.main.pressure);
        const humidities = item.list.map(weather => weather.main.humidity);

        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Chart data={temps} color="orange" units="C"/>
                </td>
                <td>
                    <Chart data={pressures} color="blue" units="hPa" />
                </td>
                <td>
                    <Chart data={humidities} color="red" units="%" />
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <colgroup>
                    <col width="25%;"/>
                    <col width="25%;"/>
                    <col width="25%;"/>
                    <col width="25%;"/>
                </colgroup>
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temparature (C)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

/*
function mapStateToProps(state) {
    return { weather: state.weather };  // state.weather => combineReducers 에서 정의된 weather 를 state 에서 가져온다.
}
*/

// 위와 완전 동일.
function mapStateToProps({weather}) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);