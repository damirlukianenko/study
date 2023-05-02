<script setup>
import { ref } from 'vue'

/* Emits */
let EmitsCollection = defineEmits([
    'darkButton',
    'sendYellowData',
    'clickRedButton',
])

/* togglers */
let DarkButton = ref(true);
let yellowTheme = ref(false)
let redButton = ref(true);

/* methods */
function darkChanger() {
    DarkButton.value = !DarkButton.value;
    EmitsCollection('darkButton', DarkButton)
}

function toggleTheme() {
    yellowTheme.value = !yellowTheme.value 
    EmitsCollection('sendYellowData', yellowTheme)
}

function changeRedButton() {
    redButton.value = !redButton.value;
    EmitsCollection('clickRedButton', redButton);
}
</script>

<template>
<p>
    <button class="cool-button" @click="changeRedButton">change theme</button>
</p>

<p>
    <button class="neKolhoz" @click="darkChanger">Switcher</button>
</p>

<p>
    <button class="buttonMax" @click="toggleTheme">Click to change Theme </button>
</p>
</template>

<style lang="scss" scoped>

button {
    border: none;   
    cursor: pointer;
}

.cool-button {
    background: red;
    color: green;
    font-size: 20px;
    border-radius: 10px;
}

.neKolhoz{
    background-color: aquamarine;
    color: white;
    font-weight: 600;
    font-size: 24px;
    border-radius: 10%;
    width: 150px;
    height: 50px;
}

.buttonMax{
    background-color: olive;
    color: black;
    font-size: 1.5rem;
    border-radius: 15%;
}


</style>