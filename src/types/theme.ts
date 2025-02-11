// theme.ts
import { extendTheme, type ThemeConfig } from "@chakra-ui/theme-tools";

// Step 1: Define your customizations
const config: ThemeConfig = {
  initialColorMode: "light", // 'light' or 'dark'
  useSystemColorMode: false,
};

const customTheme = extendTheme({
  config, // color mode config
  colors: {
    brand: {
      500: "#3182ce", // Blue as brand color
    },
  },
  fonts: {
    // Custom fonts
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
  components: {
    // Override component styles (e.g., Button, Input)
    Button: {
      variants: {
        solid: {
          bg: "brand.500",
          _hover: { bg: "brand.600" },
        },
      },
    },
  },
  styles: {
    // Global styles (e.g., body background)
    global: {
      body: {
        bg: "white",
        color: "gray.800",
      },
    },
  },
});

export default customTheme;
