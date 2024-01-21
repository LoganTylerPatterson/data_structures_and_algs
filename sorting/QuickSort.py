from random import randrange

def partition(array, start, end):
    randomPivot = array[randrange(start, end - 1)]
 
    pointer = start - 1
 
    for i in range(start, end):
        if array[i] <= randomPivot:
            pointer += 1
            (array[pointer], array[i]) = (array[i], array[pointer])
    
    pointer += 1
    (array[pointer], array[end]) = (array[end], array[pointer])
 
    return pointer
 
 
def quicksort(array, start, end):
    if start < end:
        pivotIndex = partition(array, start, end)
 
        # left of pivot
        quicksort(array, start, pivotIndex - 1)
 
        # right of pivot
        quicksort(array, pivotIndex + 1, end)
 