<script setup lang="ts">
    // Toggle Mobile Menu
    const open = ref(false)
</script>

<template>
    <header class="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <nav class="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8">
            <div class="flex lg:flex-1">
                <NuxtLink to="/" class="-m-1.5 p-1.5">
                    <span class="font-bold">NUXT BLOG</span>
                </NuxtLink>
            </div>
            
            <div class="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-12">
                <NuxtLink to="/" class="text-sm font-semibold leading-6 text-gray-900">Home</NuxtLink>
                <NuxtLink to="/categories" class="text-sm font-semibold leading-6 text-gray-900">Categories</NuxtLink>
                <NuxtLink to="/contact" class="text-sm font-semibold leading-6 text-gray-900">Contact</NuxtLink>
            </div>

            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                <NuxtLink to="/login" class="text-sm font-semibold leading-6 text-gray-900">Login</NuxtLink>
            </div>

            <!-- Mobile MENU Button-->
            <div class="flex lg:hidden">
                <button class="p-2" @click="open = !open">
                    <svg v-if="open" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            <!-- Mobile Menu -->
            <Transition name="slide">
                <div v-if="open" class="fixed top-[72px] z-10 left-0 right-0 bg-white border-t shadow-lg lg:hidden">
                    <div class="flex flex-col space-y-4 px-6 py-4">
                        <NuxtLink to="/" class="text-sm font-semibold leading-6 text-gray-900">Home</NuxtLink>
                        <NuxtLink to="/categories" class="text-sm font-semibold leading-6 text-gray-900">Categories</NuxtLink>
                        <NuxtLink to="/contact" class="text-sm font-semibold leading-6 text-gray-900">Contact</NuxtLink>
                        <NuxtLink to="/login" class="text-sm font-semibold leading-6 text-gray-900">Login</NuxtLink>
                    </div>
                </div>
            </Transition>
            
        </nav>
    </header>

    <!-- Spacer to prevent content from hiding under fixed header -->
    <div class="h-[70px]"></div>
</template>

<style scoped>

</style>