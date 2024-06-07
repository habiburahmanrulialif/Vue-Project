<template>
  <div v-if="!result">Click here when the color change!</div>
  <div v-if="result">Your reaction time is {{ result }} ms</div>
  <h2 v-if="result">{{ computing }}</h2>
</template>

<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
  result: Number
})

const computing = computed(() => {
  if (props.result < 100) {
    return 'Blazing FAAAAAST';
  }
  else if(props.result <200){
    return 'Fast boiiii';
  }
  else if(props.result <300){
    return 'Pro gamer';
  }
  else if(props.result < 400){
    return 'Normie!';
  }
  else {
    return 'why even trying?';
  }
})
</script>
