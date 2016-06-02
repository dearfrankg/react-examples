class Store {
  constructor () {
    this.state = {
      counters: []
    }
  }

  observe (o) {
    if (this.observer) {
      console.log('Multiple observers not supported')
    }
    this.observer = o
    this.emitChange()
  }

  emitChange () {
    this.observer()
  }

  addCounter = () => {
    const self = this
    class Counter {
      count = 0
      dec = () => {
        this.count--
        self.emitChange()
      }
      inc = () => {
        this.count++
        self.emitChange()
      }
    }
    this.state.counters.push(new Counter())
    this.emitChange()
  }

  reset = () => {
    this.state.counters.forEach((c) => {
      c.count = 0
    })
    this.emitChange()
  }

  sum = () => {
    return this.state.counters.reduce((acc, curr) => {
      return acc + curr.count
    }, 0)
  }
}

export default function createStore () {
  let store
  if (store) {
    return store
  }
  store = new Store()
  return store
}
