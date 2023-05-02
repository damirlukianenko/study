window.onerror = function(errorMsg){
    customErrorLogs(errorMsg);
    // originalLog(event);
    return true;
}

let originalConsole = console;
let originalError = console.error;
let originalWarn = console.warn;
let originalLog = console.log;
let originalAssert = console.assert;

console.errors = 0;
console.logs = [];

console.error = customErrorLogs;
// console.errorLine = '';

function customErrorLogs(text: any) {
    console.errors += 1;
    // console.errorLine = line;
    originalLog('errorCount: ', console.errors);
    // originalLog('errorLine: ', console.errorLine);
    // originalLog('error message: ', text);
    originalError(text);
    return true;
}

function customConsoleLogs(text: any) {
    console.logs.push({ type: 'log', text: text });
    originalLog(console.logs);
    originalLog(text);
}