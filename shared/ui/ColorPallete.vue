<script setup>
const props = defineProps({
  hue: "string"
})
const primaryColor = ref({})
const primaryColorDark = ref({})

const baseSaturation = 80
const baseLightness = 50

function generateColorScale(h, s, l, type = "light") {
  if (type === "light") {
    return {
      100: `hsl(${h}, ${s - 30}%, 95%)`,
      200: `hsl(${h}, ${s - 25}%, 88%)`,
      300: `hsl(${h}, ${s - 15}%, 75%)`,
      400: `hsl(${h}, ${s - 5}%, 60%)`,
      500: `hsl(${h}, ${s}%, ${l}%)`,
      600: `hsl(${h}, ${s + 5}%, 40%)`,
      700: `hsl(${h}, ${s + 10}%, 30%)`,
      800: `hsl(${h}, ${s + 15}%, 22%)`,
      900: `hsl(${h}, ${s + 20}%, 15%)`
    }
  } else {
    return {
      100: `hsl(${h}, ${s + 20}%, 15%)`,
      200: `hsl(${h}, ${s + 15}%, 22%)`,
      300: `hsl(${h}, ${s + 10}%, 30%)`,
      400: `hsl(${h}, ${s + 5}%, 40%)`,
      500: `hsl(${h}, ${s}%, ${l}%)`,
      600: `hsl(${h}, ${s - 5}%, 60%)`,
      700: `hsl(${h}, ${s - 15}%, 75%)`,
      800: `hsl(${h}, ${s - 25}%, 88%)`,
      900: `hsl(${h}, ${s - 30}%, 95%)`
    }
  }
}

watchEffect(() => {
  primaryColor.value = generateColorScale(
    props.hue,
    baseSaturation,
    baseLightness,
    "light"
  )
  primaryColorDark.value = generateColorScale(
    props.hue,
    baseSaturation,
    baseLightness,
    "dark"
  )
})
</script>

<template>
  <div>
    <h2>Color Palette</h2>
    <div class="bg-light">
      <h3>Light Theme</h3>
      <div
        v-for="(color, index) in primaryColor"
        :key="index"
        :class="`square`"
        :style="`background-color: ${color}`"
      >
        <p>primary-{{ index }}</p>
        {{ color }}
      </div>
    </div>

    <div class="bg-dark">
      <h3>Dark Theme</h3>
      <div
        v-for="(color, index) in primaryColorDark"
        :key="index"
        :class="`square`"
        :style="`background-color: ${color}`"
      >
        <p>primary-{{ index }}</p>
        {{ color }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.square {
  width: 100px;
  height: 100px;
  margin: 10px;
  display: inline-block;
  border-radius: 8px;
}
.bg-dark {
  background-color: #000;
  color: #fff;
}
.bg-light {
  background-color: #fff;
  color: #000;
}
</style>
