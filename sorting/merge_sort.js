const { generateRandomArray, verifySorted } = require('../util')

/**
 * 
 * @param {*} array array to be sorted
 * @param {*} s the first index of the subarray that needs to be sorted
 * @param {*} e the last index of the subarray that needs to be sorted
 */
const merge_sort = (array, s, e) => {
    //check the subarray we are sorting is only one element
    if (s < e) {
        //find the middle of the array
        const m = Math.floor(((e - s) / 2)) + s
        //merge sort the left side
        merge_sort(array, s, m)
        //merge sort the right side
        merge_sort(array, m + 1, e)
        //merge the two halves together
        merge(array, s, m, e)
    }
}

/**
 * 
 * @param {*} array array to sort
 * @param {*} s start index of the subarray that we need to sort
 * @param {*} m middle index of the subarray, left of this should be sorted and right of this should be sorted
 * @param {*} e end index of the subarray that we need to sort
 * @returns 
 */
const merge = (array, s, m, e) => {
    //Create an array containing items from p to q, inclusive
    const left = array.slice(s, m + 1)

    //Create an array containing items from q + 1 to r, inclusive
    const right = array.slice(m + 1, e + 1)

    //i is a pointer for left array, j is for the right array, and k is for the original array
    let i = 0
    let j = 0
    let k = s
    while (k <= e) {
        //Determine the pointer with the smaller number and place into array at k
        //If we have no more items in the left array automatically place the right element
        if (i == left.length || left[i] > right[j]) {
            array[k] = right[j]
            //Slide right pointer forward
            j += 1
        } else {
            array[k] = left[i]
            //Slide left pointer forward
            i += 1
        }
        //Slide original pointer forward
        k += 1
    }
    //return the start and end of our sorted subarray
    return [s, e]
}


//TESTER
const numTrials = 10
for (let i = 0; i < numTrials; i++) {
    const size = Math.floor(Math.random() * 20)
    const array = [2,0,2,1,1,0]
    merge_sort(array, 0, array.length - 1)
    console.warn(array)
    console.warn(`Trial #${i}: ${verifySorted(array)}`)
}
