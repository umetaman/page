<script setup lang="ts">
import { ref } from 'vue'
import ProjectItem from './ProjectItem.vue'

const testList = []

for (let i = 0; i < 5; i++) {
    testList.push({
        title: 'Test',
        description: 'Test Application for Testing.',
        url: 'https://example.com',
        skills: 'Test,Testing,Tested',
        image: '',
    })
}

const projects = ref(testList)

const libraries = ref(testList)
</script>

<template lang="pug">
section.projects
    h3 Works:
    ul.projects-list
        ProjectItem(v-for="project in projects" :key="project.title" v-bind="project")
    h3 Libraries:
    ul.projects-list
        ProjectItem(v-for="project in libraries" :key="project.title" v-bind="project")
</template>

<style lang="scss" scoped>
section.projects {
    display: flex;
    flex-direction: column;
    justify-content: center;

    font-size: 5vw;
    width: 100%;
    height: 100%;
    min-height: 100vh;

    padding: 7vw;

    h3 {
        font-size: 1em;
        font-weight: bold;
        margin-bottom: 0.5em;
    }

    ul.projects-list {
        &:not(:last-child) {
            margin-bottom: 1em;
        }

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.5em;
        @media (max-width: 768px) {
            grid-template-columns: 1fr;
        }
    }
}
</style>
