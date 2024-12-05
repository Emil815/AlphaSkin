export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const userQuery = getQuery(event);
  const { name } = userQuery;

  const popularProducts = await $fetch("/api/product/filter", {
    method: "GET",
    baseURL: config.public.apiBase,
    query: { name },
  });

  return { popularProducts };
});
