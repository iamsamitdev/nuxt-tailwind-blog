<script setup lang="ts">
   
    // const posts: any = useFetch(`https://www.itgenius.co.th/sandbox_api/flutter_news_api/wp-json/wp/v2/posts`)

    // console.log(posts.data.value)

    const { data: posts, error } = await useWPAPI().getPosts()

    useHead({
        title: 'Home',
        meta: [
            {
                name: 'description',
                content: 'This is the home page'
            },
            {
                name: 'keywords',
                content: 'Home, Nuxt 3, Learning Nuxt 3'
            }
        ]
    })
   
</script>

<template>
    <div class="p-6 mx-auto max-w-7xl lg:px-8">
        <div class="my-6">
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