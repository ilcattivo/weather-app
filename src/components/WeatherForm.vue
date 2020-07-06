<template>
  <form @submit.prevent="handleSubmit">
      <div class="form-group row">
        <div class="col-10">
          <input
            type="text"
            class="form-control"
            :class="{ 'is-invalid': error }"
            v-model="city"
          />
          <div v-if="error" class="invalid-feedback">
            Please provide a valid city.
          </div>
        </div>
        <div class="col-2">
          <button type="submit" class="btn btn-primary">Search</button>
        </div>
      </div>
    </form>
</template>

<script>
export default {
  props: ['page'],
  data() {
    return {
      city: ''
    }
  },
  methods: {
    async handleSubmit() {
      await this.$store.dispatch('fetchNewWeather', this.city);
      if (!this.error) {
        this.$router.push(`/weather/${this.city}`);
      }
      this.city = '';
    }
  },
  computed: {
    error() {
      return this.$store.state.weatherError;
    }
  }
}
</script>

<style>

</style>