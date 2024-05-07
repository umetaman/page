<template lang="pug">
section.profile
    h3.name Yuya Umeta 
        span.nickname @umetaman
    p.job
        | Interactive Content, Application Developer
    p.description 
        | I'm skilled in system design, including 2D/3D graphics representation.<br>
        | My hobby is developing small-scale libraries.
</template>

<style lang="scss" scoped>
@import '../variables.scss';

section.profile {
    font-size: min(5vw, calc($_max-width * 0.07));
    min-height: 100vh;
    padding: 7vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1em;

    h3.name {
        font-weight: bold;
        display: flex;
        flex-direction: column;

        margin-bottom: 0.3em;

        span.nickname {
            font-size: max(16px, 0.5em);
            font-weight: normal;
            margin-top: 0.25em;
        }
    }

    p {
        font-size: max(16px, 0.35em);
    }

    p.job {
        margin-bottom: 1em;
    }

    p.description {
        line-height: 1.5em;
    }
}
</style>
