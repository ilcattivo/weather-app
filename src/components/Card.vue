<template>
  <div class="card">
		<h3 class="card__header">Weather in {{ item.name }}</h3>
		<div>
			<p class="card__temp">Temp: {{ temp }}</p>
		</div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			tempUnit: 'C'
		}
	},
	props: {
		item: {
			required: true,
			type: Object
		}
	},
	methods: {
		convertTemp() {
			const { temp } = this.item;

			if (this.tempUnit === 'K') {
				return temp.toFixed(1);
			};

			const KALVIN_TO_CELSIUS = 273.15;
			return (temp - KALVIN_TO_CELSIUS).toFixed(1);
		}
	},
	computed: {
		temp() {
			const temp = this.convertTemp();
			return `${temp}° ${this.tempUnit}`;
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