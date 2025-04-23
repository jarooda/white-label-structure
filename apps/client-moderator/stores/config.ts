export const useConfigStore = defineStore("configStore", {
  state: () =>
    ({
      id: "",
      name: "",
      logo: "",
      favicon: "",
      description: "",
      theme: {
        primaryColor: "",
        layout: ""
      },
      glossary: {
        hello: "",
        goodbye: "",
        thank_you: ""
      },
      features: [] as number[]
    } ),
  actions: {
    async fetch(client: string) {
      const configs: any = await $fetch(`http://localhost:4000/${client}`)

      if (configs) {
        return configs
      } else {
        return {
          id: "client-a",
          name: "",
          logo: "",
          favicon: "",
          description: "",
          theme: {
            primaryColor: "",
            layout: ""
          },
          glossary: {
            hello: "",
            goodbye: "",
            thank_you: ""
          },
          features: [] as number[]
        }
      }
    },
    setState ( state: any ) {
      this.id = state.id
      this.name = state.name
      this.logo = state.logo
      this.favicon = state.favicon
      this.description = state.description
      this.theme.primaryColor = state.theme.primaryColor
      this.theme.layout = state.theme.layout
      this.glossary.hello = state.glossary.hello
      this.glossary.goodbye = state.glossary.goodbye
      this.glossary.thank_you = state.glossary.thank_you
      this.features = state.features
    }
  }
})
