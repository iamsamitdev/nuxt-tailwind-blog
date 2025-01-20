<script setup lang="ts">
    defineProps<{
       title: string;
       excerpt?: string;
       image?: string;
       slug?: string;
    }>()
</script>

<template>
    <div class="grid overflow-hidden rounded shadow-xl group">
        <NuxtLink
                :to="`/${slug}`"
                class="inline-block mb-2">
            <div
                v-if="image"
                class="grid__image h-[180px] w-full relative overflow-hidden"
            >
                <img 
                    :src="image" 
                    :alt="title" 
                    class="absolute object-cover w-full h-full duration-300 group-hover:scale-110"
                >
            </div>
        </NuxtLink>
        <div class="p-5">
            <NuxtLink
                :to="`/${slug}`"
                class="inline-block mb-2">
                <h3 class="mb-2 text-xl font-semibold">
                {{ title }}
                </h3>
            </NuxtLink>
            <ClientOnly>
                <p
                    v-if="excerpt"
                    v-html="excerpt"
                    class="mb-2 overflow-hidden text-sm text-clip"
                >
                </p>
            </ClientOnly>
            <NuxtLink
                v-if="slug"
                :to="`/${slug}`"
                class="inline-flex items-center border-b-2 border-primary-500"
                >Read more
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>

</style>