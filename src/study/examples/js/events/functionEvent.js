function logEvent(event) {
    console.log('event data: ', event);
}
/* 
    1. Event нельзя вывести, если он не
    взаимодействует с каким-либо элементом 

*/
logEvent();

/* 2. Но если повесить событие на кнопку, всё будет Coca-Cola */
let button = document.querySelector('button');
button.onclick = logEvent;

