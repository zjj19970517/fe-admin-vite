import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

interface State {
  count: number
}

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol('store')

export const store = createStore<State>({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export type {
  State
}
