import { ThemeProvider } from "styled-components";
import { lighTheme, darkTheme } from "./themes";

const Theme = ({ children }) => {
  const state = { theme: localStorage.getItem("theme") || "light" };

  const changeTheme = (theme) => {
    // setState({theme: theme})
    localStorage.setItem("theme", theme);
  };

  return (
    <ThemeProvider theme={state.theme === "light" ? lighTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
