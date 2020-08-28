// 用小顶堆，演示一个优先队列
class Heap {
  constructor(capacity) {
    // 控制数组下标从 1 开始
    this.data = new Array(capacity + 1)
    this.capacity = capacity
    this.size = 0
  }

  // 堆的向上调整操作
  // index 指向当前需要向上调整的节点
  // father 指向 index 的父节点
  upUpdate(index) {
    let father, temp
    while (index !== 1) {
      father = index >> 1
      if (this.data[father] <= this.data[index]) break

      temp = this.data[index]
      this.data[index] = this.data[father]
      this.data[father] = temp

      index = father
    }
  }

  // 堆的向下调整操作
  // index 指向当前需要向下调整的节点
  // min 指向两个子节点中值较小的节点
  // index * 2 <= this.size 说明当前节点还有子节点
  downUpdate(index) {
    let min, temp
    while (index * 2 <= this.size) {
      min = index * 2
      if (min + 1 <= this.size && this.data[min + 1] < this.data[min]) {
        min = min + 1
      }

      if (this.data[index] <= this.data[min]) break

      temp = this.data[index]
      this.data[index] = this.data[min]
      this.data[min] = temp

      index = min
    }
  }

  // 队列判空操作
  isEmpty() {
    return this.size === 0
  }

  // 入队操作
  // 先放置元素，再向上调整
  push(element) {
    if (this.size === this.capacity) return
    this.data[++this.size] = element
    this.upUpdate(this.size)
  }

  // 出队操作
  // 先覆盖元素，再向下调整
  pop() {
    if (this.isEmpty()) return
    this.data[1] = this.data[this.size--]
    this.downUpdate(1)
  }

  top() {
    if (this.isEmpty()) return 'The queue is empty.'
    return this.data[1]
  }

  print() {
    console.log()

    let index = ''
    for (let i = 1; i <= this.capacity; i++) {
      index += `${String(i).padEnd(4)}`
    }
    console.log(index)

    let line = ''
    for (let i = 1; i <= this.capacity; i++) {
      line += `----`
    }
    console.log(line)

    let elements = ''
    for (let i = 1; i <= this.size; i++) {
      elements += `${String(this.data[i]).padEnd(4)}`
    }
    for (let i = this.size + 1; i <= this.capacity; i++) {
      elements += '-   '
    }
    console.log(elements)
  }
}

//---------------华丽的分割线----------------//

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

const question = (query) =>
  new Promise((resolve) => rl.question(query, (answer) => resolve(answer)))

const opInfo = `\n优先队列结构学习，请输入操作命令(0-4)：
0.查看堆中元素情况
1.插入元素
2.移除队首元素
3.查看队首元素
4.退出
请输入操作命令所对应的数字：`

async function main() {
  const capacity = await question('输入初始化容量：')
  const q = new Heap(Number(capacity))

  let loop = true
  while (loop) {
    const op = await question(opInfo)

    switch (op) {
      case '0': {
        q.print()
        break
      }
      case '1': {
        const element = await question('请输入要插入的数字：')
        q.push(Number(element))
        break
      }
      case '2': {
        q.pop()
        break
      }
      case '3': {
        console.log(q.top())
        break
      }
      case '4': {
        loop = false
        rl.close()
        break
      }
    }
  }
}

main()
