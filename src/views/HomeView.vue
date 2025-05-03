<script setup lang="ts">
import { ref } from 'vue'

import NavBar from '@/components/NavBar.vue'
import CreateBox from '@/components/CreateBox.vue'
import ResultBox from '@/components/ResultBox.vue'

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
      <CreateBox :state="toggle" :value="forceSlug" :code="codeSwitch" v-if="state == false" />
      <ResultBox :state="toggle" :link="value" :value="code" v-else />

      <div
        id="about"
        class="min-w-[18rem] max-w-[40%] w-full border-2 border-solid border-cat-text rounded-xl p-4"
      >
        <h1 class="w-full text-center text-cat-text text-2xl font-bold underline mb-4">
          About this project
        </h1>
        <p class="md:w-[80%] w-full mx-auto text-cat-text mb-4 text-lg">
          &nbsp;&nbsp;This link shortener project is a full-stack web application designed to create
          and manage shortened URLs. Built using Express.js for the backend, it provides a fast and
          lightweight server environment to handle API requests and route redirection. MariaDB
          serves as the relational database to efficiently store and retrieve link data, including
          original URLs, shortened codes, and usage statistics. On the frontend, Vue.js delivers a
          responsive and dynamic user interface that allows users to generate new short links, view
          click analytics, and manage their URL entries with ease. The project emphasizes modular
          design, clean API architecture, and user-friendly interaction, making it a practical tool
          for both personal and small business use.
        </p>
      </div>
    </div>
  </main>
</template>
