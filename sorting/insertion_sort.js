

const insertion_sort = (array) => {
    console.warn(`Array before sorting: ${array}`)

    for (let i = 1; i < array.length; i++) {
        const key = array[i]
        let j = i - 1
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j]
            j -= 1
        }
        array[j + 1] = key
    }

    console.warn(`Array after sorting: ${array}`)

    return array
}