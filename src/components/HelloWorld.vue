<script setup lang="ts">
import { onMounted } from 'vue';
console.log('test-login page')
onMounted(() => {
// @ts-ignore
YaSendSuggestToken(
  'https://mindik.github.io/test-pages/#/main',
   {
      flag: true
   }
)
});

</script>

<template>
  Hello world
</template>