<template>
  <div class="hello">
    <h1>Manage Todos</h1>

  New Todo: <input type="text" @keyup.enter="todos.push({name: $event.target.value, done: false})">

  <h2>Incomplete</h2>
  <ul id="todos">
    <li :key="todo.id" v-for="todo in incomplete">
      <input type="checkbox" v-on:change="todo.done = true">{{ todo.name }}
    </li>
  </ul>

    <h2>Complete</h2>
  <ul id="todos">
    <li :key="todo.id" v-for="todo in completed">
      <input type="checkbox" checked="checked" v-on:change="todo.done = false"> {{ todo.name }}
    </li>
  </ul>

  </div>
</template>

<script>
export default {
  name: 'Todo',
  data () {
    return {
      todos: [{
        name: 'Test This App',
        id: 0,
        done: false
      }]
    }
  },
  methods: {
    onItemCheck () {
    }
  },
  computed: {
    completed () {
      return this.todos.filter((todo) => todo.done)
    },
    incomplete () {
      return this.todos.filter((todo) => !todo.done)
    }
  }
}
</script>
