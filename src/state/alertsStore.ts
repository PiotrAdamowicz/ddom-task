import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const useAlertsStore = defineStore("alerts", () => {
  const text = ref("");
  const status = ref<number | null>(0);
  const showAlert = ref(false);

  function setAlert(message: Ref<string>, statusCode: Ref<number | null>) {
    text.value = message.value;
    status.value = statusCode.value;
    if (message.value) showAlert.value = true;
  }
  function clearAlert() {
    showAlert.value = false;
    text.value = "";
    status.value = 0;
  }

  return {
    text,
    status,
    showAlert,
    setAlert,
    clearAlert
  };
});
