import { useEffect, useState } from "react";

const useWidth = () => {
  if (process.browser) {
    const [width, setWidth] = useState(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    useEffect(() => {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [width]);
    return width;
  }
  return 0;
};

export default useWidth;
