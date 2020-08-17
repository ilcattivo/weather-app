import Vue from 'vue';
import Vuex from 'vuex';
import weather from './weather';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    weather,
  },
});

export default store;