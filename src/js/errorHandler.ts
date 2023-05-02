export function pageReload() {
    const reloadDelay = 5000;
    let timerStart = 1000;
    const messageText = 'У тебя ошибки, бро. Перезагружаю страницу через';

    // прогонять циклом

    let intervalID = setInterval(() => {
        let timeDifference = (reloadDelay - timerStart) / 1000;

        console.log(`${messageText} ${timeDifference} ...`);
        timerStart += 1000;

        if(timeDifference <= 1) {
            clearInterval(intervalID);
        }

    }, 1000)
    
    setTimeout(() => {
        window.location = window.location;
    }, reloadDelay)

}

window.onerror = (event) => {
    pageReload();
}