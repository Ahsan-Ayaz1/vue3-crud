<template>
    <div class="flex justify-center mt-10" v-if="successMsg">
        {{ successMsg }}
    </div>
    <div class="flex justify-center font-bold text-3xl mt-20">
        <FormKit type="form" submit-label="Create Blog" @submit="createPost">
            <FormKit name="title" label="Title" validation="required" />
            <FormKit type="textarea" name="description" label="Description" validation="required" />
        </FormKit>
    </div>
</template>

<script setup>
import { savePost } from '../composables/Post'
import { ref } from 'vue'

const successMsg = ref('')

const createPost = (postinfo) => {
    savePost(postinfo).then((res) => {
        console.log(res.data)
        if (res.status === 201) {
            successMsg.value = 'Blog Created Successfully'

            setTimeout(() => {
                successMsg.value = '';
            }, 1000);
        }
    })
}
</script>