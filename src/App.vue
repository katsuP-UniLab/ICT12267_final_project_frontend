<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import Footer from './components/Footer.vue'
</script>

<template>
  <div class="w-full min-h-screen bg-cat-base">
    <RouterView />
  </div>
  <Footer />
</template>
