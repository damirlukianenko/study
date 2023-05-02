<script setup lang="ts">

let users = [
    { id: 0, title: 'User 1', price: 21 },
    { id: 1, title: 'User 2', price: 22 },
    { id: 2, title: 'User 3', price: 23 },
    { id: 3, title: 'User 4', price: 24 },
]

</script>

<template>
    <ul>
        <li v-for="user in users"> {{ user.title }} </li>
    </ul>
</template>

<style lang="scss" scoped></style>