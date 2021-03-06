import React, { Component } from 'react';
import { connect } from 'react-redux';
//import _ from 'lodash';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData) {
        //const name = cityData.city.name;
        //console.log(name);
        const temp = cityData.list.map((weather) => weather.main.temp);
        // convert
        //const temp = _.map(cityData.list.map((weather) => weather.main.temp), temp => temp - 273);
        //console.log(temp);
        const pressure = cityData.list.map((weather) => weather.main.pressure);
        //console.log(pressure);
        const humidity = cityData.list.map((weather) => weather.main.humidity);
        //console.log(humidity);

        // const lon = cityData.city.coords.lon;
        // const lat = cityData.city.coords.lat;
        const { lat, lon } = cityData.city.coord;

        return (
            <tr key={cityData.city.id}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temp} color="orange" units="C" /></td>
                <td><Chart data={pressure} color="green" units="hPa" /></td>
                <td><Chart data={humidity} color="blue" units="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
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

// function mapStateToProps(state) {
//     return {
//         weather: state.weather,
//     };
// }

// same as above, but simpler in ES6 syntax
function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);