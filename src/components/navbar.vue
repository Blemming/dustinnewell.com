<template lang="html">
    <div id="navbar">
        <section class="hero is-medium is-dark has-text-centered image-header">
            <div class="hero-body">
                <div class="container">
                    <div class="content is-large">
                        <h1 class="title ">Dustin Newell</h1>
                        <p class="subtitle"><span id="element"></span></p>
                        <nav class="nav has-text-centered">
                            <div class="nav-center">
                                <router-link class="nav-item is-tab" to="/" exact>Home</router-link>
                                <router-link class="nav-item is-tab" to="/about">About Me</router-link>
                                <router-link class="nav-item is-tab" to="/projects">Project List</router-link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'navbar'
    }
</script>

<style lang="scss">
    $purple-color: #5B5B61;
    $blue-color:#216B7E;
    $red-color:#A26951;
    $light-red-color:#ff8e60;
    #navbar {
        .hero {
            &.image-header {
                background-image: linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.65)), url('../assets/homeimage.jpg');
                background-size: cover;
                background-position: center;
            }
            &.is-dark {
                .subtitle {
                    color: $light-red-color;
                }
            }
        }
        .nav {
            .nav-item a.is-tab.is-active,
            a.nav-item.is-tab.is-active {
                border-bottom: 3px solid $blue-color;
                &:hover {
                    border-bottom: 3px solid $blue-color;
                }
            }
            .nav-item a.is-tab:hover,
            a.nav-item.is-tab:hover {
                border-bottom: 1px solid $blue-color;
            }
        }
    }
    .ityped-cursor {
        font-size: 2.2rem;
        opacity: 1;
        -webkit-animation: blink 0.3s infinite;
        -moz-animation: blink 0.3s infinite;
        animation: blink 0.3s infinite;
        animation-direction: alternate;
    }

    @keyframes blink {
        100% {
            opacity: 0;
        }
    }

    @-webkit-keyframes blink {
        100% {
            opacity: 0;
        }
    }

    @-moz-keyframes blink {
        100% {
            opacity: 0;
        }
    }
</style>