import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import getDesignTokens from "./utils/Theme";
const Theme = createTheme(getDesignTokens("dark"));

export default function Home() {
  return <ThemeProvider theme={Theme}></ThemeProvider>;
}
