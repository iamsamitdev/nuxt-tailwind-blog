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
</script>

<template>
    <div class="py-10 flex items-center justify-center bg-gray-50">
        <div class="max-w-md md:max-w-4xl w-full flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="hidden md:block md:w-1/2">
                <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1470&auto=format&fit=crop"
                    alt="Mountain landscape"
                    class="w-full h-full object-cover" />
            </div>

            <div class="w-full md:w-1/2 p-8">
                <div class="max-w-md mx-auto">
                    <div class="text-center mb-8">
                        <div class="flex justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="h-8 w-8"
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
                                class="input input-bordered w-full" />
                        </div>

                        <div>
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email"
                                v-model="form.email"
                                placeholder="email"
                                class="input input-bordered w-full" />
                        </div>

                        <div>
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password"
                                v-model="form.password"
                                placeholder="password"
                                class="input input-bordered w-full" />
                        </div>

                        <button class="btn btn-primary w-full">Login</button>

                        <button class="btn btn-outline w-full flex items-center justify-center gap-2">
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg"
                                alt="Google"
                                class="w-5 h-5" />
                            Login with Google
                        </button>

                        <div class="text-center mt-4">
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
