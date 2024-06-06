<template>
  <h1>Reaction Timer</h1>
  <button @click="game.start" :disabled="game.isPlaying">Play</button>
  <Block />
  <button @click="game.reset" :disabled="!game.greenBox">Play Again</button>
</template>

<script setup>
import Block from './views/Blocks.vue'
import { gameControl } from './stores/start'

const game = gameControl()
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}
</style>
