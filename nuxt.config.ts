// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { href: 'https://fonts.googleapis.com/css2?family=Jersey+10&family=Limelight&family=Space+Grotesk:wght@300..700&display=swap' },
        { href: 'https://fonts.googleapis.com/css2?family=Jersey+10&family=Limelight&family=Noto+Sans+JP:wght@100..900&family=Space+Grotesk:wght@300..700&display=swap'}
     ]
    }
  },

  modules: ['@nuxt/image']
})