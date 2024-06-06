<template>
  <div>Reaction Timer</div>
  <button @click="game.start">Play</button>

  <Block />
</template>

<script setup>
import Block from './views/Blocks.vue'
import Result from './views/Results.vue'
import { start } from './stores/start'

const game = start()
</script>

<style scoped></style>
