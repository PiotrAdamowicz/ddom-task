// __tests__/userFetch.test.ts
import { describe, it, expect, vi, beforeEach } from "vitest";
import { ref } from "vue";
import { useFetch } from "@vueuse/core";
import { createPinia, setActivePinia } from "pinia";
import { useAlertsStore } from "../state/alertsStore";

vi.mock("@vueuse/core", () => ({
  useFetch: vi.fn()
}));

describe("useAlertsStore with different status codes", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.clearAllMocks();
  });

  it("store handles 200 OK", async () => {
    vi.mocked(useFetch).mockReturnValue({
      get: () => ({
        json: () => ({
          isFetching: { value: false },
          isFinished: { value: true },
          error: { value: null },
          statusCode: { value: 200 },
          data: { value: [{ id: 1, name: "Alice" }] }
        })
      })
    } as any);

    const store = useAlertsStore();
    store.clearAlert();

    expect(store.text).toBe("");
    expect(store.status).toBe(0);
    expect(store.showAlert).toBe(false);
  });

  it("store handles 404 Page Not Found", async () => {
    vi.mocked(useFetch).mockReturnValue({
      get: () => ({
        json: () => ({
          isFetching: { value: false },
          isFinished: { value: true },
          error: { value: null },
          statusCode: { value: 404 },
          data: { value: [{ id: 1, name: "Alice" }] }
        })
      })
    } as any);

    const store = useAlertsStore();
    const error = ref("Page Not Found");
    const status = ref(404);
    store.setAlert(error, status);

    expect(store.text).toBe("Page Not Found");
    expect(store.status).toBe(404);
    expect(store.showAlert).toBe(true);
  });
  it("store handles 500 Internal Server Error", async () => {
    vi.mocked(useFetch).mockReturnValue({
      get: () => ({
        json: () => ({
          isFetching: { value: false },
          isFinished: { value: true },
          error: { value: { message: "Internal Server Error" } },
          statusCode: { value: 500 },
          data: { value: null }
        })
      })
    } as any);

    const store = useAlertsStore();
    const error = ref("Internal Server Error");
    const status = ref(500);
    store.setAlert(error, status);

    expect(store.text).toBe("Internal Server Error");
    expect(store.status).toBe(500);
    expect(store.showAlert).toBe(true);
  });

  it("store handles network failure", async () => {
    vi.mocked(useFetch).mockReturnValue({
      get: () => ({
        json: () => ({
          isFetching: { value: false },
          isFinished: { value: false },
          error: { value: { message: "Network error" } },
          statusCode: { value: null },
          data: { value: null }
        })
      })
    } as any);

    const store = useAlertsStore();
    const error = ref("Network error");
    const status = ref(null);
    store.setAlert(error, status);

    expect(store.text).toBe("Network error");
    expect(store.status).toBe(null);
    expect(store.showAlert).toBe(true);
  });
});
