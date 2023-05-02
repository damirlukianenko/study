<script setup>
import { ref } from 'vue';

let isDarkTheme = ref(true);

let emits = defineEmits(['sendData']);

function sendData() {
    isDarkTheme.value = !isDarkTheme.value;
    emits('sendData', isDarkTheme);
}

</script>

<template>
    <button @click="sendData">
        <slot>Switch Theme</slot>
        
    </button>

</template>

<style lang="scss" scoped>
.active {
    background: #000;
    color: white;
}
</style>