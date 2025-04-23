<script setup>
const config = useConfigStore()
import ColorPallete from '@shared/ui/ColorPallete.vue';
import ListInvoices from '~/components/ListInvoices.vue';

const hue = ref(config.theme.primaryColor)
</script>

<template>
  <div>
    Hello this is client-moderator from client
    <ListInvoices />
    <ColorPallete :hue="hue" />
  </div>
</template>