<script setup lang="ts">

    const { data: categories } = await useWPAPI().getCategories()

    useHead({
        title: 'categories',
        meta: [
            {
                name: 'description',
                content: 'This is the categories page'
            },
            {
                name: 'keywords',
                content: 'categories, Nuxt 3, Learning Nuxt 3'
            }
        ]
    })

</script>

<template>
    <section>
        <div class="p-6 mx-auto max-w-7xl lg:px-8">
            <div class="my-6">
                <NuxtLink 
                    v-for="category in categories"
                    :key="category.id"
                    :to="`/categories/${category.slug}`"
                    class="p-2 m-2 badge badge-primary badge-lg">
                    # {{ category.name }}
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>