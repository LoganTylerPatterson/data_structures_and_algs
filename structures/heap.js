class Heap {
    constructor() {
        this.heap = [];
        this.size = 0;
    }

    get_parent(i) {
        return Math.floor((i-1) / 2);
    }

    get_left_child(i) {
        return i * 2 + 1
    }
    get_right_child(i) {
        return i * 2 + 2
    }

    sift_down(i) {
        let l_child = this.get_left_child(i);
        let r_child = this.get_right_child(i);
        let largest = i;
        if (l_child < this.size && this.heap[l_child] > this.heap[i]) {
            largest = l_child;
        }
        if (r_child < this.size && this.heap[r_child] > this.heap[largest]) {
            largest = r_child
        }
        if (largest != i) {
            let tmp = this.heap[i];
            this.heap[i] = this.heap[largest];
            this.heap[largest] = tmp;
            this.sift_down(largest);
        }
    }

    sift_up(i) {
        let parent = this.get_parent(i);
        while (i > 0 && this.heap[i] > this.heap[parent]) {
            let tmp = this.heap[i];
            this.heap[i] = this.heap[parent];
            this.heap[parent] = tmp;
            i = parent;
            parent = this.get_parent(i);
        }
    }

    insert(val) {
        this.heap.push(val);
        this.size += 1;
        this.sift_up(this.heap.length - 1);
    }

    build_max_heap(arr) {
        this.heap = arr;
        this.size = arr.length;
        for (let i = Math.floor(arr.length / 2); i > -1; i--) {
            this.sift_down(i);
        }
    }

    build_max_heap() {
        //increase our size
        this.size = this.heap.length
        //siftdown all parents
        for (let i = Math.floor(arr.length / 2); i > -1; i--) {
            this.sift_down(i);
        }
    }

    popMax() {
        //Swap first and last
        const tmp = this.heap[0]
        this.heap[0] = this.heap[this.size - 1]
        this.heap[this.size-1] = tmp
        //Decrease size
        this.size -= 1
        //Sift the root down
        this.sift_down(0)
    }

    peekMax() {
        return this.heap[0]
    }

    heapsort() {
        let i = this.size
        while (i > 0) {
            this.popMax()
            i--
        }
    }

    //TODO
    // printHeap() {
    //     //How wide is our arr?
    //     const width = Math.floor(Math.log2(this.arr.length))
    // }
}

const heap = new Heap();

// Test Case 1: Insert elements and verify max-heap property
heap.insert(10);
heap.insert(20);
heap.insert(5);
heap.insert(30);
heap.insert(15);

// The heap should be [30, 20, 15, 10, 5]
console.log(heap.heap);

// Test Case 2: Insert more elements
heap.insert(25);
heap.insert(12);

// The heap should be [30, 25, 20, 12, 5, 15, 10]
console.log(heap.heap);

// Test Case 3: Heapify an array and verify max-heap property
const arr = [6, 4, 8, 9, 2, 3, 1, 7];
heap.build_max_heap(arr);

// The heap should be [9, 7, 8, 6, 2, 3, 1, 4]
console.log(heap.heap);

// Test Case 4: Insert more elements
heap.insert(11);
heap.insert(13);

// The heap should be [13, 11, 9, 7, 2, 3, 1, 4, 8, 6]
console.log(heap.heap);

// Test Case 5: Insert element with negative value
heap.insert(-5);

// The heap should be [13, 11, 9, 7, 2, 3, 1, 4, 8, 6, -5]
console.log(heap.heap); 