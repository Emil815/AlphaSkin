export const fetchBasket = async () => {
  try {
    const response = await useFetchApi(`/api/basket/query`, {
      method: "GET",
    });
    return response; // Return product list
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};


export const addToBasket = async (product) => {

    console.log({product})
  try {
    const response = await useFetchApi(`/api/basket/add`, {
      method: "POST",
      body: {
        productCode: product.code,
        quantity: 2,
        salesType: "RETAIL",
      },
    });
    return response; // Return product list
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};


export const deleteProductBasket = async () => {
  try {
    const response = await useFetchApi(`/api/basket/delete`, {
      method: "DELETE",
      body: {
        productCode: "1234",
      },
    });
    return response; // Return product list
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

