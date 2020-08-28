function swapInArray(arr, indexA, indexB) {
  ;[arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]]
}

function swap(x, y) {
  return [y, x]
}

function selectPivot(a, b, c) {
  if (a > b) [a, b] = swap(a, b)
  if (a > c) [a, c] = swap(a, c)
  if (b > c) [b, c] = swap(b, c)

  return b
}

function quickSortNew(arr, left, right) {
  while (left < right) {
    // 基准值选取优化
    let i = left,
      j = right,
      pivot = selectPivot(arr[left], arr[right], arr[(left + right) >> 1])

    while (i <= j) {
      // partition 操作优化
      while (arr[i] < pivot) ++i
      while (arr[j] > pivot) --j
      if (i <= j) {
        swapInArray(arr, i, j)
        i++, j--
      }
    }

    quickSortNew(arr, i, right)
    right = j // 单边递归优化
  }
}

const arr = [8, 3, 10, 2, 7, 6, 9, 12]
quickSortNew(arr, 0, arr.length - 1)
console.log(arr) // [2, 3, 6, 7, 8, 9, 10, 12]
