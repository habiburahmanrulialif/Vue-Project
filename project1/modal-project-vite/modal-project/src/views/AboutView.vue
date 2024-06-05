<script setup>
import { useCounterStore } from '@/stores/counter';

const store = useCounterStore();
</script>

<template>
  <div class="about">
    <p>Count: {{ store.count }}</p>
    <button v-on:click="store.increment">Increase</button>
    <button @click="store.decrement">Decrease</button>
    <p>id : {{ store.$id }}</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
