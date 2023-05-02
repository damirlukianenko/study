<script setup lang="ts">
import { computed, ref } from 'vue'

/* 
    Сортировка задач методом sort()
    
    1. Метод sort() сортирует по алфавиту
    2. Но ему можно сделать метод кастомной сортировки 
    3. Я назвал этот метод compareFunction
    4. Этот метод принимает в себя todo
    5. И превращает его true/false в 1 или 0
    6. Нолики (todo.done == false) идут в начало списка
    7. Единички (сделанные задачи) - в конец
    
    У вас этот метод будет выполняться не при клике, 
    а при нажатии на чек и при добавлении задачи
    
    Have a nice coding!
    
*/


let id = 0
const newTodoText = ref('')
const hideCompleted = ref(null)

const todos = ref([
    { id: id++, text: 'Выучить VueJS 1', done: true },
    { id: id++, text: 'Покормить котов', done: false },
    { id: id++, text: 'Быть смелым по жизни 1', done: false },
    { id: id++, text: 'Заработать денег на котов', done: true },
    { id: id++, text: 'Выучить VueJS 2', done: true },
    { id: id++, text: 'Быть смелым по жизни 2', done: false },
])
// method 1: unstable
// firefox only
function sortTodos() {
    function checkTodosDone(todo) {
        console.log('todo.done: ', todo.done);
        console.log('+todo.done: ',+todo.done);
        
        return +todo.done;
    }

    todos.value.sort(checkTodosDone);
}

// method 2: stable
function sortTodosStable() {
    let sortedTodos = ref([]);
    todos.value.map((todo) => {
        todo.done ? sortedTodos.value.push(todo) : sortedTodos.value.unshift(todo);
    })
    todos.value = sortedTodos.value;
}

</script>

<template>
    <!-- button -->
    <form class="gap-x-s" @submit.prevent="">
        <input v-model="newTodoText">
        <button>Добавить задачу</button>
    </form>

    <!-- tasks -->
    <ul>
        <!-- <li v-for="todo in todos" :key="todo.id"> -->
        <li v-for="todo in todos" :key="todo.id">
            <input type="checkbox" v-model="todo.done">
            <span :class="{ done: todo.done }">{{ todo.text }}</span>
            <button>X</button>
        </li>
    </ul>

    <!-- buttons -->
    <section class="buttons">
        <div>
            <button @click="sortTodos">Сортировать задачи (unstable)</button>
        </div>
        <div>
            <button @click="sortTodosStable">Сортировать задачи (stable)</button>
        </div>
    </section>
</template>

<style lang="scss">
ul {
    list-style: none;
    padding: 0 0 0 1rem;
}

li,
input,
button {
    cursor: pointer;
}

button {
    appearance: none;
    background-color: #fff;
    color: rgb(51, 46, 46);
    border: 0;
    box-shadow: 0 0 1px 1px black;
    border-radius: 5px;
    font-size: 1.1rem;
    font-family: 'Sofia Sans', sans-serif;
}

.buttons button {
    margin: 0 0 .5rem 0;
}

$input-size: 25px;

input[type="checkbox"] {
    width: $input-size;
    height: $input-size;
}

li {
    display: flex;
    column-gap: 5px;
    align-items: center;
    font-size: 1.2rem;
}

.done {
    text-decoration: line-through;
}


.flex {
    display: flex;
}

[class*="gap-"] {
    display: flex;
}

$base-column-gap: 1rem;

.gap-x {
    column-gap: $base-column-gap;

    &-s {
        column-gap: $base-column-gap * 0.5;
    }
}
</style>