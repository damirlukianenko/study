<script setup lang="ts">
import { onMounted, computed } from 'vue';
import Column from '@/components/layout/Column.vue';
import Container from '@/components/layout/Container.vue';

/* Примитивы: числа, строки */
let favouriteBand = 'Hollywood undead'; // неявный тип
let university: string = 'KNUTD';       // явный вид 

/* Массивы */
let numbers: number[] = [ 1, 2, 10, 200 ];

/* Функции */
function sumNumbers(a:number, b:number): number {
    return a + b;
}

/* функции внутри других функций */
numbers.map(function(number: number) { console.log(number) })

/* Интерфейсы (объекты) */
interface MyBrother {
    name: string;
    isAdult: boolean;
}

let DamirsBrother: MyBrother = {
    name: 'Who knows him?',
    isAdult: true
}

/* Классы */
class Bottle {
    /* Свойства класса (так же, как у объекта) */
    capacity: number;
    isNew: boolean;
    
    /* Функция, которая задаёт свойства нашему классу (объекту) */
    constructor(capacity: number, isNew: boolean) {
        this.capacity = capacity;
        this.isNew = isNew;
    }
}

let newBottle = new Bottle(0.5, true);


</script>

<template>
    <div class="name">Name</div>
    <div class="name">Name</div>
    <div class="name">Name</div>
    <div class="name">Name</div>
    <div class="name">Name</div>
    <div class="name">Name</div>
</template>

<style lang="scss" scoped></style>