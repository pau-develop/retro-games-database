import { useCallback } from "react";

const useCloud = () => {
  const fetchImages = useCallback(async (tag: string) => {
    const result = await fetch(`/api/cloudinaryAPI?tag=${tag}`);
    const data = await result.json();
    return data;
  }, []);
  return { fetchImages };
};

export default useCloud;
