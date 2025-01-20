<script setup lang="ts">
// กำหนดข้อมูลสำหรับเมนู Footer
const footerMenus = {
  features: {
    title: 'Features',
    items: [
      { name: 'Overview', path: '' },
      { name: 'Automation', path: '' },
      { name: 'Intelligent Personalization', path: '' },
      { name: 'Predictive Analytics', path: '' },
    ]
  },
  solutions: {
    title: 'Solutions',
    items: [
      { name: 'Use Cases', path: '' },
      { name: 'Case Studies', path: '' },
      { name: 'Integrations', path: '' },
      { name: 'Forum', path: '' },
    ]
  },
  resources: {
    title: 'Resources',
    items: [
      { name: 'Blog', path: '' },
      { name: 'Whitepapers', path: '' },
      { name: 'Webinars', path: '' },
      { name: 'Newsroom', path: '' },
    ]
  },
  company: {
    title: 'Company',
    items: [
      { name: 'Landing', path: '' },
      { name: 'Our Team', path: '' },
      { name: 'Blogs', path: '' },
      { name: 'FAQs', path: '' },
      { name: 'Contact', path: '' },
    ]
  },
  quickLinks: {
    title: 'Quick Links',
    items: [
      { name: 'Features', path: '' },
      { name: 'Pricing', path: '' },
      { name: 'Products', path: '' },
    ]
  }
}

// กำหนด Social Media Links
const socialLinks = [
  { icon: 'mdi:facebook', url: '' },
  { icon: 'mdi:instagram', url: '' },
  { icon: 'mdi:dribbble', url: '' },
  { icon: 'mdi:linkedin', url: '' },
  { icon: 'mdi:email', url: '' },
]
</script>

<template>
  <footer class="bg-base-200 text-base-content">
    <!-- Top Section with Logo and Social Links -->
    <div class="px-4 pt-8 pb-4 mx-auto max-w-7xl">
      <div class="flex items-center justify-between mb-8">
        <NuxtLink to="/" class="text-2xl font-bold">NUXT BLOG</NuxtLink>
        <div class="flex gap-4">
          <a v-for="social in socialLinks" 
             :key="social.url" 
             :href="social.url" 
             class="btn btn-ghost btn-circle">
            <Icon :name="social.icon" class="w-5 h-5"/>
          </a>
        </div>
      </div>

      <!-- Email Subscription -->
      <div class="flex justify-end mb-8">
        <div class="join">
          <input type="email" placeholder="email@ai.com" class="input join-item" />
          <button class="btn join-item">Download</button>
        </div>
      </div>

      <!-- Menu Links -->
      <div class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
        <div v-for="(menu, key) in footerMenus" :key="key">
          <h3 class="mb-4 font-semibold">{{ menu.title }}</h3>
          <ul class="space-y-2">
            <li v-for="item in menu.items" :key="item.name">
              <NuxtLink :to="item.path" class="transition-colors duration-200 hover:text-primary">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.btn-circle {
  @apply w-10 h-10;
}
</style>