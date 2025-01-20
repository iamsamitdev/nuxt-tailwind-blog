// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
      '@nuxt/icon',
      [
        '@nuxtjs/robots',
        {
          UserAgent: '*',
          Disallow: '',
          Sitemap: 'https://www.itgenius.co.th/sitemap.xml'
        }
      ]
  ],
  runtimeConfig: {
    public: {
      wpUrlAPI: process.env.WP_URL_API || 'https://www.itgenius.co.th/sandbox_api/flutter_news_api',
    }
  }
})
