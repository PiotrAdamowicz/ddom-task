<script setup lang="ts">
import { watch } from "vue";
import { useFetch } from "@vueuse/core";
import UserCard from "./components/UserCard.vue";
import Toast from "./components/Toast.vue";
import Loader from "./components/Loader.vue";
import { useAlertsStore } from "./state/alertsStore.ts";

const store = useAlertsStore();

const {
  isFetching,
  isFinished,
  error,
  data: users,
  statusCode
} = useFetch("https://jsonplaceholder.typicode.com/users").get().json();

watch(error, (newError) => {
  if (newError) {
    store.setAlert(error, statusCode);
  }
});
</script>

<template>
  <Loader :loading="isFetching && !isFinished" />
  <Toast />
  <main class="w-full">
    <ul
      class="w-full flex flex-col gap-4 md:flex-row flex-wrap py-4 px-2 justify-center"
    >
      <li
        v-for="user in users"
        :key="user.id"
        class="md:w-1/4 bg-gray-400 rounded-md px-4 py-4 flex flex-row md:flex-col flex-wrap justify-between"
      >
        <UserCard :user="user" />
      </li>
    </ul>
  </main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
