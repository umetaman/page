<script setup lang="ts">
import ShaderVert from '../assets/shaders/vertex.vert?raw'
import ShaderFrag from '../assets/shaders/fragment.frag?raw'
import * as THREE from 'three'
import { onMounted, ref } from 'vue'

const container = ref<HTMLElement>()

const props = defineProps({
    animationTime: {
        type: Number,
        default: 0.0,
    },
    backgroundColor: {
        type: THREE.Color,
        default: new THREE.Color(0xffffff),
    },
    color: {
        type: THREE.Color,
        default: new THREE.Color(0xdddddd),
    },
})

onMounted(() => {
    if (!container.value) {
        throw new Error('Container not found')
    }

    let camera
    let scene
    let renderer

    let uniforms = {
        u_time: { value: 0.0 },
        u_width: { value: window.innerWidth },
        u_height: { value: window.innerHeight },
        u_backgroundColor: { value: props.backgroundColor },
        u_color: { value: props.color },
        u_animation: { value: 1.0 },
    }

    camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    scene = new THREE.Scene()

    const geometry = new THREE.PlaneGeometry(2, 2)
    const material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: ShaderVert,
        fragmentShader: ShaderFrag,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    renderer = new THREE.WebGLRenderer()
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    container.value.appendChild(renderer.domElement)

    const onWindowResized = () => {
        if (renderer) {
            renderer.setSize(window.innerWidth, window.innerHeight)
            uniforms.u_width.value = window.innerWidth
            uniforms.u_height.value = window.innerHeight
        }
    }

    window.addEventListener('resize', onWindowResized)

    const loop = () => {
        if (scene && camera && renderer) {
            uniforms.u_time.value = performance.now() / 1000
            uniforms.u_backgroundColor.value = props.backgroundColor
            uniforms.u_color.value = props.color
            uniforms.u_animation.value = props.animationTime as number
            renderer.render(scene, camera)
            requestAnimationFrame(loop)
        }
    }
    loop()
})
</script>

<template lang="pug">
div.background-canvas-container(ref="container")
</template>
