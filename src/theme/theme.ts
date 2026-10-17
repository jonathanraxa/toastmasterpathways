import { createTheme } from "@mui/material/styles";

// Palette inspired by Toastmasters brand colors (Loyal Blue / True Maroon)
export const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: { main: "#004165" },
        secondary: { main: "#772432" },
      },
    },
    dark: {
      palette: {
        primary: { main: "#6fa8d6" },
        secondary: { main: "#d77b8a" },
      },
    },
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: "Roboto, system-ui, sans-serif",
  },
});
