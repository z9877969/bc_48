export const theme = {
  colors: {
    success: "#fff",
    error: "red",
    warn: "orange",
  },
};

export const lighTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    success: "green",
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    success: "red",
  },
};
