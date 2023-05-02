<script setup lang="ts">
import { ref } from 'vue';
import { reloadOnErrors } from '@/components/developer-ui/helpers/errorHandlers';

import ReloadOn from 'components/icons/ReloadOn.vue';

let storage = window.localStorage;
let isErrorReloadOn: any = ref();
let iconColor = ref('success');

let messageText = ref('Autoreload on errors: ');
let reloadStateText = ref('on');

function reloadPage() {
    window.location = window.location;
}

/* save storage */
function saveToStorage() {
    storage.isErrorReloadOn = isErrorReloadOn.value;
}

function loadFromStorage() {
    isErrorReloadOn.value = JSON.parse(storage.isErrorReloadOn);
}


/* wake up storage */
function initStorage() {
    // check for storage emptiness
    if (storage.isErrorReloadOn == null || storage.isErrorReloadOn == '' || storage.isErrorReloadOn == undefined) {
        isErrorReloadOn.value = true;
        saveToStorage();
    }
    else {
        loadFromStorage();
        setReloadConfigs();
    }
}
initStorage();

function setReloadConfigs(): void {
    if (isErrorReloadOn.value) {
        isErrorReloadOn.value = true;
        window.onerror = (event) => {
            reloadOnErrors(event);
        } 
        iconColor.value = 'success';
        reloadStateText.value = 'on';
    }
    else {
        window.onerror = null;
        isErrorReloadOn.value = false;
        iconColor.value = 'error';
        reloadStateText.value = 'off';
    }

    saveToStorage();
}

function toggleAutoReload() {
    isErrorReloadOn.value = !isErrorReloadOn.value;

    setReloadConfigs();
    setTimeout(() => {
        reloadPage();
    }, 1500)
}

</script>

<template>
    <NTooltip trigger="hover" :delay="400">
        <template #trigger>
            <NButton quaternary circle :type="iconColor">
                <NIcon size="2rem" @click="toggleAutoReload">
                    <ReloadOn />
                </NIcon>
            </NButton>
        </template>
        {{ messageText }}{{ reloadStateText }}
    </NTooltip>
</template>

<style lang="scss" scoped></style>