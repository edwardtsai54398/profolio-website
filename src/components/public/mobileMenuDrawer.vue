<template>
  <div
    :style="{ 'zIndex': zIndex, height: !heightIs100Vh ? 'fit-content' : '100vh' }"
    :class="[direction, { open: modelValue, }]"
    class="mobile-menu__drawer padding-top"
  >
    <ul class="mobile-menu__nav-list">
      <li
        v-for="item in menu"
        :key="item.path"
        class="mobile-menu__nav-item"
      >
        <a
          v-if="toId"
          :href="item.path"
          @click=";[scrollToIdSmooth($event, item.path), emitModelValue()]"
        >{{ item.label }}</a>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import scrollToIdSmooth from '@/utils/scrollToIdSmooth.js'

defineProps({
  modelValue: Boolean,
  menu: Array,
  zIndex: {
    type: Number,
    default: 1000
  },
  direction: {
    type: String,
    default: 'ttb'
  },
  heightIs100Vh: {
    type: Boolean,
    default: true
  },
  toId: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['update:modelValue'])
const emitModelValue = () => {
  emits('update:modelValue', false)
}
</script>