import Vue from 'vue'
import router from './router'
import App from './App.vue'
import ityped from 'ityped'

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
ityped.init('#element', {
  strings: [ 'Self Hosting Enthusiast','Javascript Developer', 'Open Source Advocate','Front-End Web Developer'],
  
  backDelay: 1200
});