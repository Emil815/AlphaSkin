export default defineNuxtRouteMiddleware((to) => {
  if (to.path.endsWith("/register")) {
    setPageLayout("authlayout");
  }
});
