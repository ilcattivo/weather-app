<template>
  <div class="card">
		<h3 class="card__header">Weather in {{ item.name }}</h3>
		<div>
			<p class="card__temp">Temp: {{ tempInCelsius }}&#176;C</p>
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
			return (this.item.temp - KALVIN_TO_CELSIUS).toFixed(1);
		}
	}
}
</script>

<style lang="scss">
.card {
	padding: 10px;

	&__header {
		text-align: center;
	}

	&__temp {
		text-align: center;
	}
}
</style>