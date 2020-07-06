<template>
	<div class="city-weather">
		<p v-if="!isCityValid">City not found</p>
		<div v-else-if="!cityWeather">Loading...</div>
		<div v-else>
			<h3 class="city-weather__header">Weather in {{ cityWeather ? cityWeather.name : '' }}</h3>
			<p class="city-weather__temp">Temp: {{ tempInCelsius }}&#176;C</p>
			<table class="city-weather__table" border='1'>
				<tr>
					<td>Pressure</td>
					<td>{{ cityWeather.main.pressure }} hpa</td>
				</tr>
				<tr>
						<td>Humidity</td>
						<td>{{ cityWeather.main.humidity }} %</td>
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
	data() {
		return {
			cityWeather: '',
			isCityValid: true
		}
	},
	mounted() {
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.$route.params.city}&appid=ae022e0a1551eb3e2833113e3d2da947`)
			.then(response => response.json())
			.then(weather => {
				if (weather.cod === 200) {
					this.cityWeather = weather;
				} else {
					this.isCityValid = false;
				}
				})
			.catch(error => {
				console.log(error);
			})
	},
	computed: {
		tempInCelsius() {
			const KALVIN_TO_CELSIUS = 273.15;
			return (this.cityWeather.main.temp - KALVIN_TO_CELSIUS).toFixed(1);
		},
		sunrise() {
			const time = new Date(this.cityWeather.sys.sunrise);
			return `${time.getHours()}:${time.getMinutes()}`;
		},
		sunset() {
			const time = new Date(this.cityWeather.sys.sunset);
			return `${time.getHours()}:${time.getMinutes()}`;
		}
	}
}
</script>

<style>
.city-weather {
    padding: 10px;
}
.city-weather__header {
    text-align: center;
}
.city-weather__temp {
    text-align: center;
}
.city-weather__table {
    border-collapse: collapse;
    width: 50%;
    margin: 0 auto;
}
</style>