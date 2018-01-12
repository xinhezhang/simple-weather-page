import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
        };
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(event) {
        this.setState({
            term: event.target.value,
        });
    }
    onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            // "form" will auto send html request to backend
            // by using "onFormSubmit" to prevent auto loading
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Find five-day forecast in your city"
                    className="form-control"
                    value={this.state.form}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        );
    }
}