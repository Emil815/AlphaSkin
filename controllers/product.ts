// Example: Function to fetch a list of products



export const fetchProducts = async () => {
  try {
    const response = await useFetchApi(`/api/product/filter`, {
      method: "GET",
    });
    return response; // Return product list
  } catch (error) {

    console.error("Error fetching products:", error);
    throw error;
  }
};
