<template>
    <div class="flex flex-col text-center justify-center mt-20">
        <h3 class="font-bold text-3xl">{{ postData.title }}</h3>
        <p>{{ postData.description }}</p>
        <div class="flex flex-row gap-4 mx-auto w-1/12 mt-4">
            <button
                class=" py-2 px-4 rounded hover:bg-red-500 hover:text-white hover:border-none border-gray-500">Delete</button>
            <button
                class=" py-2 px-4 hover:bg-green-500 hover:text-white hover:border-none rounded border-gray-500">Update</button>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getPost } from '../composables/Post';

const route = useRoute()
const id = route.params.id
console.log(id)
const postData = ref('')

const postDetail = () => {
    getPost(id).then((res) => {
        postData.value = res.data
    })
}

onMounted(() => {
    postDetail()
})
</script>