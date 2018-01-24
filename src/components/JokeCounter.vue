<template>
  <div class="hello">
    <h1>The hero joked {{ counter }} times to {{ ghostName }}!</h1>
    <h2><router-link :to="{ name: 'JokeCounter', params: { count: countPlusOne }}">Joke Again?</router-link></h2>

    <h3 v-if="isCountEnough">{{ ghostName }} has laughed so hard he vanished!</h3>
    <h3 v-else>Boo! is still mad!</h3>

    Ghost's name: <input v-model="ghostName" />

    <h3 v-on:click="onSelfDestruct">Self Destruct?</h3>
  </div>
</template>

<script>
export default {
  name: 'JokeCounter',
  props: ['count'],
  data () {
    return {
      ghostName: 'Boo',
      counter: parseInt(this.count, 10)
    }
  },
  watch: {
    count (newCount) {
      this.counter = parseInt(newCount, 10)
    }
  },
  methods: {
    onSelfDestruct () {
      this.$router.push({name: 'JokeCounter', params: { count: 0 }})
    }
  },
  computed: {
    countPlusOne () {
      return this.counter + 1
    },
    isCountEnough () {
      var count = this.counter
      return count >= 100
    }
  }
}
</script>
