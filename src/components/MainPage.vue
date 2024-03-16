<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

onMounted(() => {
    debugger;
    if (!route.query.token) {
        
    // @ts-ignore
    YaAuthSuggest.init(
    {
        client_id: 'abf332b273694f8e9889a9541db65bf3',
        response_type: 'token',
    },
    'https://mindik.github.io/test-pages',
    {
      view: "button",
      parentId: "buttonContainerId",
      buttonSize: 'm',
      buttonView: 'main',
      buttonTheme: 'light',
      buttonBorderRadius: "0",
      buttonIcon: 'ya',
    }
)
.then(({handler}: any) => handler())
.then((data: any) => console.log('Сообщение с токеном', data))
.catch((error: any) => console.log('Обработка ошибки', error))
} else {
    // @ts-ignore
    YaSendSuggestToken(
   'https://mindik.github.io/test-pages',
   {
      flag: true
   }
)
}
})


</script>

<template>
  Main page
</template>