import Image from "next/image";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: lime,
    secondary: purple,
  },
});

export default function Home() {
  return <ThemeProvider theme={theme}></ThemeProvider>;
}
