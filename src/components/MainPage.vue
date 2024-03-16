<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
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
.then((data: any) => {
    console.log('Сообщение с токеном', data)
    const {access_token} = data;
    fetch('https://login.yandex.ru/info', {
        headers: {
            Authentication: `OAuth ${access_token}`
        }
    })
    .then(r => r.json())
    .then(console.log);
})
.catch((error: any) => console.log('Обработка ошибки', error))
})


</script>

<template>
  Main page
</template>