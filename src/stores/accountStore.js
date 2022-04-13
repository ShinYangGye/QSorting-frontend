import { defineStore } from 'pinia'

export const useAccountStore = defineStore({
  id: 'accountStore',
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})
