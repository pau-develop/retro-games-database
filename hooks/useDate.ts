const useDate = () => {
  const date = new Date().toLocaleDateString().padStart(10, "0");

  return date;
};

export default useDate;
