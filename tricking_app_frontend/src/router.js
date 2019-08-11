import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import UsersNew from "./views/UsersNew.vue"
import DayAndTimesNew from "./views/DayAndTimesNew.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/users/new',
      name: 'users-new',
      component: UsersNew
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout
    },
    {
      path: '/day_and_times/new',
      name: 'day_and_times-new',
      component: DayAndTimesNew
    }
  ]
})
