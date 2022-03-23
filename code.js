// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// sayHello function
function sayHello(input) {
    if (typeof input === 'undefined' || typeof input === 'boolean') {
        return "Hello, World!";
    } else if (typeof input === 'number') {
        return "Invalid Input!";
    } else {
        return "Hello, " + input + "!";
    }
}
