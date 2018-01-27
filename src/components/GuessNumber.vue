<template>
  <div class="guess-number">
    <h1 class="header">Guess Number</h1>
    <h2 class="number-range">Pick a number between 1 and {{ maxNum }}</h2>
    <div class="guess-number"><div class="guess-number-label">Enter Number Here</div><input class="guess-number-input" ref="guessNumberInput" type="text"
      @keyup.enter="numberGuessed = parseInt(numberInput, 10)" v-model="numberInput"></div>
    <div class="server-response" v-if="isNum(numberGuessed)">You guessed <strong>{{ numberGuessed }}</strong></div>
    <div class="server-hint" v-if="isNum(numberGuessed)">Number is {{ numberHint }}</div>
  </div>
</template>

<script>

export default {
  name: 'GuessNumber',
  props: ['range'],
  data () {
    return {
      actualNumber: undefined,
      numberInput: undefined,
      numberGuessed: undefined,
      maxNum: undefined
    }
  },
  created () {
      this.pickNewNumber()
  },
  computed: {
    numberHint () {
      if (this.numberGuessed === undefined) {
        return false
      }
      return this.numberGuessed === this.actualNumber ? 'You got it!' : (this.numberGuessed < this.actualNumber ? 'Too low' : 'Too high')
    }
  },
  methods: {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    generateRandomNum: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
    isNum: (num) => Number.isInteger(num),
    pickNewNumber() {
      var intRange = parseInt(this.range, 10)
      this.maxNum = this.isNum(intRange) ? intRange : 10
      this.actualNumber = this.generateRandomNum(1, this.maxNum)
    }
  },
  watch: {
    range () {
      this.pickNewNumber()
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
