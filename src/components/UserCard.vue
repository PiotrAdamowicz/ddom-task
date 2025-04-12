<script lang="ts" setup>
import type { User } from "../types/types";

const { user } = defineProps<{ user: User }>();
</script>
<template>
  <span class="flex">
    <p class="text-xs font-bold">Name:</p>
    <p class="text-xs mx-2">{{ user.name }}</p>
  </span>
  <span class="flex">
    <p class="text-xs font-bold">Company:</p>
    <p class="text-xs mx-2">{{ user.company.name }}</p>
  </span>
  <span class="flex">
    <p class="text-xs font-bold">Phone:</p>
    <p class="text-xs mx-2">{{ user.phone }}</p>
  </span>
  <span class="flex">
    <p class="text-xs font-bold">City:</p>
    <p class="text-xs mx-2">{{ user.address.city }}</p>
  </span>
  {{ console.log(user) }}
</template>
