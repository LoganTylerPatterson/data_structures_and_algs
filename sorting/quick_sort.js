const { generate_random_array, verify_sorted } = require("../util")

const quick_sort = (arr, start, end) => {
    if (start >= end) {
        return
    }
    //generate the pivot element
    const pivot = generate_pivot(start, end)
    //swap it with the element @ end
    let tmp = arr[end]
    arr[end] = arr[pivot]
    arr[pivot] = tmp

    //set the less than and greater than pointers
    let nextSmall = start
    let nextBig = end - 1

    //move smaller elements leftward
    let i = start
    while (nextSmall <= nextBig) {
        if (arr[i] > arr[end]){
            //swap both and keep i same (bigger element we swapped may still be bigger)
            tmp = arr[nextBig]
            arr[nextBig] = arr[i]
            arr[i] = tmp
            nextBig -= 1
        }
        else if (arr[i] <= arr[end]){
            if (i != end) {
                //swap both
                tmp = arr[nextSmall]
                arr[nextSmall] = arr[i]
                arr[i] = tmp
            }
            i += 1
            nextSmall += 1
        }
    }
    tmp = arr[end]
    arr[end] = arr[nextSmall]
    arr[nextSmall] = tmp

    //recursively sort the left
    quick_sort(arr, start, nextSmall - 1)
    //recursively sort the right
    quick_sort(arr, nextSmall + 1, end)
}

const generate_pivot = (start, end) => {
    return Math.floor(Math.random() * (end - start) + start)
}

const test_quick_sort = () => {
    for (let i = 0; i < 10; i++) {
        const arrSize = Math.floor(Math.random() * 30)
        let arr = generate_random_array(arrSize)
        quick_sort(arr, 0, arr.length-1)
        verify_sorted(arr)
    }
}

test_quick_sort()
