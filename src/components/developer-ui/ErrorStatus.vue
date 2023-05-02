<script setup lang="ts">
import { ref } from 'vue';
import Warning from 'components/icons/Warning.vue';


class Error {
    exists: boolean;
    count: number;

    constructor(exists = true, count = 0) {
        this.exists = exists;
        this.count = count;
    }
}

let error = new Error();

</script>

<template>
    <!-- hover tooltip -->
    <NTooltip v-if="error.exists" trigger="hover" :delay="500">
        <template #trigger>

            <!-- icon with text -->
            <NButton icon-placement="left" class="is-row columns-bottom no-padding no-hover-bg-i gap-xs " quaternary
                type="error">
                <template #icon>
                    <NIcon size="2rem" :component="Warning">
                    </NIcon>
                </template>

                <!-- text -->
                <Text regular-l-font-size base-color class="error-text">{{ error.count }}</Text>

            </NButton>
        </template>
        You have {{ error.count }} errors in console
    </NTooltip>
</template>

<style lang="scss" scoped>
@import 'scss/helpers/all.scss';

.error-text {
    margin: 0 0 -3px 0;
}
</style>