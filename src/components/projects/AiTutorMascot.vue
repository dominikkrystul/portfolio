<script setup lang="ts">
import {
  nextTick,
  onBeforeUnmount,
  onMounted,
  shallowRef,
  toRaw,
  useTemplateRef,
} from 'vue'
import { TresCanvas } from '@tresjs/core'
import gsap from 'gsap'
import { Euler, Vector3, type Group } from 'three'

const mascotRef = useTemplateRef<Group>('mascot')
const headRef = useTemplateRef<Group>('head')
const armRef = useTemplateRef<Group>('arm')
const reducedMotion = shallowRef(false)

let animation: gsap.core.Timeline | undefined
let idleMotion: gsap.core.Tween | undefined
let animationFrame: number | undefined

const vector = (x: number, y: number, z: number) => new Vector3(x, y, z)
const rotation = (x: number, y: number, z: number) => new Euler(x, y, z)

function startAnimation() {
  if (animation) return

  const mascot = mascotRef.value && toRaw(mascotRef.value)
  const head = headRef.value && toRaw(headRef.value)
  const arm = armRef.value && toRaw(armRef.value)

  if (!mascot || !head || !arm) return

  if (reducedMotion.value) {
    gsap.set(mascot.position, { x: 0.28, y: 0.13 })
    gsap.set(arm.rotation, { z: -0.65 })
    return
  }

  gsap.set(mascot.position, { x: -0.12, y: -3.1 })
  gsap.set(mascot.rotation, { z: 0.1 })
  gsap.set(arm.rotation, { z: -0.2 })

  animation = gsap
    .timeline({ delay: 0.35, repeat: -1, repeatDelay: 3.5 })
    .set(mascot.position, { x: -0.12, y: -3.1 })
    .to(mascot.position, {
      x: 0.28,
      y: 0.13,
      duration: 0.85,
      ease: 'power3.out',
    })
    .to(mascot.rotation, { z: -0.07, duration: 0.32, ease: 'sine.out' }, '<0.2')
    .to(arm.rotation, { z: -1.15, duration: 0.28, ease: 'power2.out' })
    .to(arm.rotation, { z: -0.68, duration: 0.2, ease: 'sine.inOut' })
    .to(arm.rotation, { z: -1.22, duration: 0.2, ease: 'sine.inOut' })
    .to(arm.rotation, { z: -0.7, duration: 0.2, ease: 'sine.inOut' })
    .to(arm.rotation, { z: -1.14, duration: 0.2, ease: 'sine.inOut' })
    .to(arm.rotation, { z: -0.2, duration: 0.3, ease: 'power2.inOut' })
    .to(
      mascot.position,
      { x: 0.18, y: -3.1, duration: 0.72, ease: 'power3.in' },
      '+=0.55',
    )

  idleMotion = gsap.to(head.rotation, {
    z: 0.045,
    duration: 1.15,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  })
}

async function handleCanvasReady() {
  await nextTick()
  animationFrame = window.requestAnimationFrame(startAnimation)
}

onMounted(() => {
  reducedMotion.value = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches
})

onBeforeUnmount(() => {
  if (animationFrame) window.cancelAnimationFrame(animationFrame)
  animation?.kill()
  idleMotion?.kill()
})
</script>

<template>
  <span class="ai-tutor-mascot" aria-hidden="true">
    <TresCanvas
      class="ai-tutor-mascot__canvas"
      clear-color="#000000"
      :clear-alpha="0"
      :alpha="true"
      :antialias="true"
      :dpr="[1, 1.5]"
      render-mode="always"
      @ready="handleCanvasReady"
    >
      <TresPerspectiveCamera :position="vector(0, 0, 7)" :fov="35" />
      <TresAmbientLight :intensity="1.7" />
      <TresDirectionalLight :position="vector(3, 4, 5)" :intensity="2.4" />
      <TresDirectionalLight
        :position="vector(-4, 1, 3)"
        :intensity="0.8"
        color="#d47a5f"
      />

      <TresGroup ref="mascot" :scale="vector(1.02, 1.02, 1.02)">
        <TresGroup :position="vector(0, -0.85, 0)">
          <TresMesh cast-shadow>
            <TresBoxGeometry :args="[1.25, 0.95, 0.62]" />
            <TresMeshStandardMaterial
              color="#d9d2c8"
              :roughness="0.42"
              :metalness="0.18"
            />
          </TresMesh>
          <TresMesh :position="vector(0, 0, 0.34)">
            <TresBoxGeometry :args="[0.5, 0.34, 0.04]" />
            <TresMeshStandardMaterial
              color="#a64b32"
              :roughness="0.35"
              :metalness="0.2"
            />
          </TresMesh>
        </TresGroup>

        <TresGroup ref="head" :position="vector(0, 0.15, 0)">
          <TresMesh cast-shadow>
            <TresBoxGeometry :args="[1.52, 1.08, 0.76]" />
            <TresMeshStandardMaterial
              color="#eee9e1"
              :roughness="0.36"
              :metalness="0.12"
            />
          </TresMesh>
          <TresMesh :position="vector(-0.32, 0.03, 0.42)">
            <TresSphereGeometry :args="[0.12, 20, 20]" />
            <TresMeshStandardMaterial
              color="#a64b32"
              emissive="#4a1f16"
              :emissive-intensity="0.35"
            />
          </TresMesh>
          <TresMesh :position="vector(0.32, 0.03, 0.42)">
            <TresSphereGeometry :args="[0.12, 20, 20]" />
            <TresMeshStandardMaterial
              color="#a64b32"
              emissive="#4a1f16"
              :emissive-intensity="0.35"
            />
          </TresMesh>
          <TresMesh :position="vector(0, 0.79, 0)">
            <TresCylinderGeometry :args="[0.035, 0.035, 0.34, 12]" />
            <TresMeshStandardMaterial color="#24211f" :roughness="0.55" />
          </TresMesh>
          <TresMesh :position="vector(0, 0.98, 0)">
            <TresSphereGeometry :args="[0.09, 16, 16]" />
            <TresMeshStandardMaterial
              color="#a64b32"
              emissive="#4a1f16"
              :emissive-intensity="0.3"
            />
          </TresMesh>
        </TresGroup>

        <TresGroup ref="arm" :position="vector(0.77, -0.52, 0)">
          <TresMesh
            :position="vector(0.3, 0, 0)"
            :rotation="rotation(0, 0, -0.25)"
          >
            <TresCapsuleGeometry :args="[0.11, 0.52, 8, 16]" />
            <TresMeshStandardMaterial
              color="#d9d2c8"
              :roughness="0.42"
              :metalness="0.18"
            />
          </TresMesh>
          <TresMesh :position="vector(0.57, 0.03, 0)">
            <TresSphereGeometry :args="[0.16, 16, 16]" />
            <TresMeshStandardMaterial
              color="#eee9e1"
              :roughness="0.36"
              :metalness="0.12"
            />
          </TresMesh>
        </TresGroup>

        <TresGroup :position="vector(-0.77, -0.52, 0)">
          <TresMesh
            :position="vector(-0.27, -0.05, 0)"
            :rotation="rotation(0, 0, 0.25)"
          >
            <TresCapsuleGeometry :args="[0.11, 0.46, 8, 16]" />
            <TresMeshStandardMaterial
              color="#d9d2c8"
              :roughness="0.42"
              :metalness="0.18"
            />
          </TresMesh>
        </TresGroup>
      </TresGroup>
    </TresCanvas>
  </span>
</template>

<style scoped>
.ai-tutor-mascot,
.ai-tutor-mascot__canvas {
  display: block;
  width: 100%;
  height: 100%;
}

.ai-tutor-mascot__canvas {
  background: transparent;
}
</style>
