<script setup lang="ts">
import { onMounted } from 'vue';
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