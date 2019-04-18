// @flow
import React, { Component} from 'react';
import './Weather.scss';
import NoFound from './NoFound';

export default class Weather extends Component {

    render() {
        const { infoWeather } = this.props;
        return infoWeather? (
                <div id="weather-widget" className="weather-widget"><h2 className="weather-widget__city-name">Weather in {infoWeather.name} {infoWeather.sys.country}</h2>
                    <h3 className="weather-widget__temperature">
                    <img className="weather-widget__img" src={'http://openweathermap.org/img/w/'+infoWeather.weather[0].icon+'.png'} width="50" height="50" alt={infoWeather.name}/>{Math.round(infoWeather.main.temp)} °C</h3>
                    <table className="weather-widget__items">
                        <tbody>
                        <tr className="weather-widget__item">
                            <td>Wind</td>
                            <td id="weather-widget-wind">
                                {infoWeather.wind.speed} m/s
                            </td>
                        </tr>
                        <tr className="weather-widget__item">
                            <td>Cloudiness</td>
                            <td id="weather-widget-cloudiness">{infoWeather.weather[0].description}</td>
                        </tr>
                        <tr className="weather-widget__item">
                            <td>Pressure</td>
                            <td>{infoWeather.main.pressure} hpa</td>
                        </tr>
                        <tr className="weather-widget__item">
                            <td>Humidity</td>
                            <td>{infoWeather.main.humidity} %</td>
                        </tr>
                        <tr className="weather-widget__item">
                            <td>Geo coords</td>
                            <td>[
                                <span id="wrong-data-lat">{infoWeather.coord.lat}</span>,
                                <span id="wrong-data-lon">{infoWeather.coord.lon}</span>
                                ]
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
        ) : (<NoFound />);
    }
}