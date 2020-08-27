function quickSort(arr, left, right) {
  // 递归边界：只有一个元素
  if (left >= right) return

  // i：从前向后扫描的位置
  // j：从后向前扫描的位置
  // pivot：基准值，选择待排序区间的第一个元素
  let i = left,
    j = right,
    pivot = arr[left]

  while (i < j) {
    while (i < j && arr[j] >= pivot) --j
    if (i < j) arr[i++] = arr[j]
    while (i < j && arr[i] <= pivot) ++i
    if (i < j) arr[j--] = arr[i]
  }

  // 将基准值 pivot 放入其正确位置，即数组的第 i 位
  // 此时 i===j，写成 arr[j] = pivot 一样
  // 再分别对左右区间进行快速排序
  arr[i] = pivot

  quickSort(arr, left, i - 1)
  quickSort(arr, i + 1, right)
}

const arr = [8, 3, 10, 2, 7, 6, 9, 12]
quickSort(arr, 0, arr.length - 1)
console.log(arr) // [2, 3, 6, 7, 8, 9, 10, 12]
