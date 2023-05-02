<script setup lang="ts">
import { ref } from 'vue';
import Warning from 'components/icons/Warning.vue';
import { errorsCount } from 'components/developer-ui/helpers/errorHandlers';

/* class for working with errors */
class Error {
    exists: boolean;
    count: number;

    constructor(exists = false, count = 1) {
        this.exists = exists;
        this.count = count;
    }
}
let error = new Error();
let errorExists = ref(error.exists);

setInterval(() => {
    if (errorsCount > 0) {
        errorExists.value = true;
    }
}, 1000)


</script>

<template>
    <!-- hover tooltip -->
    <NTooltip trigger="hover" :delay="500">
        <template #trigger>

            <!-- icon with text -->
            <NButton :class="{ 'is-visible': errorExists }" icon-placement="left"
                class="is-hidden is-row columns-bottom no-padding no-hover-bg-i gap-xs has-short-transition" quaternary
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