<script setup>

import {useSampleStore} from "@/sampleStore.js";

const store = useSampleStore()

</script>

<template>
  <main>
    <button @click="store.index++">Next id</button>
      <h2>{{ store.name }}</h2>
  </main>
</template>