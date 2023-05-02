<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

/* 
    Что здесь нового?

    1. Кнопка очистки фильтров: обнуляем переменную (хитрость без костылей)
    2. Условие вывода. Мы обнуляем переменную и на выводе в HTML вешаем доп. проверку: если blat == null ? persons

*/

let blat = ref(null);

let persons = ref([
    { name: 'Damir', age: 22, blat: false, checked: true },
    { name: 'Tesla', age: 18, blat: false, checked: false },
    { name: 'Tesla 2', age: 44, blat: true, checked: true },
    { name: 'Alex', age: 15, blat: true, checked: false },
])

let filteredPersons = computed(() => {
    return persons.value.filter((person) => person.blat == blat.value)
})

</script>

<template>
    <button @click="blat = !blat">{{ blat ? "Не блотные" : "Блотные" }}</button>
    <button @click="blat = null">Скинуть фильтры</button>

    <ul>
        <li v-for="person in (blat == null) ? persons : filteredPersons" :key="person">
            <p><input type="checkbox" v-model="person.checked" > Name: {{ person.name }}</p>
            <p>age: {{ person.age }}</p>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
ul {
    list-style: none;
}
</style>