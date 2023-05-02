<script setup lang="ts">

/* 
    Включай console.log(), смотри, как работает код 
*/

let storage = window.localStorage;

/* запись и удаление, как в обычном объекте */
storage.someData = 'text';
delete storage.someData;
// console.log('storage: ', storage);


/* с массивами всё не так просто */
for (const key in storage) {
    const element = storage[key];
    // console.log('element: ', element);
}

/* Способ перебора #1. storage.key() */

for (let i = 0; i < storage.length; i++) {
    let key = storage.key(i);
    // console.log('key: ', key);
    // console.log('element 2: ', storage[key]);
}

/* Способ перебора #2. storage.key() */

let keys = Object.keys(storage);

for (let key of keys) {
    // console.log('key 2: ', storage[key]);
}
// сохраняем ключи в массив
// перебираем ключи как обычный массив

/* Запись данных не работает */
let countriesByPopulationObject = {
    'China': 1411750000,
};
let countriesByPopulation = [
    'China',
    'India',
];

storage.countries = countriesByPopulation;
storage.countriesObj = countriesByPopulationObject;
// console.log('storage: ', storage);




</script>

<template>
    <h2>LocalStorage</h2>
    <h3>Меняй код, смотри вывод в консоли</h3>
</template>

<style scoped></style>