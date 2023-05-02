let input = document.querySelector('input');

input.onfocus = function () {
    console.log('Поймали фокус');
}

input.onblur = function () {
    console.log('Фокус утрачен');
}

input.oninput = function () {
    console.log('Текст:', input.value);
}

input.onchange = function () {
    console.log('Текст стал другой, чем был вначале');
}