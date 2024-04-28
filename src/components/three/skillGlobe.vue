<template>
  <div
    ref="globeScne"
    class="skill-globe"
    style="width: 350px;height: 350px;"
  >

  </div>
</template>
<script setup>
import { onMounted, ref, computed } from 'vue'
import * as Three from "three/src/Three";

const props = defineProps({
  darkMode: {
    type: Boolean,
    default: false
  }
})
const strokeColor = computed(() => props.darkmode ? 0xefefef : 0x000000)

const globeScne = ref()
const scene = new Three.Scene()
const camera = new Three.PerspectiveCamera(75, 1, 0.1, 1000)
const renderer = new Three.WebGLRenderer()
renderer.setClearColor(0x000000, 0)
onMounted(() => {
  renderer.setSize(globeScne.value.clientWidth, globeScne.value.clientHeight);
  document.querySelector('.skill-globe').appendChild(renderer.domElement);

})

const geometry = new Three.OctahedronGeometry(7, 2);//幾何體
const lineMaterial = new Three.MeshPhongMaterial({
  color: strokeColor.value,
  wireframe: true
});//材質
const pointMaterial = new Three.PointsMaterial({
  color: 'red',
  size: 0.2,
});
const globe = new Three.Mesh(geometry, lineMaterial);
const globePoints = new Three.Points(geometry, pointMaterial);

globe.scale.set(2, 2, 2)

scene.add(globe);
scene.add(globePoints);

const light = new Three.DirectionalLight(0xffffff, 3)
light.position.set(-1, 2, 4)
scene.add(light)

camera.position.z = 12;
function animate(time) {

  const canvas = renderer.domElement;
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();

  globe.rotation.z += 0.01;
  globe.rotation.x += 0.01;
  globePoints.rotation.z += 0.01;
  globePoints.rotation.x += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
onMounted(() => {
  animate();
})
</script>