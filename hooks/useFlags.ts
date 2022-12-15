import { useCallback } from "react";

const useFlags = async () => {
  const result = await fetch("https://restcountries.com/v3.1/all", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });

  const data = await result.json();

  return data;
};

export default useFlags;
