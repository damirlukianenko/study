<script setup lang="ts">
const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

let response = fetch(postsUrl);
console.log('response: ', response);

</script>

<template>

</template>

<style scoped>

</style>