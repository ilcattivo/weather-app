<template>
  <div class="card-list">
      <p v-if="!list.length">There will be results...</p>
      <div v-else class="card-list__list" v-for="item of list" :key="item.id">
        <router-link :to="`weather/${item.name}`">
          <Card :item="item" />
        </router-link>
      </div>
  </div>
</template>

<script>
import Card from './Card'
export default {
    props: ['list'],
    components: {
        Card
    }
}
</script>

<style>
.card-list__list > * {
  margin-bottom: 10px;
}
</style>