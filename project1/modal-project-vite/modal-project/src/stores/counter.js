import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counterStore', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    this.count = Math.min(10, this.count +1);
    console.log(count.value)
  }

  function decrement(){
    this.count = Math.max(0, this.count -1);
    console.log(count.value)
  }

  return { count, doubleCount, increment, decrement }
})
