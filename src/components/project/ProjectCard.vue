<template>
  <div class="project_card">
    <h4>{{ title }}</h4>
    <div class="project_img">
      <img :src="img" :alt="`project-${title}-image`">
    </div>
    <div class="project_card_content">
      <p>
        <slot></slot>
      </p>
    </div>
    <div class="project_link_group">
      <a :href="codeLink" target="_blank" class="project_link">
        <font-awesome-icon icon="fa-solid fa-code" />
        <span>Code</span>
      </a>
      <a :href="demoLink" target="_blank" class="project_link">
        <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
        <span>View Demo</span>
      </a>
    </div>
    <!-- <button class="project_study_link">Case Study</button> -->
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
defineProps({
  title: String,
  img: String,
  codeLink: String,
  demoLink: String
})
</script>