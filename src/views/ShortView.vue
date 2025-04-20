<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

import { linkCreation } from '../modules/apis/linkCheck.ts'

const route = useRoute()

const pageMount = async () => {
  const search = await linkCreation(route.params.slug)

  window.location.replace(search)
}

onMounted(async () => {
  await pageMount()
})
</script>

<template>
  <h1>
    {{ $route.params.slug }}
  </h1>
</template>
