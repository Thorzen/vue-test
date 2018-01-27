import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import JokeCounter from '@/components/JokeCounter'
import Todo from '@/components/Todo'
import GuessNumber from '@/components/GuessNumber'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
      path: '/guess/:range',
      name: 'GuessNumber',
      component: GuessNumber,
      props: true
    },
    {
      path: '/guess',
      name: 'GuessNumber',
      component: GuessNumber,
      props: {
        range: 10
      }
    }
  ]
})
