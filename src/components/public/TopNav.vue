<template>
  <div class="topnav_container">
    <div
      class="topnav_logo"
      :class="[
        `order-${order.findIndex((item) => item == 'logo')}`,
        { 'center-left': order.findIndex((item) => item == 'logo') == 1 && center == 'left' },
        { 'center-center': order.findIndex((item) => item == 'logo') == 1 && center == 'center' },
        { 'center-right': order.findIndex((item) => item == 'logo') == 1 && center == 'right' },
      ]"
    >
      <slot name="logo"></slot>
    </div>
    <ul
      class="topnav_nav_list"
      :class="[
        `order-${order.findIndex((item) => item == 'nav')}`,
        { 'center-left': order.findIndex((item) => item == 'nav') == 1 && center == 'left' },
        { 'center-center': order.findIndex((item) => item == 'nav') == 1 && center == 'center' },
        { 'center-right': order.findIndex((item) => item == 'nav') == 1 && center == 'right' },
      ]"
    >
      <li
        v-for="item in navList"
        :key="item.path"
        class="topnav_nav_item"
      >
        <a
          v-if="toId"
          :href="item.path"
          @click="scrollToIdSmooth($event, item.path)"
        >{{ item.label }}</a>
      </li>
    </ul>
    <div
      class="topnav_functions"
      :class="[
        `order-${order.findIndex((item) => item == 'func')}`,
        { 'center-left': order.findIndex((item) => item == 'func') == 1 && center == 'left' },
        { 'center-center': order.findIndex((item) => item == 'func') == 1 && center == 'center' },
        { 'center-right': order.findIndex((item) => item == 'func') == 1 && center == 'right' },
      ]"
    >
      <slot name="function"></slot>
    </div>
  </div>
</template>
<script setup>
import navList from '@/utils/navList'
import scrollToIdSmooth from '@/utils/scrollToIdSmooth.js'

defineProps({
  order: {
    type: Array,
    default: () => ['logo', 'nav', 'func']
  },
  center: {
    type: String,
    default: 'right'
  },
  toId: {
    type: Boolean,
    default: false
  }
})


</script>