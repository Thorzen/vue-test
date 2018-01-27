<template>
  <div class="guess-number">
    <h1 class="header">Guess Number</h1>
    <div class="guess-number"><div class="guess-number-label">Enter Number Here</div><input class="guess-number-input" ref="guessNumberInput" type="text"
      @keyup.enter="numberGuessed = parseInt(numberInput, 10)" v-model="numberInput"></div>
    <div class="server-response">You guessed <strong>{{ numberGuessed }}</strong> </div>
    <div class="server-hint">Number is {{ numberHint }}</div>
  </div>
</template>

<script>

export default {
  name: 'Todo',
  data () {
    return {
      actualNumber: undefined,
      numberInput: undefined,
      numberGuessed: undefined
    }
  },
  created () {
    this.actualNumber = this.generateRandomNum(1, 100)
  },
  computed: {
    numberHint () {
      return this.numberGuessed === this.actualNumber ? 'You got it!' : (this.numberGuessed < this.actualNumber ? 'Too low' : 'Too high')
    }
  },
  methods: {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    generateRandomNum (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  }
}
</script>

<style scoped>
.server-response
{
  font-size: 30px;
  background-color: rgb(228, 228, 250);
  color: blue;
  margin: 20px;
}

.header
{
  font-size: 40px;
  background-color: rgb(255, 228, 228);
  color: #bd6f6f;
}
</style>
