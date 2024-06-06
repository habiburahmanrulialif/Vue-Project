import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const start = defineStore('start', () => {
  const isPlaying = ref(false)
  const delay = ref(0)

  function start() {
    this.delay = 2000 + Math.random() * 5000
    this.isPlaying = true
    console.log(delay.value)
    console.log(isPlaying.value)
  }

  function stop() {
    this.isPlaying = false
  }

  return { isPlaying, delay, start, stop }
})
