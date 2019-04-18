// @flow
import React, { Component } from 'react';
import './App.scss'; //todo make normal scss style
import { connect } from "react-redux";
import { weatherFetchData, weatherLocation } from "../actions/weather";
import Search from '../components/Search';
import Weather from '../components/Weather';

class App extends Component {

    componentDidMount() {
        this.props.fetchData('/weather?q='+this.props.weatherLocation);
    }

    handleSearchSubmit = (location) => {
            this.props.changeLocation(location);
            this.props.fetchData('/weather?q='+location);
    }

    render() {
        return (
            <div className="App">
            <header className="App-header">
                <Search location={this.props.weatherLocation}  handleSearchSubmit={this.handleSearchSubmit} />
            </header>
             <content>
                 <Weather infoWeather={this.props.weatherData} location={this.props.weatherLocation}/>
             </content>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        weatherLocation: state.weather.location,
        weatherData: state.weather.weatherData
    };
};

const mapDispatchToProps = dispatch => {
    return {
            fetchData: url => dispatch(weatherFetchData(url)),
            changeLocation: location => dispatch(weatherLocation(location))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);