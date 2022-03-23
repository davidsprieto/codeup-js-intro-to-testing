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

// isFive function
function isFive(input) {
    if (input === 5) {
        return true;
    } else if (typeof input === 'string') {
        return "false, that's a string!";
    } else {
        return false;
    }
}

// isEven function
function isEven(input) {
    if (input % 2 === 0) {
        return true;
    } else {
        return false;
    }
}