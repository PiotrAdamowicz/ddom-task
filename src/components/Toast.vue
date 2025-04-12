<script lang="ts" setup>
import type { Toast } from "../types/types";

const { data } = defineProps<{ data: Toast }>();
const show = defineModel<boolean>();
</script>
<template>
  <div
    v-if="show"
    class="absolute z-30 top-0 right-5 flex bg-red-500 text-bold rounded-md m-2"
  >
    <p
      v-if="(data.statusCode = 404)"
      class="text-white font-semibold px-2 py-2"
    >
      Error {{ data.statusCode }} page not found
    </p>
    <p
      v-else-if="(data.statusCode = 500)"
      class="text-white font-semibold px-2 py-2"
    >
      Error {{ data.statusCode }} server error please try again
    </p>
    <p v-else="data.error" class="text-white px-2 py-2">
      {{ data.error }}
    </p>
    <button
      @click="show = false"
      class="font-semibold px-2 mx-2 cursor-pointer transition hover:text-zinc-700"
    >
      Close
    </button>
  </div>
</template>
