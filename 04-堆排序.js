function swap(arr, indexA, indexB) {
  ;[arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]]
}

function heapSort(arr) {
  const size = arr.length

  // 初始化堆（线性建堆法），从最后一个父节点开始调整，直到节点均调整完毕
  // 数组索引从 0 开始，所以 -1
  for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
    downUpdate(arr, i, size)
  }

  // 将堆顶元素与堆末元素进行调换，再对堆顶元素进行向下调整
  for (let i = size - 1; i > 0; i--) {
    swap(arr, 0, i)
    downUpdate(arr, 0, i)
  }
}

// 堆的向下调整操作
// index 指向当前需要向下调整的节点（从0开始）
// max 指向两个子节点中值较大的节点
// index * 2 + 1 < size 说明当前节点还有子节点
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

const arr = [8, 3, 10, 2, 7, 6, 9, 12]
heapSort(arr)
console.log(arr) // [2, 3, 6, 7, 8, 9, 10, 12]
