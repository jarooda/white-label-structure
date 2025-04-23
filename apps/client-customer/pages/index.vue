<script setup>
const config = useConfigStore()
import ColorPallete from '@shared/ui/ColorPallete.vue';
import MyInvoice from '~/components/MyInvoice.vue';

const hue = ref(config.theme.primaryColor)
</script>

<template>
  <div>
    Hello this is client-customer from client
    <MyInvoice />
    <ColorPallete :hue="hue" />
  </div>
</template>