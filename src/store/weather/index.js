import WeatherService from '../../services/WeatherService';

export default {
  state: {
    weatherHistory: [],
    cityWeather: null,
    weatherError: false
  },
  mutations: {
    ADD_TO_HISTORY(state, weather) {
      state.weatherHistory.unshift(weather);
    },
    SET_CITY_WEATHER(state, weather) {
      state.cityWeather = weather;
    },
    SET_WEATHER_ERROR(state) {
      state.weatherError = true;
    },
    SET_WEATHER_SUCCESS(state) {
      state.weatherError = false;
    }
  },
  actions: {
    async fetchNewWeather({ commit, state }, city) {
      const weather = await WeatherService.fetchWeather(city);
      if (weather.cod === 200) {
        commit('SET_CITY_WEATHER', weather);
        commit('SET_WEATHER_SUCCESS');
        if (state.weatherHistory[0]?.id !== weather.id) {
          commit('ADD_TO_HISTORY', weather);
        }
      } else {
        commit('SET_WEATHER_ERROR');
      }
    }
  },
  getters: {
    getSortedWeatherHistory: state => field => {
      // name in ascending order, other in descending
      if (field === 'name') {
        return state.weatherHistory;
      }
      return state.weatherHistory.slice().sort((weatherA, weatherB) => {
        return weatherA[field] < weatherB[field] ? 1 : -1;
      })
    },
    cityWeather: state => state.cityWeather
  }
}