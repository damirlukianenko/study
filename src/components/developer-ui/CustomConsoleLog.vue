<script setup lang="ts">
import { ref } from 'vue'
import Check from 'components/icons/Check.vue';
import Close from 'components/icons/Close.vue';

let consoleIsEnabled = ref(true);
let buttonText = ref('enabled');
let buttonIcon = Check;
let buttonType = ref('success');

function toggleConsole() {
    consoleIsEnabled.value = !consoleIsEnabled.value;

    if (consoleIsEnabled.value) {
        buttonType.value = 'success';
        buttonIcon = Check;
        buttonText.value = 'enabled';
        createMessage();
    }
    else {
        buttonType.value = 'error';
        buttonIcon = Close;
        buttonText.value = 'disabled';
    }
}

function createMessage() {
    let messageSettings = {
        keepAliveOnHover: true,
        duration: 3000
    }
    // message.info(
    //     "Консоль лог", messageSettings
    // )
}

</script>

<template>
    <p>Logs {{ buttonText }}</p>
</template>

<style lang="scss" scoped>
@import './../../scss/helpers/space.scss';
</style>