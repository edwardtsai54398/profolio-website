<template>
  <div class="three-bg">

  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import * as Three from "three/src/Three";



//three.js
//建立場景三要素：場景/鏡頭(視角)/渲染器

const scene = new Three.Scene()
const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new Three.WebGLRenderer()
renderer.setClearColor(0x000000, 0)
renderer.setSize(window.innerWidth, window.innerHeight);
onMounted(() => {
  console.dir(renderer);

  document.querySelector('.three-bg').appendChild(renderer.domElement);

})

const geometry = new Three.CapsuleGeometry(0.3, 7, 6, 45);//幾何體
const material = new Three.MeshPhongMaterial({
  color: 0xececef,
  fog: true,
  wireframe: false
});//材質
console.log(material);
const cylinder = new Three.Mesh(geometry, material);//網格(物體)由幾何體和材質組成
cylinder.rotation.x += 1.5;
cylinder.rotation.z += 0;
scene.add(cylinder);

const light = new Three.DirectionalLight(0xffffff, 3)
light.position.set(-1, 2, 4)
scene.add(light)

// camera.position.z = 20
camera.position.set(0, 0, 20)
camera.up.set(0, 0, 20)
camera.lookAt(0, 0, 0);
function animate(time) {
  const canvas = renderer.domElement;
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();

  // cylinder.rotation.z += 0.01;
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
</script>