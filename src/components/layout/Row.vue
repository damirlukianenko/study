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
    <section :class="['row', propsClasses]">
        <slot></slot>
    </section>
</template>

<style lang="scss" scoped>
@import 'scss/helpers/flex.scss';
@import 'scss/helpers/flex.scss';
</style>