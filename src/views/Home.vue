<template>
  <div class="app">
    <h1 class="app__header">Weather Online</h1>
    <WeatherForm :page="'home'" />
    <div class="app__card-list">
      <h3 class="app__subheader">Searching History</h3>
      <CardList :list="weatherHistory" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import WeatherForm from '../components/WeatherForm';
import CardList from '../components/CardList';

export default {
  name: 'App',
  components: {
    WeatherForm,
    CardList
  },
  computed: mapState(['weatherHistory'])
}
</script>

<style>
.app {
  width: 400px;
  margin: 0 auto;
  margin-top: 100px;
}
.app__header {
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 20px;
}
.app__subheader {
  font-size: 1.3rem;
  margin-bottom: 10px;
}
</style>
