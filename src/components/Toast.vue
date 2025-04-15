<script lang="ts" setup>
import { computed, ref } from "vue";
import { useAlertsStore } from "../state/alertsStore.ts";
import type { Toast } from "../types/types";

const store = useAlertsStore();

const { data } = defineProps<{ data?: Toast }>();

const resolvedStatusCode = computed(() => data?.statusCode ?? store.status);
const resolvedError = computed(() => data?.error ?? store.text);
const show = computed(() => data?.error || store.showAlert);
</script>
<template>
  <div
    v-if="show"
    class="absolute z-30 top-0 right-5 flex bg-red-500 text-bold rounded-md m-2"
  >
    <p
      v-if="(resolvedStatusCode = 404)"
      class="text-white font-semibold px-2 py-2"
    >
      Error {{ resolvedStatusCode }} page not found
    </p>
    <p
      v-else-if="(resolvedStatusCode = 500)"
      class="text-white font-semibold px-2 py-2"
    >
      Error {{ resolvedStatusCode }} server error please try again
    </p>
    <p v-else="resolvedError" class="text-white px-2 py-2">
      {{ resolvedError }}
    </p>
    <button
      @click="store.clearAlert()"
      class="font-semibold px-2 mx-2 cursor-pointer transition hover:text-zinc-700"
    >
      Close
    </button>
  </div>
</template>
