<script setup lang="ts">
import { computed } from 'vue'
import { propsToClasses } from 'components/addons/helpers/propsToClasses';

let props = defineProps({
    size: {
        type: String,
        default: '',
    }
})

let propsClasses = computed(() => propsToClasses(props));

</script>

<template>
    <div :class="['container', propsClasses]">
        <slot></slot>
    </div>
</template>


<style lang="scss" scoped>
@import './../../scss/variables/sizes.scss';
@import './../../scss/base/media.scss';

.container {
    padding: $regular;
    
    &.is-mobile {
        padding: $small;
    }

    @include tablet {
        margin: 0 auto;
        max-width: 80%;

        &.narrow {
            max-width: 70%;
        }

        &.wide {
            max-width: 90%;
        }

        &.full-width {
            max-width: 100%;
        }
    }
}
</style>