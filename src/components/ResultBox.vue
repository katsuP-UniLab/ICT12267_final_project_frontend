<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  state: () => void
  link: string
  value: string
}>()

const copy = () => {
  const clipboardData =
    event.clipboardData ||
    window.clipboardData ||
    event.originalEvent?.clipboardData ||
    navigator.clipboard

  clipboardData.writeText(props.link)
  alert('Link copied!')
}

const reset = () => {
  props.state()
}
</script>

<template>
  <div
    class="min-w-[18rem] max-w-[60%] w-full bg-cat-mantle text-cat-text rounded-xl border-2 border-solid border-cat-subtext-1 p-4 text-center flex flex-col items-center gap-4"
  >
    <h1 class="font-bold text-xl underline">Link Shortener Services</h1>
    <div class="flex flex-row gap-4">
      <input
        type="text"
        :value="props.link"
        class="border-2 border-solid border-cat-text text-cat-subtext-0 rounded-xl min-w-[18rem] text-center px-4 py-2"
        disabled
      />
      <button
        class="p-4 bg-cat-sapphire text-cat-crust rounded-xl hover:scale-90 hover:opacity-60 hover:cursor-pointer"
        @click="copy"
      >
        Copy
      </button>
    </div>
    <img :src="value" class="w-[10rem] h-[10rem]" alt="qrcode" />

    <div class="flex flex-col gap-2">
      <h1>Is it not enough?</h1>
      <button
        type="button"
        class="px-4 py-2 bg-cat-sapphire text-cat-crust rounded-xl hover:scale-90 hover:opacity-60 hover:cursor-pointer"
        @click="reset"
      >
        Create a new link
      </button>
    </div>
  </div>
</template>
