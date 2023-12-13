import { ThemeProvider } from "@mui/material/styles";
import Theme from "./utils/Theme";

export default function Home() {
  return <ThemeProvider theme={Theme}></ThemeProvider>;
}
