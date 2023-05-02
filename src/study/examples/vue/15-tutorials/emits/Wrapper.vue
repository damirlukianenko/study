<script setup>
import { ref } from 'vue'
import Button from './Button.vue';

/* data's */
let yellowData = ref(null)
let darkData = ref(null);
let redData = ref(null);

/* methods */
function yellowRecieve(data) {
    yellowData.value = data.value
    console.log('yellow, you know', yellowData.value);
} 

function recivedarkData(dataFromComponent) {
    darkData.value = dataFromComponent.value
    console.log('data.value rod: ', darkData.value);
}

function receiveRedData(data) {
   redData.value = data.value;
   console.log('redData: ', redData.value);
}
</script>

<template>
    <div class="wrapper" :class="{
        'yellow': yellowData,
        'activeDarkButton': darkData,
        'red': redData
    }">
        <Button @sendYellowData="yellowRecieve"  @darkButton="recivedarkData"  @clickRedButton="receiveRedData" />
    </div>

        <p :class="{ 'yellow': yellowData}"> Custom yellow/default text</p>
        <figure :class="{'activeDarkButton': darkData}">Nigga My nigga</figure>

        <div :class="{ 'red': redData }">red text</div>

    

</template>

<style lang="scss" scoped>
.yellow{
    background-color: darkgoldenrod;
    color: aliceblue;
    transition: 0.5s;
}


.red {
    background: red;
    color: green;
    
}

.activeDarkButton {
    background-color: black;
    align-items: center;
    text-align: center;
    color: white;
    width: 200px;
    height: 200px;
}
</style>