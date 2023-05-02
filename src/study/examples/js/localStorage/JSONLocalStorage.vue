<script setup lang="ts">

/* 
    Включай console.log(), смотри, как работает код 
*/

let storage = window.localStorage;

let countries = [
    'China',
    'India',
];

let countriesPopulation = {
    'China': 1411750000,
    'China 2': 1413750000,
};

let countriesString = JSON.stringify(countries);
let countriesObjString = JSON.stringify(countriesPopulation);

console.log('data: ', countriesString);
console.log('data: ', countriesObjString);
console.log('typeof: ', typeof countriesString, ',', typeof countriesObjString);

storage.countries = countriesString;
storage.countriesPopulation = countriesObjString;

console.log('storage: ', storage);

let countriesArrayAgain = JSON.parse(localStorage.countries);
let countriesObjectAgain = JSON.parse(localStorage.countriesPopulation);

console.log('countriesArrayAgain: ', countriesArrayAgain);
console.log('countriesObjectAgain: ', countriesObjectAgain);


</script>

<template>
    <h2>JSON + LocalStorage</h2>
    <h3>Меняй код, смотри вывод в консоли</h3>
</template>

<style scoped></style>