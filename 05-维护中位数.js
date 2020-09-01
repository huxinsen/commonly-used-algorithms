class MedianFinder {
  constructor() {
    this.maxHeap = new MaxHeap()
    this.minHeap = new MaxHeap() // 存相反数
  }

  addNum(num) {
    if (this.maxHeap.size === 0 || num <= this.maxHeap.top()) {
      this.maxHeap.push(num)
    } else {
      this.minHeap.push(-num)
    }

    if (this.maxHeap.size + 2 === this.minHeap.size) {
      this.maxHeap.push(-this.minHeap.pop())
    }

    if (this.minHeap.size + 2 === this.maxHeap.size) {
      this.minHeap.push(-this.maxHeap.pop())
    }
  }

  findMedian() {
    const val1 = this.maxHeap.top()
    const val2 = -this.minHeap.top()

    if (this.maxHeap.size === this.minHeap.size) {
      return (val1 + val2) / 2
    }

    return this.maxHeap.size > this.minHeap.size ? val1 : val2
  }
}

class MaxHeap {
  constructor() {
    this.data = []
  }

  get size() {
    return this.data.length
  }

  upUpdate(index) {
    let father
    while (index > 0) {
      father = Math.floor((index - 1) / 2)
      if (this.data[father] >= this.data[index]) break

      swap(this.data, index, father)

      index = father
    }
  }

  downUpdate(index) {
    let max
    while (index * 2 + 1 < this.size) {
      max = index * 2 + 1
      if (max + 1 < this.size && this.data[max + 1] > this.data[max]) {
        max = max + 1
      }

      if (this.data[index] >= this.data[max]) break

      swap(this.data, index, max)

      index = max
    }
  }

  push(element) {
    this.data.push(element)
    this.upUpdate(this.size - 1)
  }

  pop() {
    const top = this.top()
    if (this.size > 1) {
      this.data[0] = this.data.pop()
      this.downUpdate(0)
    } else {
      this.data.pop()
    }

    return top
  }

  top() {
    return this.size > 0 ? this.data[0] : null
  }
}

function swap(arr, i, j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

const obj = new MedianFinder()
obj.addNum(1)
obj.addNum(2)
console.log(obj.findMedian()) // 1.5
obj.addNum(3)
console.log(obj.findMedian()) // 2
