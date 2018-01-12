import React, { Component } from 'react';

import '../style/style.css'

import Header from './header';
import SearchBar from '../containers/search_bar';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <SearchBar />
            </div>
        );
    }
}

