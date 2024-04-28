<template>
  <div class="mouse-scroll">
    <div class="mouse"></div>
    <font-awesome-icon
      class="down-icon"
      icon="fa-solid fa-angles-down"
      size="lg"
    />
  </div>
</template>
<script setup>


</script>
<style lang="scss">
.intro_section {
  position: relative;
}

@keyframes scrolldown {
  0% {
    opacity: 0;
    transform: translateY(-75%);
  }

  40% {
    opacity: 1;
    transform: translateY(0%);

  }

  70% {
    opacity: 1;
    transform: translateY(0%);
  }

  100% {
    opacity: 0;

  }
}

.mouse-scroll {
  position: absolute;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .mouse {
    width: 28px;
    height: 44px;
    border: 3px solid var(--primary);
    border-radius: 15px;
    position: relative;
    margin-bottom: 10px;

    &::before {
      content: '';
      width: 6px;
      height: 6px;
      background-color: var(--primary);
      border-radius: 50%;
      position: absolute;
      top: 6px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .down-icon {
    animation: scrolldown 2s infinite;
  }
}
</style>