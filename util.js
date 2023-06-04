
const generateRandomArray = (maxSize) => {
    const size = Math.floor(Math.random() * maxSize)
    const array = new Array(size)
    for (let i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random() * array.length)
    }
    return array
}

const verifySorted = (array) => {
    let prev = -Infinity
    for (let i = 0; i < array.length; i++) {
        if (array[i] < prev) {
            return false
        }
        prev = array[i]
    }
    return true
}

module.exports = { generateRandomArray, verifySorted }