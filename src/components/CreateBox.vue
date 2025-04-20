<script setup lang="ts">
import { ref } from 'vue'

import { linkCreation } from '@/modules/apis/linkCreation.ts'
import { CodeGenerator } from '@/modules/qrCodeGenerator.ts'

const props = defineProps<{
  state: () => void
  value: () => void
  code: () => void
}>()

const link = ref<string>('')

const submitFunction = async (e) => {
  e.preventDefault()

  if (link != '') {
    let create = await linkCreation(link.value)

    if (create !== undefined && create !== null) {
      props.value(create)

      const code = await CodeGenerator(create)

      if (code !== undefined && code !== null) {
        props.code(code)
        props.state()
      }
    }
  }
}

const update = (e) => {
  link.value = e.target.value
}
</script>

<template>
  <div
    class="min-w-[18rem] max-w-[60%] w-full bg-cat-mantle text-cat-text rounded-xl border-2 border-solid border-cat-subtext-1 p-4 text-center flex flex-col items-center gap-4"
  >
    <h1 class="font-bold text-xl underline">Link Shortener Services</h1>
    <form @submit="(e) => submitFunction(e)" class="w-full flex flex-col gap-4 items-center py-2">
      <input
        type="text"
        class="min-w-[18rem] border-2 border-solid border-cat-subtext-0 focus:border-cat-sapphire rounded p-2 text-center w-[18rem] focus:w-[60%] outline-0"
        placeholder="Enter Your Link Here"
        :value="link"
        @input="(e) => update(e)"
        required
      />
      <button
        class="p-2 border-2 border-solid border-cat-subtext-1 rounded hover:border-cat-sapphire hover:cursor-pointer hover:px-3 hover:opacity-60 hover:scale-90"
        type="submit"
      >
        Shorten!
      </button>
    </form>
  </div>
</template>
