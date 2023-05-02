let button = document.querySelector('button');

button.onclick = function() { console.log('hello') } // не сработает
button.onclick = function() { console.log('world') } // а эта выведется

function logSomething(text) {
    console.log(text);
}

button.addEventListener('click', logSomething('Текстовый текст'))
button.addEventListener('click', logSomething('Текстовый текст 1'))
button.addEventListener('click', logSomething('Текстовый текст 2'))
button.addEventListener('click', logSomething('Текстовый текст 3'))
button.addEventListener('click', logSomething('Текстовый текст 4'))