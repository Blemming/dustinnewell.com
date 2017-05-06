<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import navbar from './components/navbar.vue'

  export default {
    name: 'app',
    components: {
      navbar
    },
    metaInfo:{
    link: [{
      rel: 'icon',
      type:'image/ico',
      href: '/static/favicon.ico'
    }],
      meta: [
        {
        vmid:'og:title',
        property:'og:title',
        content: 'Dustin Newell - Front-end web developer'
      },
      {
        vmid:'og:url',
        property:'og:url',
        content: 'http://www.dustinnewell.com'
      },
      {
        vmid:'og:img',
        property:'og:img',
        content: '/static/ogcapture.jpg'
      },
      {
        vmid:'og:description',
        property:'og:description',
        content: 'Dustin Newell is a front-end web developer who loves javascript, coffee and craft beer.'
      }
      ]
    }
  }
  
</script>

<style lang="scss">
  
</style>