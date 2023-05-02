<template>
    <h1>Vue Router</h1>

    <!-- 
        RouterLink - это ссылка, to - аналог href
        RouterView - блок, в который подгрузится наш компонент Users.vue

    -->

    <RouterLink to="/users">Users page</RouterLink>
    
    <RouterView></RouterView>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped></style>