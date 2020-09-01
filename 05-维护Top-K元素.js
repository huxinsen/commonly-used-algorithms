function getLeastKNumbers(arr, k) {
  const heap = []
  for (let i = 0; i < k; i++) {
    heap.push(arr[i])
  }
  buildHeap(heap, k)

  for (let i = k, len = arr.length; i < len; i++) {
    if (arr[i] < heap[0]) {
      heap[0] = arr[i]
      downUpdate(heap, 0, k)
    }
  }

  return heap
}

function buildHeap(arr, size) {
  for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
    downUpdate(arr, i, size)
  }
}

function downUpdate(arr, index, size) {
  let max

  while (index * 2 + 1 < size) {
    max = index * 2 + 1
    if (max + 1 < size && arr[max + 1] > arr[max]) {
      max = max + 1
    }

    if (arr[index] >= arr[max]) break

    swap(arr, index, max)

    index = max
  }
}

function swap(arr, i, j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

const arr = [8, 3, 10, 2, 7, 6, 9, 12]
const k = 3
console.log(getLeastKNumbers(arr, k)) // [6, 3, 2]
