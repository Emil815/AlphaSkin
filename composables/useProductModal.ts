const useProductModal = () => {
  const productModal = useState("modalData", () => {});

  const setModalData = (modalData) => {
    productModal.value = modalData;
  };
  return {
    productModal,
    setModalData,
  };
};
export default useProductModal;
