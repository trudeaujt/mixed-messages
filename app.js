let flowers = ['Petunia', 'Rose', 'Lily']
let colors = ['Blue', 'Red', 'White']
let state = ['Wilting', 'Beautiful', 'Dazzling']

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function getRandomElement(array) {
    return array[getRandomInt(array.length)]
}

function getMessage() {
    return `A ${getRandomElement(state)} ${getRandomElement(colors)} ${getRandomElement(flowers)}`
}

console.log(getMessage())