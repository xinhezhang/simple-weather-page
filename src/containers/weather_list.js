import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        //console.log(name);
        const temp = cityData.list.map((weather) => weather.main.temp);
        //console.log(temp);
        const pressure = cityData.list.map((weather) => weather.main.pressure);
        //console.log(pressure);
        const humidity = cityData.list.map((weather) => weather.main.humidity);
        //console.log(humidity);

        return (
            <tr key={cityData.city.id}>
                <td>{name}</td>
                <td><Chart data={temp} color="orange" /></td>
                <td><Chart data={pressure} color="green" /></td>
                <td><Chart data={humidity} color="blue" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
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