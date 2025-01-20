<script setup lang="ts">

    // อ่าน params จาก URL
    const params = useRoute().params

    // อ่าน category จาก api
    const { data: categories } = await useWPAPI().getCategory(params.slug as string)

    // กำหนด category ให้กับ data
    const category = categories.value[0]

    // อ่าน posts จาก api
    const { data: posts } = await useWPAPI().getPosts(category.id)

    useHead({
        title: category.name,
        meta: [
            {
                name: 'description',
                content: `This is the ${category.name} page`
            },
            {
                name: 'keywords',
                content: `${category.name}, Nuxt 3, Learning Nuxt 3`
            }
        ]
    })
   
</script>

<template>
    <div class="p-6 mx-auto max-w-7xl lg:px-8">
        <div class="my-6">
            <div v-if="posts?.length==0">
                <h1 class="text-2xl font-bold text-center">ไม่พบบทความในหมวดหมู่นี้</h1>
            </div>
            <div class="grid gap-10 sm:grid-cols-3">
                <BlogGrid 
                    v-for="post in posts" 
                    :key="post.id" 
                    :title="post.title.rendered" 
                    :excerpt="post.excerpt.rendered" 
                    :image="post._embedded['wp:featuredmedia'][0]?.source_url"
                    :slug="post.slug" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>