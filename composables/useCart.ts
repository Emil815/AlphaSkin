import { addToBasket, fetchBasket } from "~/controllers/basket";

export const useCart = () => {
  const useCartLoading = () => useState("cart_loading", () => false);
  const useCartItems = () => useState("cart_items", () => []);

  const setCartItems = (cartItemsFromApi) => {
    const cartItems = useCartItems();
    cartItems.value = cartItemsFromApi;
  };

  
  const setLoading = (loadingCart) => {
    const loading = useCartLoading();
    loading.value = loadingCart;
  };

  const addToCart = async (product) => {
    setLoading(true)
    const result = await addToBasket(product);

    const allItems = await getCartItems();

    console.log({ result, allItems });
  };

  const getCartItems = async () => {
    // setLoading(true)
    const result = await fetchBasket();

    console.log({ result });
    setCartItems(result);
    setLoading(false);

  };

  return { useCartLoading, addToCart, getCartItems, useCartItems };
};
