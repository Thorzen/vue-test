<template>
  <div class="hello">
    <h1>The joker joked {{ count }} times to the scary thing!</h1>
    <h2><router-link :to="{ name: 'JokeCounter', params: { count: countplusone }}">Joke Again?</router-link></h2>
  </div>
</template>

<script>
export default {
  name: 'JokeCounter',
  props: ['count'],
  computed: {
    countplusone: function () {
      return parseInt(this.count, 10) + 1
    }
  }
}
</script>
