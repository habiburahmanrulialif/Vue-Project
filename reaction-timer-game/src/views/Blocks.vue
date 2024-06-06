<template>
  <div class="block" @click="handleClick" :class="{ green: game.greenBox }">
    <Results :result="game.result"/>
  </div>
</template>

<script setup>
import Results from './Results.vue'
import { gameControl } from '../stores/start'

const game = gameControl()
function handleClick() {
  if (game.hitBox) {
    game.stop()
  }
}


</script>

<style scoped>
.block {
  width: 400px;
  border-radius: 20px;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
  border: solid;
}
.green {
  background-color: green;
}
</style>
