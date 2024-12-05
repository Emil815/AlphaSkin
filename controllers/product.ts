// Example: Function to fetch a list of products

export const fetchProducts = async () => {
  const config = useRuntimeConfig();

  console.log("products isledi");
  try {
    const response = await $fetch(`/api/product/filter`, {
      method: "GET",
      baseURL: config.public.apiBase,
    });
    return response; // Return product list
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
