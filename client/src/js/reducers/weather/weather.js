import axios from 'axios';
import moment from 'moment';
// ------------------- ACTION TYPES ---------------

export const GET_WEATHER_SUCCESS= 'GET_WEATHER_SUCCESS';
export const GET_WEATHER_FAILURE = 'GET_WEATHER_FAILURE';
// ------------------ END ACTION TYPES -------------

// ------------------ TYPES -----------------

const defaultState = {
  city: '',
  temp: '',
  icon: '',
  currDate: '',
  error: ''
};

// ------------ ACTION CREATORS --------------
export const getWeather = () => {
  let url='http://api.openweathermap.org/data/2.5/weather?id=498817&APPID=7f59782a8695d2c8a8b4ef2a2b88b826';
  return (dispatch) =>
  axios.get(url)
      .then((response) => {
        dispatch({
          type: GET_WEATHER_SUCCESS,
          data: response.data
        });
      })
      .catch(function (error) {
        dispatch({type: GET_WEATHER_FAILURE, error})
      });
}

// ------------ END ACTION CREATORS --------------

// ------------- REDUCER ----------------

const weather = (state = defaultState, action) => {
  switch (action.type) {
    case GET_WEATHER_SUCCESS:
      return {
        city: action.data.name,
        temp: action.data.main.temp,
        icon: action.data.weather[0].icon,
        currDate: moment().add(365, 'day').format('LL'),
        error: ''
      };

    case GET_WEATHER_FAILURE:
      return {
        city:'',
        temp: '',
        icon:'',
        currDate: '',
        error: action.error.message
      };

    default:
      return state;
  }
};
// ------------- END REDUCER ----------------

export default weather;
