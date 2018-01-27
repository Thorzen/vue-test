<template>
  <div class="hello">
    <h1 class="header">My Todos</h1>
    <div class="new-todo"><div class="new-todo-label">New Todo</div><input class="new-todo-input" ref="newTodoInput" type="text"
              @keyup.enter="todos.push({name: $event.target.value, done: false, id: ++nextId})"></div>
    <h2 class="incomplete-header">Incomplete</h2>
    <ul class="incomplete todos">
      <li :key="todo.id" v-for="todo in incomplete">
        <input type="checkbox" v-on:change="todo.done = true"><span>{{ todo.name }}</span>
      </li>
    </ul>
  <h2 class="complete-header">Complete</h2>
    <ul class="complete todos">
      <li :key="todo.id" v-for="todo in completed">
        <input type="checkbox" checked="checked" v-on:change="todo.done = false"> <span>{{ todo.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Todo',
  props: ['name', 'list'],
  data () {
    var nextId = 0
    var todos = this.retrieveTodos()
    // Reset the ids. TODO: Don't even bother storing them.
    todos.forEach((todo) => {
      todo.id = nextId++
    })
    return {
      nextId: nextId,
      todos: todos
    }
  },
  mounted () {
    this.$nextTick(() => this.$refs.newTodoInput.focus())
  },
  watch: {
    todos: {
      handler () {
        // Write to local storage so that it can be retrieved in the future.
        localStorage.setItem(this.getStorageKey(), JSON.stringify(this.todos))
      },
      deep: true
    },
    name () {
      this.todos = this.retrieveTodos()
    },
    list () {
      this.todos = this.retrieveTodos()
    }
  },
  computed: {
    completed () {
      return this.todos.filter((todo) => todo.done)
    },
    incomplete () {
      return this.todos.filter((todo) => !todo.done)
    }
  },
  methods: {
    getStorageKey () {
      return this.name + '/' + this.list + '/todos'
    },
    retrieveTodos () {
      var todos = localStorage.getItem(this.getStorageKey()) || '[]'
      todos = JSON.parse(todos)
      return todos
    }
  }
}
</script>

<style scoped>
.todos
{
  list-style-type: none;
  font-size: 20px;
}

.new-todo
{
  background-color: #ffa4a4;
  margin: auto;
  padding: 0 15px 29px 15px;
  width: 50%;
}

.new-todo-label
{
  vertical-align: middle;
  color: rgb(161, 96, 96);
  font-size: 24px;
}

.new-todo input
{
  width: 100%;
  line-height: 30px;
  font-size: 30px;
  border: 1px solid rgb(192, 148, 148);
}

.todos.complete li span
{
    text-decoration: line-through;
}

.header
{
  font-size: 40px;
  background-color: rgb(255, 228, 228);
  color: #bd6f6f;
}

.complete-header, .incomplete-header
{
  font-size: 30px;
  margin: 15px;
  color: #bd6f6f;
}

</style>
