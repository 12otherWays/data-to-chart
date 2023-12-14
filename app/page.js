import { ThemeProvider } from "@mui/material/styles";
import Theme from "./utils/Theme";
import { BarGraph } from "./component/graph/charts/BarGraph";
import InputLayout from "./component/input/InputLayout";
import GraphLayout from "./component/graph/GraphLayout";

export default function Home() {
  return (
    <ThemeProvider theme={Theme}>
      <InputLayout />
      <GraphLayout />
    </ThemeProvider>
  );
}
