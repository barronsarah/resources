function isTrue(input) {
   return input === true;
}

function isFalse(input) {
    return input === false;
}

function not(input) {
    return !input;
}

function addOne(input) {
    return parseFloat(input) + 1;
}

function isEven(input) {
    return parseFloat(input) % 2 === 0;
}

function isEqual(a, b) {
    return a == b;
}

function isIdentical(a, b) {
    return a === b;
}

function or(a, b) {
    return a || b;
}

function and(a, b) {
    return a && b;
}

function concat(a, b) {
    return String(a) + String(b);
}
