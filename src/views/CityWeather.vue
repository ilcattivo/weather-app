<template>
	<div class="city-weather">
		<div class="city-weather__form-wrapper">
			<WeatherForm />
		</div>
		<p v-if="error">City not found</p>
		<div v-else-if="!cityWeather">Loading...</div>
		<div v-else>
			<h3 class="city-weather__header">Weather in {{ cityWeather.name }}</h3>
			<p class="city-weather__temp">Temperature: {{ tempInCelsius }}&#176;C</p>
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
import { mapGetters } from 'vuex'
import WeatherForm from '../components/WeatherForm';

export default {
	components: {
		WeatherForm
	},
	mounted() {
		this.$store.dispatch('fetchNewWeather', this.$route.params.city);
	},
	computed: {
		...mapGetters(['cityWeather']),
		tempInCelsius() {
			const KALVIN_TO_CELSIUS = 273.15;
			return (this.cityWeather.main.temp - KALVIN_TO_CELSIUS).toFixed(1);
		},
		sunrise() {
			return this.formatTime(this.cityWeather.sys.sunrise);
		},
		sunset() {
			return this.formatTime(this.cityWeather.sys.sunset);
		},
		error() {
			return this.$store.state.error;
		}
	},
	methods: {
		formatTime(ms) {
			const time = new Date(ms);
			return `${time.getHours()}:${time.getMinutes()}`;
		}
	}
}
</script>

<style lang="scss">
.city-weather {
	padding: 10px;

	&__form-wrapper {
		width: 400px;
		margin: 0 auto;
		margin-bottom: 40px;
	}

	&__header {
		text-align: center;
	}

	&__temp {
		text-align: center;
	}

	&__table {
		border-collapse: collapse;
		width: 50%;
		margin: 0 auto;
	}
}
</style>