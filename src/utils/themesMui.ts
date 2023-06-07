export const themePalette = {
  primary: { main: "#00e7ff" },
  secondary: { main: "#009eff" },
};

export const themeCard = {
  styleOverrides: {
    root: {
      width: "13.125rem",
      height: "6.25rem",
      boxShadow: "0px 0px 9px 2px rgba(0, 231, 255, 0.63)",
      borderRadius: "13px",
    },
  },
};

export const themeLinearProgress = {
  styleOverrides: { root: { height: "8px", borderRadius: "3px" } },
};

export const themeBackdrop = { styleOverrides: { root: { zIndex: "100" } } };

export const themeDataTable = {
  styleOverrides: {
    columnHeaders: { background: "#00e7ff", borderRadius: "10px" },
    iconSeparator: { color: "#009eff" },
    root: { border: "none" },
    columnHeaderTitle: { fontWeight: "700" },
    "cell--textLeft": {
      cursor: "default",
      "&:focus": { outline: "none" },
    },
  },
};
