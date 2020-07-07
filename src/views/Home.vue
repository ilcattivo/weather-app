<template>
  <div class="app">
    <h1 class="mb-4 app__header">Weather Online</h1>
    <WeatherForm :page="'home'" />
    <div class="app__card-list">
      <h3 class="mb-2 app__subheader">Sort by</h3>
      <div class="mb-2 btn-group" role="group" aria-label="Basic example">
        <button
          @click="setSort('dt')"
          type="button"
          class="btn btn-secondary"
        >
          Latest
        </button>
        <button
          @click="setSort('temp')"
          type="button"
          class="btn btn-secondary"
        >
          Highest &#176;C
        </button>
        <button
          @click="setSort('name')"
          type="button"
          class="btn btn-secondary"
        >
          Name
        </button>
      </div>
      <div class="mb-2 row">
        <div class="pr-0 col-5">
          <input
            type="text"
            class="form-control"
            placeholder="Enter city name"
            v-model="filterName"
          />
        </div>
        <div class="col-7">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button
              @click="setFilterTemp(-999)"
              type="button"
              class="btn btn-secondary"
            >
              All&#176;C
            </button>
            <button
              @click="setFilterTemp(30)"
              type="button"
              class="btn btn-secondary"
            >
              >30&#176;C
            </button>
            <button
              @click="setFilterTemp(20)"
              type="button"
              class="btn btn-secondary"
            >
              > 20&#176;C
            </button>
          </div>
        </div>
      </div>
      <CardList :list="filteredList" />
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
      sortWeatherBy: 'dt',
      filterName: '',
      filterTemp: -999
    }
  },
  components: {
    WeatherForm,
    CardList
  },
  methods: {
    getSortedWeatherList() {
      return this.getSortedWeatherHistory(this.sortWeatherBy);
    },
    setSort(sortBy) {
      this.sortWeatherBy = sortBy;
    },
    setFilterTemp(temp) {
      this.filterTemp = temp;
    },
    filterByName(arr) {
      return arr.filter(weather => {
        return weather.name.toLowerCase()
          .startsWith(this.filterName.toLowerCase());
      })
    },
    filterByTemp(arr) {
      return arr.filter(weather => {
        return weather.temp > (this.filterTemp + 273.15)
      })
    }
  },
  computed: {
    ...mapGetters(['getSortedWeatherHistory']),
    filteredList() {
      const { sortWeatherBy, filterByName, filterByTemp } = this;
      const weatherArr = this.getSortedWeatherHistory(sortWeatherBy);
      return filterByTemp(
        filterByName(weatherArr)
      );
    }
  }
}
</script>

<style lang="scss">
.app {
  width: 500px;
  margin: 0 auto;

  &__header {
    font-size: 1.6rem;
    text-align: center;
  }

  &__subheader {
    font-size: 1.3rem;
  }

  &__filter {
    width: 70%;
    margin: 0 auto;
    margin-bottom: 10px;
  }
}
</style>
