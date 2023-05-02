<script setup lang="ts">
import { computed } from 'vue'
import { propsToClasses } from 'components/addons/helpers/propsToClasses';
import { customProps } from 'components/addons/props/customProps';

let props = defineProps({
    ...customProps
})

let propsClasses = computed(() => propsToClasses(props));
</script>

<template>
    <div :class="['column', propsClasses]">
        <slot></slot>
    </div>
</template>


<style lang="scss">
@import './../../scss/layout/column.scss';
</style>