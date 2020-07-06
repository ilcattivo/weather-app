import Vue from 'vue';
import Vuex from 'vuex';
import WeatherService from '../services/WeatherService';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    weatherHistory: [],
    cityWeather: null,
    error: false
  },
  mutations: {
    ADD_TO_HISTORY(state, weather) {
      state.weatherHistory.unshift(weather);
    },
    SET_CITY_WEATHER(state, weather) {
      state.cityWeather = weather;
    },
    SET_ERROR(state) {
      state.error = true;
    },
    SET_SUCCESS(state) {
      state.error = false;
    }
  },
  actions: {
    async fetchNewWeather({ commit, state }, city) {
      const weather = await WeatherService.fetchWeather(city);
      if (weather.cod === 200) {
        commit('SET_CITY_WEATHER', weather);
        commit('SET_SUCCESS');
        if (state.weatherHistory[0]?.id !== weather.id) {
          commit('ADD_TO_HISTORY', weather);
        }
      } else {
        commit('SET_ERROR');
      }
    }
  }
})

export default store;