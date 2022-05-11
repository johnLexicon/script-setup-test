import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { counter: 0, name: 'Kalle Anka' };
  },
  actions: {
    increment(val = 1) {
      this.counter += val;
    },
    reset() {
      this.counter = 0;
    },
    async waitAndAdd(val = 1) {
      setTimeout(() => {
        this.counter += val;
      }, 2000);
    }
  },
  getters: {
    doubleCount: (state) => state.counter * 2
  }
});
