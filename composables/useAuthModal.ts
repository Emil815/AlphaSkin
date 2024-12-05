const useAuthModal = () => {
  const loginPanel = useState("loginPanel", () => false);

  const setLoginPanel = (panelData) => {
    console.log({ panelData });
    loginPanel.value = panelData;
  };
  return {
    loginPanel,
    setLoginPanel,
  };
};
export default useAuthModal;
