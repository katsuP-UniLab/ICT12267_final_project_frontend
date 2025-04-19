<script setup lang="ts">
import { ref } from 'vue'

import CreateBox from '@/components/CreateBox.vue'
import ResultBox from '@/components/ResultBox.vue'

const state = ref<boolean>(false)
const value = ref<string>('')
const code = ref<string>('')
console.log(state.value)

const toggle = () => {
  state.value = !state.value
  // console.log(state.value)
}

const forceSlug = (link: string) => {
  value.value = link
}
const codeSwitch = (code64: string) => {
  code.value = code64
}
</script>

<template>
  <main>
    <div class="w-full h-screen flex items-center justify-center">
      <CreateBox :state="toggle" :value="forceSlug" :code="codeSwitch" v-if="state == false" />
      <ResultBox :state="toggle" :link="value" :value="code" v-else />
    </div>
  </main>
</template>
