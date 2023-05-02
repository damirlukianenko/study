<script setup lang="ts">
import { ref, onMounted } from 'vue';
/*
    Логика такая:
    1. Ловим нажатие клавиатуры на document
    2. Перебираем все колонки, ищем совпадение по innerHTML
    3. Если есть, кнопка загорается
*/

let letters = ref([
    { text: 1, pressed: false },
    { text: 2, pressed: false },
    { text: 3, pressed: false },
    { text: 4, pressed: false },
    { text: 5, pressed: false },
    { text: 6, pressed: false },
    { text: 8, pressed: false },
    { text: 9, pressed: false },
    { text: 0, pressed: false },
    { text: "q", pressed: false },
    { text: "w", pressed: false },
    { text: "e", pressed: false },
    { text: "r", pressed: false },
    { text: "t", pressed: false },
    { text: "y", pressed: false },
    { text: "u", pressed: false },
    { text: "i", pressed: false },
    { text: "o", pressed: false },
    { text: "p", pressed: false },
    { text: "a", pressed: false },
    { text: "s", pressed: false },
    { text: "d", pressed: false },
    { text: "f", pressed: false },
    { text: "g", pressed: false },
    { text: "h", pressed: false },
    { text: "j", pressed: false },
    { text: "k", pressed: false },
    { text: "l", pressed: false },
    { text: "z", pressed: false },
    { text: "x", pressed: false },
    { text: "c", pressed: false },
    { text: "v", pressed: false },
    { text: "b", pressed: false },
    { text: "n", pressed: false },
    { text: "m", pressed: false },
])

let keyPressed = ref([]);

function enableLetters(letter) {
    keyPressed.value.map((pressedKey) => {
        pressedKey == letter.text ? letter.pressed = true : ''
    })
}

function disableLetters(letter) {
    letter.pressed = false;
}

onMounted(() => {
    document.onkeydown = (e) => {
        keyPressed.value.push(e.key);
        letters.value.map(enableLetters)
    }

    document.onkeyup = (e) => {
        keyPressed.value = [];
        letters.value.map(disableLetters)
    }

})
</script>

<template>
    <Container>
        <Row>
            <Column :class="{ 'active': letter.pressed }" v-for="letter in letters">{{ letter.text }}</Column>
        </Row>
    </Container>
</template>

<style lang="scss" scoped>
@import './.scss/helpers/flex.scss';
@import 'scss/layout/column.scss';

.row {
    @extend .x-center, .gap-xs;
}

.column {
    flex-grow: 0;

    flex-basis: 60px;
    border-radius: .5rem;
    padding: 1em .25em;
    margin: .5rem 0;

    text-align: center;
    text-transform: uppercase;

    background-color: #17181c;
    color: #ddd;

    transition: .3s;
    cursor: pointer;


    &.active {
        background-color: #ddd;
        color: #ff6600;
    }
}
</style>