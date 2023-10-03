<template>
    <div class="flex justify-center font-bold text-3xl mt-20">
        <FormKit type="form" submit-label="Update Blog" @submit="editPost">
            <FormKit name="title" label="Title" validation="required" v-model="title" />
            <FormKit type="textarea" name="description" label="Description" validation="required" v-model="description" />
        </FormKit>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getPost, updatePost } from '../composables/Post';

const route = useRoute()
const id = route.params.id
const title = ref('')
const description = ref('')

const postDetail = () => {
    getPost(id).then((res) => {
        const postData = res.data;
        title.value = res.data.title
        description.value = res.data.description
    })
}

onMounted(() => {
    postDetail()
})

const editPost = async () => {
    const postData = {
        title: title.value,
        description: description.value,
    };

    try {
        await updatePost(id, postData);
    } catch (error) {
        console.log(error)
    }
}
</script>