<script setup lang="ts">
import { onMounted } from 'vue';
onMounted(() => {
// @ts-ignore
YaSendSuggestToken(
   'http://127.0.0.1:5173/main',
   {
      flag: true
   }
)
});

</script>

<template>
  Hello world
</template>