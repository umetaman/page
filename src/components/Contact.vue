<template lang="pug">
section.contact
    p {{ "Please feel free to contact me." }}
    h3 Email:
    a(href="mailto:yuyaumeta@gmail.com") {{ "yuyaumeta@gmail.com" }}
    h3 GitHub:
    a(href="https://github.com/umetaman") @umetaman
</template>

<style lang="scss" scoped>
section.contact {
    display: flex;
    flex-direction: column;
    justify-content: center;

    font-size: 5vw;
    width: 100%;
    height: 100%;
    min-height: 100vh;

    padding: 7vw;

    p {
        margin-bottom: 1em;
    }

    h3 {
        font-size: 1em;
        font-weight: bold;
        margin-bottom: 0.5em;
    }

    a {
        &:not(:last-child) {
            margin-bottom: 1em;
        }
    }
}
</style>
