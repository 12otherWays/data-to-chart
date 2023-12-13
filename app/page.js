import { ThemeProvider } from "@mui/material/styles";
import Theme from "./utils/Theme";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <ThemeProvider theme={Theme}>
      <Button>shdfhl</Button>
    </ThemeProvider>
  );
}
