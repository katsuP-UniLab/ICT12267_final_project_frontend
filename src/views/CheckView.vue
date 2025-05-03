<script setup lang="ts">
import { ref } from 'vue'

import NavBar from '@/components/NavBar.vue'
import ReverseCreateBox from '@/components/ReverseCreateBox.vue'
import ReverseResultBox from '@/components/ReverseResultBox.vue'

const state = ref<boolean>(false)
const value = ref<string>('')
const code = ref<string>('')

const toggle = () => {
  state.value = !state.value
}

const forceSlug = (link: string) => {
  value.value = link
}
const codeSwitch = (code64: string) => {
  code.value = code64
}
</script>

<template>
  <NavBar />
  <main>
    <div class="w-full h-screen flex flex-col items-center justify-start gap-6 pt-4">
      <ReverseCreateBox
        :state="toggle"
        :value="forceSlug"
        :code="codeSwitch"
        v-if="state == false"
      />
      <ReverseResultBox :state="toggle" :link="value" :value="code" v-else />
    </div>
  </main>
</template>
