<script setup lang="ts">
const postsUrl = 'https://google.com';

async function getData() {
    let response = await fetch(postsUrl);
    console.log('Сразу получили ответ: ', response);
}
getData();

</script>

<template>
    <h2>Async / await функции</h2>
    <h3>Открой консоль и чекни примеры</h3>
</template>

<style scoped>

</style>