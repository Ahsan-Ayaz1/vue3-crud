<template>
    <div v-for="item in data" :key="item.id" class="flex flex-col text-center justify-center mt-20">
        <RouterLink :to="{ name: 'PostDetail', params: { id: item.id } }" class="text-2xl font-bold">{{ item.title }}
        </RouterLink>
        <p>{{ item.description }}</p>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router';
import { getPosts } from '../composables/Post'

const data = ref('')
const allBlog = () => {
    getPosts().then((res) => {
        data.value = res.data
    })
}

onMounted(() => {
    allBlog()
})
</script>