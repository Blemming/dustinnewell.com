<template lang="html">
  <div class="container" id="about">
    <section class="section">
      <div class="content has-text-centered">
        <h1>About Me</h1>
        <hr>
        <div class="columns is-centered">
          <div class="column is-two-thirds">
            <article class="media">
              <div class="media-left">
                <p class="image is-128x128">
                  <img src="../assets/prof_mypic.jpg" alt="Dustin Newell">
                </p>
              </div>
              <div class="media-content">
                <div class="content">
                  <p><strong>I’m a Front-end web developer. </strong>I create interactions and user experiences using mostly
                    javascript. I've been coding for 4 years and have been using Vuejs for one year. I like to learn the
                    latest technologies.</p>
                  <p>I have a basic understanding of PHP, Ruby and .NET backends but I am proficient in Node and Express backends.
                    I am confortable with REST principles, JSON and XML.</p>
                  <p>I am a strong advocate for self-hosting and open source solutions. I currently own a ubuntu server on which
                    I run multiple self hosted multimedia solutions, all of which use docker. I also own a raspberry pi which
                    I currently use as an internal DNS server.</p>
                  <p>On my free time I like to play video games, drink dark roast coffee and from time to time savour craft
                    beer. My current favorite is <a href="http://www.bieresduquebec.ca/bieres/microbrasserie-le-grimoire/la-vie-de-chateau.html"
                      target="_blank">La Vie de Chateau</a> by the microbrewer La grimoire.</p>
                  <p class="has-bottom-border has-text-centered"><span><a href="mailto:developer@dustinnewell.com">developer@dustinnewell.com</a></span></p>
                  <p class="has-text-centered">
                    <a class="icon is-large is-dark" target="_blank" href="https://www.linkedin.com/in/dustin-newell-8a622997/"><i class="fa fa-linkedin fa-5" aria-hidden="true"></i></a>
                    <a class="icon is-large is-dark" target="_blank" href="https://1drv.ms/b/s!Am4okBU5C8O-jkXN1M4YzvZi_jmD"><i class="fa fa-file-text-o" aria-hidden="true"></i></a>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'about'
  }
</script>

<style lang="sass">
.image
  img
    border-radius: 50%
</style>