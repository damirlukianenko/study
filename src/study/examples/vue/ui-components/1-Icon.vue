<script setup lang="ts">
import { ref } from 'vue';

let props = defineProps([
    'size',
    'color',
    'text',
    'vertical'
])

</script>

<template>
    <!-- icon wrapper -->
    <p :class="['icon-wrapper', props.vertical ? 'vertical' : '']"
        :style="{ 'font-size': props.size, 'color': props.color }">

        <!-- icon -->
        <svg xmlns="http://www.w3.org/2000/svg" :width="props.size" :fill="props.color" class="icon expand-corners"
            viewBox="0 0 16 16">
            <path fill-rule="evenodd"
                d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z" />
        </svg>

        <!-- caption -->
        <span v-if="props.text" class="icon-text">
            {{ props.text }}
        </span>
    </p>
</template>

<style lang="scss" scoped>
.icon-wrapper {
    width: max-content;
    display: flex;
    align-items: center;
    column-gap: .5em;
    cursor: pointer;

    &.vertical {
        flex-direction: column;
    }
}
</style>