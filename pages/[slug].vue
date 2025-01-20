<script setup lang="ts">
    // อ่าน params จาก URL
    const params: any = useRoute().params
    console.log(params)

    // อ่าน post จาก API
    const { data: posts } = await useWPAPI().getPost(params.slug)
    const post = posts.value?.[0]

    // console.log(post?.title.rendered)

    useHead({
        title: post?.title.rendered,
        meta: [
            {
                name: 'description',
                content: `This is the ${post?.title.rendered} page`
            },
            {
                name: 'keywords',
                content: `${post?.title.rendered}, Nuxt 3, Learning Nuxt 3`
            }
        ]
    })
    
</script>

<template>
    <section class="p-6 mx-auto max-w-7xl lg:px-8">
        <div class="my-6">
            <div v-if="post">
                <!-- Blog Title -->
                <ClientOnly>
                    <h1 class="mb-5 text-3xl font-bold leading-snug text-center" v-html="post.title.rendered"></h1>
                </ClientOnly>
                <!-- Blog Meta -->
                <div class="flex justify-center gap-5 mb-10">
                    Written by: <span class="text-gray-500">{{post._embedded["author"][0]?.name}}</span>
                    Published on:<span class="text-gray-500">{{ post.date }}</span>
                </div>
                <!-- Blog Image -->
                <div class="h-[250px] sm:h-[500px] w-full rounded shadow-xl relative overflow-hidden mb-12">
                    <img
                        :src="post._embedded['wp:featuredmedia'][0]?.source_url"
                        :alt="post.title.rendered"
                        class="absolute object-cover w-full h-full"
                    />
                </div>
                <!-- Blog Content -->
                <ClientOnly><div class="blog__content" v-html="post.content.rendered"></div></ClientOnly>
            </div>
        </div>
    </section>
</template>

<style>
    .blog__content p {
        @apply my-5;
    }

    .blog__content h2 {
        @apply text-xl sm:text-3xl my-5;
    }
</style>