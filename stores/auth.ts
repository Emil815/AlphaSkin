export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: '',
  }),
  actions: {
    setToken(token:string) {
      this.token = token;
    },
    logout() {
      this.token = '';
    },
  },
});
