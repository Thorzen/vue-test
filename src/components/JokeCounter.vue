<template>
  <div class="hello">
    <h1>The hero joked {{ count }} times to {{ ghostName }}!</h1>
    <h2><router-link :to="{ name: 'JokeCounter', params: { count: countplusone }}">Joke Again?</router-link></h2>

    <h3 v-if="isCountEnough">{{ ghostName }} has laughed so hard he vanished!</h3>
    <h3 v-else>Boo! is still mad!</h3>

    Ghost's name: <input v-model="ghostName" />
  </div>
</template>

<script>
export default {
  name: 'JokeCounter',
  props: ['count'],
  data: () => {
    return {
      ghostName: 'Boo'
    }
  },
  computed: {
    countplusone: function () {
      return parseInt(this.count, 10) + 1
    },
    isCountEnough: function () {
      var count = parseInt(this.count, 10)
      return count >= 100
    }
  }
}
</script>
