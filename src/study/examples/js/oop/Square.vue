<script setup>
class Square {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.area = width * height;
    }
    getSquare() {
        return this.width * this.height;
    }
    getPerimeter() {
        return (this.width + this.height) * 2;
    }
}

let square = new Square(10, 10);
let rectangle = new Square(10, 20);

console.log('Новый объект 1:', square)
console.log('Новый объект 2:', rectangle)

</script>

<template></template>

<style lang="scss" scoped></style>