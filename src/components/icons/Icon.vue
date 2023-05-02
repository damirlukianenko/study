<script setup lang="ts">
import { computed } from 'vue'
import { propsToClasses } from 'components/addons/helpers/propsToClasses';

let props = defineProps({
    color: {
        type: String,
        default: '',
    },
    size: {
        type: String,
        default: ''
    },
    pointer: {
        type: Boolean,
        default: false
    }
})

let propsClasses = computed(() => propsToClasses(props));
</script>

<template>
    <Column class="x-y-center" :style="{ 'width': props.size, 'color': props.color }"
        :class="['icon-wrapper', propsClasses, props.pointer ? 'pointer' : '']">
        <slot></slot>
    </Column>
</template>

<style lang="scss" scoped>
@import './../../scss/helpers/hover.scss';
@import 'scss/helpers/flex.scss';

.icon-wrapper {
    transition: .3s;
}
</style>