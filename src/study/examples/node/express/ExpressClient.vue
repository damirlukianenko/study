<script setup>
import { ref } from 'vue';

let serverUrl = 'http://localhost:3000';

// let homer = ref('');

async function getServerData(url) {
    let response = await fetch(url);
    // homer.value = await response.json();
    let serverData = await response.json();
    // console.log('serverData: ', serverData);
    
    return serverData;
}

// getServerData(serverUrl);

let serverData = await getServerData(serverUrl);

// serverData.then((promiseValue) => {
//     console.log('value: ', promiseValue);
// })

// console.log('serverData: ', serverData);


</script>

<template>
    <h2>Express Client</h2>
    <h3>Тестируй код, смотри примеры</h3>

    {{ serverData.data }}
</template>

<style lang="scss" scoped></style>