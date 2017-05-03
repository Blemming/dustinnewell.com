import Vue from 'vue'
import router from './router'
import App from './App.vue'

// Front-end components
import ityped from 'ityped'
import Bulma from 'bulma'
import FontAwesome from 'font-awesome/css/font-awesome.css'
import svgIcon from './assets/svg-icon-element'

new Vue({
  el: '#app',
  render: h => h(App),
  metaInfo: {
    title: 'Front-end Web Developer',
    titleTemplate: '%s | Dustin Newell',
    link: [{
      rel: 'favicon',
      href: '/static/favicon.ico'
    }],
    meta: [{
        charset: 'utf-8'
      },
      {
        'http-equiv': 'X-UA-Compatible',
        content: "IE=edge"
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'description',
        content: 'Dustin Newell is a front-end web developer who loves javascript, coffee and craft beer.'
      },
      {
        name: 'description',
        content: 'Dustin Newell is a front-end web developer who loves javascript, coffee and craft beer.'
      },
      {
        name: 'robots',
        content: 'index, follow, archive'
      }
    ]
  },
  router
})
ityped.init('#element', {
  strings: ['Self Hosting Enthusiast', 'Javascript Developer', 'Open Source Advocate', 'Front-End Web Developer'],
  backDelay: 1200
});