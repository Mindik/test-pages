<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

onMounted(() => {
    if (!route.query.token) {
    // @ts-ignore
    YaAuthSuggest.init(
{
    client_id: 'abf332b273694f8e9889a9541db65bf3',
    response_type: 'token',
    redirect_uri: 'http://127.0.0.1:5173/test-login'
},
'http://127.0.0.1:5173',

)
.then((handler: any) => handler())
.then((data: any) => console.log('Сообщение с токеном', data))
.catch((error: any) => console.log('Обработка ошибки', error))
} else {
    // @ts-ignore
    windows.YaSendSuggestToken(
   'http://127.0.0.1:5173',
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