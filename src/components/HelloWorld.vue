<script setup lang="ts">
import { onMounted } from 'vue';
onMounted(() => {
// @ts-ignore
YaSendSuggestToken(
  'https://mindik.github.io/test-pages/',
   {
      flag: true
   }
)
});

</script>

<template>
  Hello world
</template>