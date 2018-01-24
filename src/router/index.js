import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import JokeCounter from '@/components/JokeCounter'

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
    }
  ]
})
