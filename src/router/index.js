import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import JokeCounter from '@/components/JokeCounter'
import Todo from '@/components/Todo'
import GuessNumber from '@/components/GuessNumber'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/joke/:count',
      name: 'JokeCounter',
      component: JokeCounter,
      props: true
    },
    {
      path: '/todo/:name/:list',
      name: 'Todo',
      component: Todo,
      props: true
    },
    {
      path: '/guess/:range?',
      name: 'GuessNumber',
      component: GuessNumber,
      props: true
    }
  ]
})
