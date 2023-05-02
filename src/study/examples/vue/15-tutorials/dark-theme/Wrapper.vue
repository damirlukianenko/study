<script setup>
import { ref } from 'vue';

import Button from './Button.vue';

let data = ref(null);

function receiveData(dataFromComponent) {
    console.log('data: ', dataFromComponent.value);
    data.value = dataFromComponent.value;
}
</script>

<template>
    <Button @sendData="receiveData"/>
    <Button :class="{ 'active': data }"> <b>Custom Text</b>  </Button>
</template>

<style lang="scss" scoped></style>