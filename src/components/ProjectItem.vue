<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
    title: String,
    description: String,
    url: String,
    skills: String,
    image: String,
})

const skills = computed(() => {
    if (props.skills === undefined) {
        return []
    }
    return props.skills.split(',').map((skill) => skill.trim())
})
</script>

<template lang="pug">
li.project-item 
    a.project-link(:href="url" target="_blank" rel="noopener noreferrer")
    img.project-thumbnail(v-if="!!image" :src="image" alt="Project Image")
    h4.project-title {{ title }}
    p.project-description {{ description }}
    ul.project-skills
        li.project-skill(v-for="skill in skills" :key="skill") {{ skill }}
</template>

<style lang="scss" scoped>
li.project-item {
    font-size: 1.5vw;
    padding: 1em 1em;
    border-radius: 0.75em;
    border: 2px solid black;
    background-color: rgba(#fff, 0.7);

    min-height: 14em;
    @media (max-width: 768px) {
        padding: 2em;
        min-height: 20em;
    }

    position: relative;
    display: flex;
    flex-direction: column;

    a.project-link {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    h4.project-title {
        font-size: max(1.3em, 16px);
        font-weight: bold;
        margin-bottom: 0.4em;
    }

    p.project-description {
        font-size: max(1em, 12px);
        line-height: 1.5em;
        margin-bottom: 0.5em;
    }

    ul.project-skills {
        font-size: max(1em, 11px);
        display: flex;
        flex-direction: row;
        margin-top: auto;

        li.project-skill {
            margin-right: 0.5em;
            padding: 0.25em 1em;
            border-radius: 100vw;
            border: 1px solid black;
        }
    }
}
</style>
