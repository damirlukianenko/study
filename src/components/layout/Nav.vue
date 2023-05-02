<script setup lang="ts">
import { computed } from 'vue'
import { propsToClasses } from 'components/addons/helpers/propsToClasses';

let props = defineProps({
    direction: {
        type: String,
        default: ''
    },
})

let propsClasses = computed(() => propsToClasses(props));
</script>

<template>
    <div :class="['nav', propsClasses]">
        <slot></slot>
    </div>
</template>


<style lang="scss" scoped>
@import './../../scss/layout/nav.scss';
</style>