
const generate_random_array = (maxSize) => {
    const size = Math.floor(Math.random() * maxSize)
    const array = new Array(size)
    for (let i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random() * array.length)
    }
    return array
}

const verify_sorted = (array) => {
    let prev = -Infinity
    for (let i = 0; i < array.length; i++) {
        if (array[i] < prev) {
            console.log("we bad")
            return false
        }
        prev = array[i]
    }
    console.log("we good")
    return true
}

module.exports = { generate_random_array, verify_sorted }