<script setup lang="ts">
/* 
    Представь, что нам нужно написать 
    генератор рандомного пароля. 

    У нас есть: 
    - буквы 
    - числа
    - и специальные знаки

*/

/* 
    Сначала давай напишем код по-старинке -  в процедурном стиле:

    1. Сначала идут переменные
    2. Затем методы
    3. Затем вычисления

*/


/* массивчики */
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const characters = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":"]

/* находим рандомный элемент из массивов */
function getRandomLetter() {
    let randomElement = Math.ceil(Math.random() * letters.length - 1);
    return letters[randomElement];
}

function getRandomNumber() {
    let randomElement = Math.ceil(Math.random() * numbers.length - 1);
    return numbers[randomElement];
}

function getRandomCharacter() {
    let randomElement = Math.ceil(Math.random() * characters.length - 1);
    return characters[randomElement];
}

/* число элементов */
let lettersLength = letters.length;
let numbersLength = numbers.length;
let charactersLength = characters.length;

/* тип данных */
let lettersType = 'letters';
let numbersType = 'numbers';
let charactersType = 'characters';

/* только не одно и то же... Опять😭 */
const ukrLetters = ['а', 'б', 'в', 'г', 'ґ'];


</script>

<template>
   
</template>

<style lang="scss" scoped>
</style>