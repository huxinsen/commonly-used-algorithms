// 在 arr 数组的 left 到 right 区间内，查找排名为 k 的元素
function quickSelect(arr, left, right, k) {
  // 选取基准值，完成 partition 操作
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
  arr[i] = pivot

  // index 为当前基准值的排名
  const index = i - left + 1
  if (index === k) return arr[i]
  if (index > k) return quickSelect(arr, left, i - 1, k)
  return quickSelect(arr, i + 1, right, k - index)
}

const arr = [8, 3, 10, 2, 7, 6, 9, 12]
console.log(quickSelect(arr, 0, arr.length - 1, 4)) // 7
