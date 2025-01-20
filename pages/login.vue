<script setup>
const form = ref({
    name: '',
    email: '',
    password: ''
})

const handleSubmit = () => {
    // จัดการการ submit form ที่นี่
    console.log(form.value)
}

useHead({
        title: 'Login',
        meta: [
            {
                name: 'description',
                content: 'This is the Login page'
            },
            {
                name: 'keywords',
                content: 'Login, Nuxt 3, Learning Nuxt 3'
            }
        ]
})
</script>

<template>
    <div class="flex items-center justify-center py-10 bg-gray-50">
        <div class="flex flex-col w-full max-w-md overflow-hidden bg-white rounded-lg shadow-lg md:max-w-4xl md:flex-row">
            <div class="hidden md:block md:w-1/2">
                <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1470&auto=format&fit=crop"
                    alt="Mountain landscape"
                    class="object-cover w-full h-full" />
            </div>

            <div class="w-full p-8 md:w-1/2">
                <div class="max-w-md mx-auto">
                    <div class="mb-8 text-center">
                        <div class="flex justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="w-8 h-8"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor">
                                <circle cx="12"
                                    cy="7"
                                    r="4" />
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            </svg>
                        </div>
                        <h2 class="text-2xl font-semibold">Signup new account</h2>
                    </div>

                    <form @submit.prevent="handleSubmit"
                        class="space-y-4">
                        <div>
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text"
                                v-model="form.name"
                                placeholder="name"
                                class="w-full input input-bordered" />
                        </div>

                        <div>
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email"
                                v-model="form.email"
                                placeholder="email"
                                class="w-full input input-bordered" />
                        </div>

                        <div>
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password"
                                v-model="form.password"
                                placeholder="password"
                                class="w-full input input-bordered" />
                        </div>

                        <button class="w-full btn btn-primary">Login</button>

                        <button class="flex items-center justify-center w-full gap-2 btn btn-outline">
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg"
                                alt="Google"
                                class="w-5 h-5" />
                            Login with Google
                        </button>

                        <div class="mt-4 text-center">
                            <a href="#"
                                class="text-sm text-gray-600 hover:underline">
                                Login to existing account
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
