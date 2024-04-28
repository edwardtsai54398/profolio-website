<template>
  <div class="three-bg">

  </div>
</template>
<script setup>
import { onMounted, computed, watch } from 'vue'
import * as Three from "three/src/Three";

const props = defineProps({
  darkMode: {
    type: Boolean,
    default: false
  }
})
//three.js
//建立場景三要素：場景/鏡頭(視角)/渲染器

const scene = new Three.Scene()
const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new Three.WebGLRenderer()
renderer.setClearColor(0x000000, 0)
renderer.setSize(window.innerWidth, window.innerHeight);
onMounted(() => {
  document.querySelector('.three-bg').appendChild(renderer.domElement);
})

const strokeColor = computed(() => props.darkMode ? 0xb1b1b1 : 0xdfdfdf)
const geometry = new Three.OctahedronGeometry(7, 20);//幾何體
const lineMaterial = new Three.MeshPhongMaterial({
  color: strokeColor.value,
  wireframe: true
});//材質

const globe = new Three.Mesh(geometry, lineMaterial);
globe.rotation.x += 0.5
const globeInitScale = 0.4
globe.scale.set(globeInitScale, globeInitScale, globeInitScale)
scene.add(globe);

const light = new Three.DirectionalLight(0xffffff, 3)
light.position.set(-1, 2, 4)
scene.add(light)

camera.position.z = 6.9

const foColor = computed(() => props.darkMode ? 0x000000 : 0xefefef)
scene.fog = new Three.Fog(foColor.value, 5, 15);

function animate(time) {
  const canvas = renderer.domElement;
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();
  // globe.rotation.y -= 0.001
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
onMounted(() => {
  animate();
})

//RWD
const resizeRenderer = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
}
onMounted(() => {
  window.addEventListener('resize', resizeRenderer)
})

//scroll
onMounted(() => {
  window.addEventListener('scroll', transformGlobe)
})
const transformGlobe = () => {
  let scrollY = window.scrollY
  const aboutSection = document.querySelector('section#about')
  let aboutScrollTop = aboutSection.offsetTop
  if (scrollY <= aboutScrollTop) {
    let scale = globeInitScale + ((scrollY / aboutScrollTop) * (1 - globeInitScale))
    globe.scale.set(scale, scale, scale)
  } else {
    globe.scale.set(1, 1, 1)
  }
  globe.rotation.z = scrollY * 0.001
  globe.rotation.x = scrollY * 0.0005
  renderer.render(scene, camera);
}
onMounted(() => {
  transformGlobe()
})
watch(() => props.darkMode, () => {
  scene.fog = new Three.Fog(foColor.value, 5, 15);
  globe.material.color.set(strokeColor.value)
  renderer.render(scene, camera);
}, { immediate: true })
</script>