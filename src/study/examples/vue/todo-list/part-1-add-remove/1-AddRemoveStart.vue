<script setup lang="ts">
import { ref } from 'vue'

const text = ref('')

const todos = ref([
    'Learn HTML' ,
    'Learn JavaScript' ,
    'Learn Vue' ,
    'Learn CSS' ,
    'Learn NodeJS' ,
    'Learn ReactJS' 
])

// create new object to push, rewrite text to new variable 
function addTodo() {
    
}

// remove todo by it's reference
function removeTodo() {

}
</script>

<template>
    <section>
        <input v-model="text">
        <button @click="addTodo">Add Todo</button>
    </section>
    <ul>
        <li v-for="(todo, index) in todos">
            {{ index }}
            {{ todo }}
            <button @click="removeTodo">X</button>
        </li>
    </ul>
</template>

<style scoped>

</style>