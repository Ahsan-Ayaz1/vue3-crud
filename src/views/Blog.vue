<template>
    <div v-for="item in data" :key="item.id" class="flex flex-col text-center justify-center mt-20">
        <h3 class="text-2xl font-bold">{{ item.title }}</h3> 
        <p>{{ item.description }}</p>
        <div class="flex flex-row gap-4 mx-auto w-1/12 mt-4">
            <button class=" py-2 px-4 rounded hover:bg-red-500 hover:text-white hover:border-none border-gray-500">Delete</button>
            <button class=" py-2 px-4 hover:bg-green-500 hover:text-white hover:border-none rounded border-gray-500">Update</button>
        </div>
    </div>    
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Blogs from '../composables/GetBlog'
import { RouterLink } from 'vue-router';

const { getBlog  } = Blogs()
const data = ref('')

const allBlog = () => {
    getBlog().then((res) =>{
        data.value = res.data
    })
}

onMounted(() =>{
    allBlog()
})
</script>