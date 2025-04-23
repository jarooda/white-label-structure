import { getQuery } from 'h3'

export default defineNuxtPlugin(async (nuxtApp) => {
  const event = nuxtApp.ssrContext?.event
  if (!event) {
    return
  }
  const configStore = useConfigStore()
  const query = getQuery(event)
  const client = query.client || 'client-a'
  
  const config = await configStore.fetch(client as string)
  configStore.setState(config)
})