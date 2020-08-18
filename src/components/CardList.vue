<template>
  <div class="card-list">
      <p v-if="!list.length">There will be results...</p>
      <ul v-else class="card-list__list">
        <li v-for="(item, index) of list" :key="index" class="card-list__item">
          <router-link :to="`weather/${item.name}`">
            <Card :item="item" />
          </router-link>
        </li>
      </ul>
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

<style lang="scss">
.card-list {
  &__list {
    list-style: none;
    padding-left: 0;
  }

  &__item {
    margin-bottom: 10px;
  }
}
</style>