<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { linkCreation } from '@/modules/apis/linkCheck.ts'
import { CodeGenerator } from '@/modules/qrCodeGenerator.ts'

const props = defineProps<{
  state: () => void
  value: () => void
  code: () => void
}>()

const router = useRouter()

const link = ref<string>('')

const submitFunction = async (e) => {
  e.preventDefault()

  if (link != '') {
    let newSlug = link.value.split('/sh/').reverse()[0]
    let create = await linkCreation(newSlug)

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
    class="min-w-[18rem] max-w-[60%] w-full bg-cat-mantle text-cat-text rounded-xl border-2 border-solid border-cat-subtext-1 px-4 py-6 text-center flex flex-col items-center gap-4"
  >
    <h1 class="font-bold text-xl underline">Reversed Link Check</h1>
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
        Reverse!
      </button>
    </form>
  </div>
</template>
