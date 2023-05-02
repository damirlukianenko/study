<script setup lang="ts">
import { computed } from 'vue'
import { customProps } from 'components/addons/props/customProps';
import { propsToClasses } from 'components/addons/helpers/propsToClasses';

let props = defineProps({
    ...customProps
})

let propsClasses = computed(() => propsToClasses(props));

</script>

<template>
    <div :class="['theme', propsClasses]">
        <slot></slot>
    </div>
</template>

<style lang="scss">
@import 'scss/layout/theme.scss';
@import 'scss/helpers/flex.scss';

.layout-center {
    @extend .x-y-center;
}
</style>