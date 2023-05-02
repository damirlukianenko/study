<script setup>

let salariesUSD = [5000, 500, 1500, 2000, 1000];
let sorted = salariesUSD.sort(compareNumbers);

function compareNumbers(a, b) {
    return a - b;
}

console.log('sorted: ', sorted);

</script>

<template></template>

<style lang="scss" scoped></style>