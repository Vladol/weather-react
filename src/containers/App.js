// @flow
import React, { Component } from 'react';
import './App.scss'; //todo make normal scss style
import { connect } from "react-redux";
import { weatherFetchData, weatherLocation } from "../actions/weather";
import Search from '../components/Search';
import Weather from '../components/Weather';

const API_FETCH_URL = '/api/muggers';

class App extends Component {

    componentDidMount() {
        this.props.fetchData(API_FETCH_URL);
    }

    handleSearchSubmit = (location) => {
        console.log('--app--', location);
            this.props.changeLocation(location);
    }

    render() {
        return (
            <div className="App">
            <header className="App-header">
                <Search location={this.props.location}  handleSearchSubmit={this.handleSearchSubmit} />
            </header>
             <content>
                 <Weather dataWeather={this.props.weather}/>
             </content>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        location: state.weather,
        weather: state.weather
    };
};

const mapDispatchToProps = dispatch => {
    return {
            fetchData: url => dispatch(weatherFetchData(url)),
            changeLocation: location => dispatch(weatherLocation(location))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);