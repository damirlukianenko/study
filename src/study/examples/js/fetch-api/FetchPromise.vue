<script setup lang="ts">
const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

let promise = fetch(postsUrl);
promise.then((value) => {
    let response = value;
    let data = response.json();
})

</script>

<template>
    <h2>Промисы</h2>
    <h3>Открой консоль и чекни примеры</h3>
</template>

<style scoped>

</style>