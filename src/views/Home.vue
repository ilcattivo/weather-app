<template>
  <div class="app">
    <h1 class="app__header">Weather Online</h1>
    <WeatherForm :page="'home'" />
    <div class="app__card-list">
      <h3 class="app__subheader">Searching History</h3>
      <div class="btn-group app__buttons" role="group" aria-label="Basic example">
        <button @click="setSort('dt')" type="button" class="btn btn-secondary">Latest</button>
        <button @click="setSort('temp')" type="button" class="btn btn-secondary">Highest &#176;C</button>
        <button @click="setSort('name')" type="button" class="btn btn-secondary">Name</button>
      </div>
      <CardList :list="getWeatherList()" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import WeatherForm from '../components/WeatherForm';
import CardList from '../components/CardList';

export default {
  name: 'App',
  data() {
    return {
      sortWeatherBy: 'name'
    }
  },
  components: {
    WeatherForm,
    CardList
  },
  methods: {
    getWeatherList() {
      return this.getSortedWeatherHistory(this.sortWeatherBy);
    },
    setSort(sortBy) {
      this.sortWeatherBy = sortBy;
    }
  },
  computed: mapGetters(['getSortedWeatherHistory']),
  mounted() {
    // console.log(this.getWeatherList())
  }
}
</script>

<style lang="scss">
.app {
  width: 400px;
  margin: 0 auto;
  margin-top: 100px;

  &__header {
    font-size: 1.6rem;
    text-align: center;
    margin-bottom: 20px;
  }

  &__subheader {
    font-size: 1.3rem;
    margin-bottom: 10px;
  }

  &__buttons {
    margin-bottom: 10px;
  }
}
</style>
