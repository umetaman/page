<template lang="pug">
section.skills
    h3 Work with:
    div.skills-table
        div.skills-row
            h4 Creative Coding
            ul.skills-list
                li Unity
                li Unreal Engine
                li openFrameworks
                li Three.js
        div.skills-row
            h4 Web
            ul.skills-list
                li Vue
                li Nuxt
                li React
                li TypeScript
                li Firebase
    h3 Studying:
    div.skills-table
        div.skills-row
            ul.skills-list
                li Rust
                li WebAssembly
                li WebGPU
</template>

<style lang="scss" scoped>
section.skills {
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

    div.skills-table {
        &:not(:last-child) {
            margin-bottom: 1em;
        }
    }

    div.skills-row {
        font-size: max(2vw, 16px);
        display: flex;
        flex-direction: column;

        h4 {
            font-weight: bold;
            margin-bottom: 0.75em;
        }

        ul.skills-list {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 0.5em;

            li {
                margin-right: 1em;
                margin-bottom: 0.5em;
                padding: 0.25em 1em;
                border-radius: 100vw;
                border: 1px solid black;
                background-color: rgba(#fff, 0.7);
            }
        }
    }
}
</style>
