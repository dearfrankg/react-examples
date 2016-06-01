class Store {
  constructor () {
    this.observer = null
    this.state = {
      count: 0
    }
  }

  observe (o) {
    if (this.observer) {
      throw new Error('Multiple observers not implemented.')
    }

    this.observer = o
    this.emitChange()
  }

  emitChange () {
    this.observer()
  }

  dec = () => {
    this.state.count--
    this.emitChange()
  }

  inc = () => {
    this.state.count++
    this.emitChange()
  }

  reset = () => {
    this.state.count = 0
    this.emitChange()
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
