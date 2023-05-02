<script setup lang="ts">
import { computed } from 'vue'
import { customProps } from '@/components/addons/props/customProps';
import { propsToClasses } from 'components/addons/helpers/propsToClasses';

let props = defineProps({
    ...customProps
})

let propsClasses = computed(() => propsToClasses(props));


</script>

<template>
    <span :class="['text', propsClasses]">
        <slot></slot>
    </span>
</template>

<style lang="scss" scoped>
.text {
    display: inline-block;
}
</style>