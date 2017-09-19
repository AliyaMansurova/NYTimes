import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Weather.less';
import { getWeather } from '../../reducers/weather';


export const mapStateToProps = (state) => ({
  weather: state.weather,
});

export const mapDispatchToProps = (dispatch) => ({
  getWeather() {
    dispatch(
        getWeather()
    );
  },
});

class WeatherWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.getWeather();
    setInterval(this.props.getWeather, this.props.pollInterval);
  }
  render() {
    const weather = this.props.weather;
    return  <div className="weather">
      <h className="city" > {weather.city} | </h>
      <img className="icon" src={`http://openweathermap.org/img/w/${weather.icon}.png`} />
      <div>{parseInt(weather.temp-273.17)+'°C |'}</div>
      <div>{weather.currDate}</div>
    </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherWidget);