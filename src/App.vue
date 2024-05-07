<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Background from './components/Background.vue'
import Profile from './components/Profile.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'

const animationTime = ref<number>(0.0)
</script>

<template lang="pug">
main
  Background.background(:animationTime="animationTime")
  h1.title
    span Programming!
    span Developing!
    span Mastering!
    .scroll-indicator
      span Scroll down!
      span v
  Profile
  Skills
  Projects
  Contact
</template>

<style scoped lang="scss">
@import './variables.scss';

.background {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

main {
    max-width: $_max-width;
    margin: 0 auto;
}

h1.title {
    position: relative;

    font-family: 'Cascadia Code';
    font-weight: bold;
    width: 100%;
    height: 100vh;

    font-size: min(7vw, calc($_max-width * 0.07), 72px);
    padding: 1em;
    padding-top: 0.65em;
    display: flex;
    flex-direction: column;
    justify-content: center;

    span:not(:last-child) {
        margin-bottom: 0.25em;
    }

    div.scroll-indicator {
        position: absolute;
        left: 50%;
        bottom: 1em;
        transform: translateX(-50%);
        font-size: 0.25em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 1em;

        span {
            margin-bottom: 0.25em;
        }
    }
}
</style>
