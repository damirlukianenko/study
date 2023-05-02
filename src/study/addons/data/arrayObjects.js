/* 
    Here you can see:
    1. Courses you can take on Expand
    2. Weather types
*/

let expandCourses = [
    { id: 0, title: 'Базовый HTML/CSS', chapters: 10, isReady: true },
    { id: 1, title: 'Базовый JavaScript', chapters: 12, isReady: true },
    { id: 2, title: 'Git: работа в команде', chapters: 2, isReady: true },
    { id: 3, title: 'Экспертный HTML/CSS', chapters: 7, isReady: false },
    { id: 4, title: 'Экспертный JavaScript', chapters: 7, isReady: false },
    { id: 5, title: 'Препроцессоры', chapters: 6, isReady: true },
    { id: 6, title: 'VueJS: база', chapters: 11, isReady: true },
    { id: 6, title: 'VueJS: эксперт', chapters: 8, isReady: false },
]

let weatherTypes = [
    { id: 0, name: 'Sunny', hasSun: true, hasClouds: false, precipitationChance: 0 },
    { id: 1, name: 'Cloudy', hasSun: false, hasClouds: true, precipitationChance: 60 },
    { id: 2, name: 'Partly Cloudy', hasSun: true, hasClouds: true, precipitationChance: 30 },
    { id: 3, name: 'Rainy', hasSun: false, hasClouds: true, precipitationChance: 100 },
    { id: 4, name: 'Snowy', hasSun: false, hasClouds: true, precipitationChance: 100 },
    { id: 5, name: 'Sleety', hasSun: false, hasClouds: true, precipitationChance: 100 },
    { id: 6, name: 'Stormy', hasSun: false, hasClouds: true, precipitationChance: 95 },
    { id: 7, name: 'Lightning', hasSun: false, hasClouds: true, precipitationChance: 70 },
    { id: 8, name: 'Hail', hasSun: false, hasClouds: true, precipitationChance: 100 },
    { id: 9, name: 'Windy', hasSun: false, hasClouds: true, precipitationChance: 25 },
    { id: 10, name: 'Foggy', hasSun: false, hasClouds: true, precipitationChance: 45 },
]

export default {
    expandCourses,
    weatherTypes,
};