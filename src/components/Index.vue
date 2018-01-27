<template>
  <div class="index">
    <h1>Vue Test Index</h1>
    <ul class="pages">
      <li :key="link.name" v-for="link in pages">
        <router-link :to="{ name: link.name, params: link.params}">{{ link.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      pages: [{
        name: 'JokeCounter',
        params: {
          count: 0
        }
      }, {
        name: 'Todo',
        params: {
          name: 'example',
          list: 'todo'
        }
      }, {
        name: 'GuessNumber'
      }]
    }
  }
}
</script>

<style scoped>
.pages li {
  font-size: 25px;
  list-style-type: none;
}
</style>