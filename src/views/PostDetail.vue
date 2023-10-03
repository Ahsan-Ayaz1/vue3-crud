<template>
    <div v-if="postData" class="flex flex-col text-center justify-center mt-20">
        <h3 class="font-bold text-3xl">{{ postData.title }}</h3>
        <p>{{ postData.description }}</p>
        <div class="flex flex-row gap-4 mx-auto w-1/12 mt-4">
            <button @click="removePost"
                class=" py-2 px-4 rounded hover:bg-red-500 hover:text-white hover:border-none border-gray-500">Delete</button>
            <RouterLink :to="{ name: 'UpdatePost', params: { id: postData.id } }"
                class=" py-2 px-4 hover:bg-green-500 hover:text-white hover:border-none rounded border-gray-500">Update
            </RouterLink>
        </div>
    </div>
    <div v-else class="flex flex-col text-center justify-center mt-20 font-bold text-3xl">
        No Post having id {{ id }}
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getPost, deletePost } from '../composables/Post';

const route = useRoute()
const id = route.params.id
const postData = ref('')

const postDetail = () => {
    getPost(id).then((res) => {
        console.log(res.data)
        postData.value = res.data
    })
}

const removePost = () => {
    deletePost(id).then((res) => {
        if (res.status === 200) {
            postDetail()
        }
    })
}

onMounted(() => {
    postDetail()
})
</script>