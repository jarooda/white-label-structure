// server/routes/robots.txt.ts
export default defineEventHandler(async (event) => {
  // Access the config from Nuxt's state
  const query = getQuery(event)
  const client = query.client || "client-a"

  const config:any = await $fetch(`http://localhost:4000/${client}`)
  // Fallback if no config is found
  if (!config) {
    return new Response("robots.txt not available", { status: 500 })
  }

  // Now generate the robots.txt
  const robots = config.robots || []

  const robotsText = robots
    .map((robot: any) => {
      const userAgent = `User-agent: ${robot["User-agent"]}`
      const disallow = (robot.Disallow || [])
        .map((path: string) => `Disallow: ${path}`)
        .join("\n")
      const allow = (robot.Allow || [])
        .map((path: string) => `Allow: ${path}`)
        .join("\n")
      return [userAgent, disallow, allow].filter(Boolean).join("\n")
    })
    .join("\n\n")

  return new Response(robotsText, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "no-store"
    }
  })
})
