<template>
  <div class="app">
    <h1 class="app__header">Weather Online</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group row">
        <div class="col-10">
          <input
            type="text"
            class="form-control"
            :class="{ 'is-invalid' : !isCityValid }"
            v-model="city"
          />
          <div v-if="!isCityValid" class="invalid-feedback">
            Please provide a valid city.
          </div>
        </div>
        <div class="col-2">
          <button type="submit" class="btn btn-primary">Search</button>
        </div>
      </div>
    </form>
    <div class="app__card-list">
      <CardList :list="list" />
    </div>
  </div>
</template>

<script>
import CardList from './components/CardList';
export default {
  name: 'App',
  components: {
    CardList
  },
  data() {
    return {
      list: [],
      city: '',
      isCityValid: true
    }
  },
  methods: {
    handleSubmit() {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=ae022e0a1551eb3e2833113e3d2da947`)
        .then(response => response.json())
        .then(weather => {
          if (weather.cod === 200) {
            this.list.unshift(weather);
            this.city = '';
            this.isCityValid = true;
          } else {
            this.isCityValid = false;
          }
        })
        .catch(error => {
          console.log(error);
        })
    },
  }
}
</script>

<style>
.app {
  width: 500px;
  margin: 0 auto;
  margin-top: 100px;
}
.app__header {
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 20px;
}
</style>
