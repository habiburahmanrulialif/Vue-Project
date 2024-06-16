import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const handlerStore = defineStore('handler', () => {
  const modalActive = ref(false)

  function modalhandler() {
    modalActive.value = !modalActive.value;
  }
  return { modalActive, modalhandler }
})
