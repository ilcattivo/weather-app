<template>
  <div class="card">
      <h3 class="card__header">Weather in {{ item.name }}</h3>
      <div>
          <p class="card__temp">Temp: {{ tempInCelsius }}&#176;C</p>
          <table class="card__table" border='1'>
              <tr>
                  <td>Pressure</td>
                  <td>{{ item.main.pressure }} hpa</td>
              </tr>
              <tr>
                  <td>Humidity</td>
                  <td>{{ item.main.humidity }} %</td>
              </tr>
                <tr>
                  <td>Sunrise</td>
                  <td>{{ sunrise }}</td>
              </tr>
                <tr>
                  <td>Sunset</td>
                  <td>{{ sunset }}</td>
              </tr>
          </table>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        item: {
            required: true,
            type: Object
        }
    },
    computed: {
        tempInCelsius() {
            const KALVIN_TO_CELSIUS = 273.15;
            return (this.item.main.temp - KALVIN_TO_CELSIUS).toFixed(1);
        },
        sunrise() {
            const time = new Date(this.item.sys.sunrise);
            return `${time.getHours()}:${time.getMinutes()}`;
        },
        sunset() {
            const time = new Date(this.item.sys.sunset);
            return `${time.getHours()}:${time.getMinutes()}`;
        }
    }
}
</script>

<style>
.card {
    padding: 10px;
}
.card__header {
    text-align: center;
}
.card__temp {
    text-align: center;
}
.card__table {
    border-collapse: collapse;
    width: 50%;
    margin: 0 auto;
}
</style>