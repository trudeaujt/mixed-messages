let flowers = ['Petunia', 'Rose', 'Lily']
let colors = ['Blue', 'Red', 'White']
let state = ['Wilting', 'Beautiful', 'Dazzling']

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function getMessage() {
    return `A ${state[getRandomInt(state.length)]} ${colors[getRandomInt(colors.length)]} ${flowers[getRandomInt(flowers.length)]}`
}

console.log(getMessage())