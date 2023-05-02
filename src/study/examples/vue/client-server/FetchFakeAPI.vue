<script setup lang="ts">
import { ref } from 'vue';

let books = ref([]);
let serverURL = 'https://fakerapi.it/api/v1/books?_quantity=2';

async function loadBooks() {
    let response = await fetch(serverURL);
    console.log('response: ', response); // на руках объект Response

    books.value = await response.json();
    console.log('books.value: ', books.value);
}

function two() {
    // будет работать при loadBooks
}

fetch(serverURL) // нужно для отправки запроса

</script>

<template>
    <h1>Fetch example</h1>
    <button @click="loadBooks">Load data from Fake API</button>

    <ul>
        <li v-for="book in books">{{ book }}</li>
    </ul>
</template>

<style lang="scss" scoped>
h1 {
    margin: 0 0 .25em 0;
}
</style>