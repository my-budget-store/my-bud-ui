import { useState, useEffect } from "react";

export const WindowSize = () => {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);

  // Listening for the window resize event
  useEffect(() => {
    const resizeHandler = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return size;
};
