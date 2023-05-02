<script setup lang="ts">

defineProps({
    color: {
        type: String,
        default: 'red',
    },
    size: {
        type: String,
        default: 'small',
    },
    link: {
        type: String,
        default: '#'
    },
    tag: {
        type: String,
        default: 'a',
    },
    transition: {
        type: String,
        default: 'a',
    }
})

// при клике добавлять классы-транзишены и классы-анимации

</script>

<template>
    <a href="#" :class="['button', color, size]">
        <span :class="['button-text']">
            <slot></slot>
        </span>
    </a>
</template>

<style lang="scss" scoped>
@import './../../scss/variables/colors.scss';

.button {
    border-radius: .25em;
    padding: .25em;

    &.red {
        color: $black;
        border: 1px solid $burgundy;

        &:hover {
            color: $white;
            background-color: rgba($color: $burgundy, $alpha: .85);
            // box-shadow: 0 0 2px 0 $black-red;
        }

        &:active .button-text {
            animation: text-move .5s;
        }
    }

    &.small {}

    &.transition {}
}

.button,
.button-text {
    display: inline-block;
    transition: all .5s;
}

@keyframes text-move {
    from { 
        transform: translate(0, 0);
    }
    to {
        transform: translate(1px, 1px);
    }
}
</style>