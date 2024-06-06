import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const gameControl = defineStore('gameControl', () => {
  const isPlaying = ref(false)
  const delay = ref(0)
  const greenBox = ref(false)
  const timer = ref(null)
  const reactionTime = ref(0)
  const hitBox = ref(false)
  const result = ref('Click here when the color change!')

  function start() {
    delay.value = 2000 + Math.random() * 5000
    this.isPlaying = true
    console.log(delay.value)
    setTimeout(() => {
      this.greenBox = true
      this.hitBox = true
      console.log(hitBox.value)
      this.timer = setInterval(() => {
        reactionTime.value += 10
      }, 10)
    }, delay.value)
  }

  function stop() {
    clearInterval(this.timer)
    this.hitBox = false
    this.result = reactionTime.value +" "+"ms"
    console.log(reactionTime.value)
  }

  function reset() {
    this.isPlaying = false
    this.greenBox = false
    this.hitBox = false
    this.result = 'Click here when the color change!'
    reactionTime.value = 0
  }

  return { isPlaying, greenBox, reactionTime, hitBox, result, start, stop, reset }
})
