import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import home from './containers/Home.vue'
import myprojects from './containers/Myprojects.vue'
import about from './containers/About.vue'
import error from './containers/Error.vue'

Vue.use(Router)
Vue.use(Meta)

const routes = [
  { path: '/', component: home },
  { path: '/about', component: about },
  { path: '/projects', component: myprojects },
  { path:'*', component:error}
]

// export router instance
export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active'
})  