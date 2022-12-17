import { useCallback } from "react";

const useCloud = () => {
  const fetchCards = useCallback(async () => {
    const result = await fetch("/api/cloudinaryAPI");
    const data = await result.json();
    console.log(data);
    return data;
  }, []);
  return { fetchCards };
};

export default useCloud;
