<template>
  <div class="hello">
    <h1>The hero joked {{ counter }} times to {{ ghostName }}!</h1>
    <h2><router-link :to="{ name: 'JokeCounter', params: { count: countplusone }}">Joke Again?</router-link></h2>

    <h3 v-if="isCountEnough">{{ ghostName }} has laughed so hard he vanished!</h3>
    <h3 v-else>Boo! is still mad!</h3>

    Ghost's name: <input v-model="ghostName" />

    <h3 v-on:click="selfDestructClicked">Self Destruct?</h3>
  </div>
</template>

<script>
export default {
  name: 'JokeCounter',
  props: ['count'],
  data () {
    return {
      ghostName: 'Boo',
      counter: 0
    }
  },
  watch: {
    count(newCount) {
      this.counter = newCount
    }
  },
  methods: {
    selfDestructClicked () {
      this.counter = 0
    }
  },
  computed: {
    countplusone () {
      return parseInt(this.counter, 10) + 1
    },
    isCountEnough () {
      var count = parseInt(this.counter, 10)
      return count >= 100
    }
  }
}
</script>
