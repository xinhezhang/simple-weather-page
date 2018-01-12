import React, { Component } from 'react';

import '../style/style.css'

import Header from './header';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <h3 className="App-intro">Find five-day forecast in your city</h3>
                <SearchBar />
                <WeatherList />
            </div>
        );
    }
}

