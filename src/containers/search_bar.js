import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputChange(event) {
        this.setState({
            term: event.target.value,
        });
    }
    onFormSubmit(event) {
        // prevent html form auto loading
        event.preventDefault();
        // fetch weather data
        this.props.fetchWeather(this.state.term);
        // clear input
        this.setState({
            term: '',
        });
    }

    render() {
        return (
            // "form" will auto send html request to backend
            // by using "onFormSubmit" to prevent auto loading
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="City, Country"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

// "null" means in this case, we do NOT need to handle state
export default connect(null, mapDispatchToProps)(SearchBar);