export default defineNuxtPlugin(() => ({
  provide: {
    locally: {
      getItem(key) {
        if (import.meta.client)
          return JSON.parse(localStorage.getItem(key));

        return undefined;
      },
      setItem(key, value) {
        if (import.meta.client)
          return localStorage.setItem(key, JSON.stringify(value));
      }
    }
  }
}));
