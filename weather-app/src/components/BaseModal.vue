<template>
  <div v-show="handler.modalActive" class="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8">
    <div v-if="handler.modalActive" class="p-4 bg-white self-start mt-32 max-w-screen-md">
      <slot />
      <button @click="handler.modalhandler" class="text-white mt-8 bg-weather-primary py-2 px-6">
        Tutup
      </button>
    </div>
  </div>
</template>

<script setup>
import { handlerStore } from '../stores/handler.js';

const handler = handlerStore();

</script>

<style lang="scss" scoped></style>