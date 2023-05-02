export function reloadPage() {
    window.location = window.location;
}

let errorsCount: number;

export function reloadOnErrors(event) {
    const reloadDelay = 5000;
    let timerStart = 1000;
    const messageText = 'У тебя ошибки, бро. Перезагружаю страницу через';

    errorsCount = countConsoleErrors(event);

    // прогонять циклом
    let intervalID = setInterval(() => {
        let timeDifference = (reloadDelay - timerStart) / 1000;

        console.log(`${messageText} ${timeDifference} ...`);
        timerStart += 1000;

        if (timeDifference <= 1) {
            clearInterval(intervalID);
        }
    }, 1000)

    setTimeout(() => {
        reloadPage()
    }, reloadDelay)

}

export { errorsCount };

export function countConsoleErrors(event) {
    let errorsCount = 0;
    if (event != '' || event != null) {
        // console.log('event: ', event);
        errorsCount += 1;
    }
    // console.log('errors count: ', errorsCount);
    return errorsCount;
}