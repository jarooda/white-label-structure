<template>
  <div class="side-by-side">
    <p>Some side-by-side layout content shared across all pages</p>
    <slot />
  </div>
</template>

<style scoped>
.side-by-side {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>