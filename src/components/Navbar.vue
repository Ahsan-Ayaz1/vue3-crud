<template>
  <nav class="bg-gray-200 p-6 grid grid-cols-3">
    <RouterLink :to="{ name: 'Home' }" class="col-span-1">
      Home
    </RouterLink>
    
    <RouterLink :to="{ name: 'Blog' }" class="col-span-1">
      Blog
    </RouterLink>

    <div class="col-span-1 flex justify-end items-center">
      <RouterLink :to="{ name: 'CreateBlog' }">
        <button class="border py-2 px-4 rounded border-gray-500">Create Blog</button>
      </RouterLink>
    </div>
  </nav>
</template>