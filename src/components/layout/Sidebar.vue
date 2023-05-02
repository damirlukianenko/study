<script setup lang="ts">
import { computed } from 'vue'
import { propsToClasses } from 'components/addons/helpers/propsToClasses';

let props = defineProps({
    direction: {
        type: String,
        default: 'left',
    },
    interaction: {
        type: String,
        default: 'static',
    }
})

let propsClasses = computed(() => propsToClasses(props));

</script>

<template>
    <div :class="['sidebar', propsClasses]">
        <slot></slot>
    </div>

</template>

<style lang="scss" scoped>
.sidebar {

    &.left {
        order: 0;
    }
    
    &.right {
        order: 1;
    }
}
</style>