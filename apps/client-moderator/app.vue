<script setup lang="ts">
const config = useConfigStore()
// You might choose this based on an API call or logged-in status
const layout = config.theme.layout || ("default" as any) // default layout;

useHead({
  link: [
    {
      rel: "icon",
      href: config.favicon
    }
  ],
  title: config.name,
  meta: [
    {
      name: "description",
      content: config.description
    }
  ]
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>
