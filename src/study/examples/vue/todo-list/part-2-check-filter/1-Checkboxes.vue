<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

/* 
    Что здесь интересного: новые приёмы 

    1. v-model для чекбокса
    2. Привязка классов через v-bind
    3. Как не нужно делать: js-style добавления классов
*/


let persons = ref([
    { name: 'Damir', age: 22, checked: true },
    { name: 'Tesla', age: 18, checked: false },
    { name: 'Tesla 2', age: 44, checked: true },
    { name: 'Alex', age: 15, checked: false },
])

/* ВОТ ТАК НЕ НУЖНО ДЕЛАТЬ (JS STYLE) */
// onMounted(() => {
//     let inputs = document.querySelectorAll('input');
//     console.log('inputs: ', inputs);
    
//     inputs.forEach((input) => {
//         if(input.checked) {
//             input.parentNode.classList.add('checked')
//         }
//     })
// })

</script>

<template>

    <ul>
        <li v-for="person in persons" :key="person.name" :class="{ 'checked': person.checked }">
            <p><input type="checkbox" v-model="person.checked"> Name: {{ person.name }}</p>
            <p>age: {{ person.age }}</p>

        </li>
    </ul>
</template>

<style lang="scss" scoped>
ul {
    list-style: none;
}
.checked {
    text-decoration: line-through;
}
</style>