import { useEffect, useState } from "react";

// Hook
const useWidth = () => {
  const [windoWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windoWidth;
};

export default useWidth;
