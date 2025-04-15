import { defineStore } from "pinia";
import { ref } from "vue";

export const useAlertsStore = defineStore("alerts", () => {
  const text = ref("");
  const status = ref(0);
  const showAlert = ref(false);

  function setAlert(message: string, statusCode: number) {
    showAlert.value = true;
    text.value = message;
    status.value = statusCode;
  }

  return {
    text,
    status,
    showAlert,
    setAlert
  };
});
