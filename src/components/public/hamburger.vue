<template>
  <button
    @click="toggleModelValue"
    :class="[devideNum === 3 ? 'three-fillings' : 'two-fillings', { 'open': modelValue }, { 'open-style__line': openStyle === 'line' }, { 'open-style__cross': openStyle === 'cross' }]"
    class="hamburger"
  >
    <span class="ham-filling"></span>
    <span class="ham-filling"></span>
    <span
      v-show="devideNum === 3"
      class="ham-filling"
    ></span>
  </button>
</template>
<script setup>
import { ref } from 'vue'

const props = defineProps({
  modelValue: Boolean,
  devideNum: {
    type: Number,
    default: 3
  },
  openStyle: {
    type: String,
    default: 'line'
  }
})
const emits = defineEmits(['update:modelValue'])

const toggleModelValue = () => {
  emits('update:modelValue', !props.modelValue)
}

</script>