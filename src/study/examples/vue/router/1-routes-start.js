/*
    Для работы нам нужны: 
    1) Функция createRouter() из Vue Router 
    2) Функция createWebHistory(), которая отвечает за работу ссылок на сайте
    3) Файл, который мы будем показывать при переходе (Users.vue)
    4) Путь для перехода: массив routes
*/

import { createRouter, createWebHistory } from 'vue-router'

import Users from './1-Users.vue';

let routes = [
    { path: '/users', component: Users },
]

let router = createRouter({
    history: createWebHistory(),
    routes: routes
})

/*
    Additional information:

    1. Мы импортируем файл Users.vue, на который будем в итоге переходить по ссылке
    2. За работу ссылок отвечает метод createWebHistory()
    3. Как Vue узнает обо всём этом? Мы создаём массив путей routes и объект router
       и связываем их воедино. 
    3. Осталось только подключить этот файл к main.js и добавить на страницу ссылки

*/

// export { router };