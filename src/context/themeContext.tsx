import { createContext, useEffect } from "react";
import { getCookie, removeCookie, setCookie } from "services/helpers";

export const ThemeContext = createContext({
  themeIconHandler: (props: any) => {},
});

export const ThemeContextProvider = (props: any) => {
  const themeIconHandler = (e: any) => {
    removeCookie("theme");
    setCookie("theme", e.target.value.toLowerCase());
    document.documentElement.setAttribute(
      "theme",
      e.target.value.toLowerCase()
    );
  };

  useEffect(() => {
    const theme = getCookie("theme");
    if (theme) {
      document.documentElement.setAttribute("theme", theme.toLowerCase());
    }
    return () => {};
  }, []);

  return (
    <ThemeContext.Provider value={{ themeIconHandler: themeIconHandler }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
