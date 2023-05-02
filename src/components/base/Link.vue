<script setup lang="ts">
import { computed } from 'vue'
import { propsToClasses } from 'components/addons/helpers/propsToClasses';

let props = defineProps({
    href: {
        type: String,
        default: '#',
    },
    color: {
        type: String,
        default: ''
    },
})

let propsClasses = computed(() => propsToClasses(props));
</script>

<template>
    <p class="link-wrapper">
        <a :href="props.href" :class="['link', propsClasses]">
            <slot></slot>
        </a>
    </p>
</template>


<style lang="scss" scoped>
@import './../../scss/base/reset.scss';
@import './../../scss/variables/colors.scss';
@import './../../scss/base/fonts.scss';
</style>