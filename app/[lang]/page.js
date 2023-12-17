"use client";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import getDesignTokens from "../_utils/Theme";
import { getDictionary } from "./dictionaries";
import InputLayout from "../_components/input/InputLayout";

const Theme = createTheme(getDesignTokens("light"));

export default async function Home({ params: { lang } }) {
  const { page } = await getDictionary(lang);
  return (
    <ThemeProvider theme={Theme}>
      <InputLayout page={page} />
    </ThemeProvider>
  );
}
