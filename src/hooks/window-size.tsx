import { useState, useEffect } from "react";

export const useWindowSize = () => {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);

  // Listening for the window resize event
  useEffect(() => {
    const resizeHandler = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };

    window.addEventListener("resize", resizeHandler);

    //clean up function
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);
  
  const [, w] = size;

  return w > 768;
};
