<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

let page = ref('')

let route = useRouter()
page.value = route.currentRoute.value
</script>

<template>
  <div class="w-full top-0 left-0 sticky flex justify-end items-center p-4 gap-4">
    <a
      :href="page.name == 'home' ? '#' : '/'"
      :class="`px-5 py-3 border-2 border-solid rounded-xl ${page.name == 'home' ? 'bg-cat-mantle opacity-60 rounded border-cat-sapphire text-cat-sapphire' : 'text-cat-text bg-cat-base border-cat-text'} hover:bg-cat-mantle hover:opacity-60 hover:rounded hover:border-cat-sapphire hover:text-cat-sapphire`"
    >
      Home
    </a>
    <a
      :href="page.name == 'check' ? '#' : '/check'"
      :class="`px-5 py-3 border-2 border-solid rounded-xl ${page.name == 'check' ? 'bg-cat-mantle opacity-60 rounded border-cat-sapphire text-cat-sapphire' : 'text-cat-text bg-cat-base border-cat-text'} hover:bg-cat-mantle hover:opacity-60 hover:rounded hover:border-cat-sapphire hover:text-cat-sapphire`"
    >
      Check Link
    </a>
  </div>
</template>
