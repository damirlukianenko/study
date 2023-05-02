<script setup lang="ts">
import { ref } from 'vue';

/* 
    Новые приёмы:

    1. Метод filter()
    2. Перезапись сущесвтующего массива 
    
*/


let persons = ref([
    { name: 'Damir', age: 32 },
    { name: 'Alex', age: 111 },
    { name: 'Tesla', age: -150 },
    { name: 'Tesla', age: -32 },
    { name: 'Tesla', age: -0.5 },
])

function filterData() {
    persons.value = persons.value.filter((person) => person.age > 0)
}

</script>

<template>
    <button @click="filterData">Filter Data</button>

    <ul>
        <li v-for="person in persons" :key="person">
            <p>Name: {{ person.name }}</p>
            <p>age: {{ person.age }}</p>
            
        </li>
    </ul>
</template>

<style lang="scss" scoped>
ul {
    list-style: none;
}
</style>