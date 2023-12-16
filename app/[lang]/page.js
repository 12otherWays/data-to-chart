"use client";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import getDesignTokens from "../_utils/Theme";

import { getDictionary } from "./dictionaries";
import DtcButton from "../_components/appComponents/DtcButton";
const Theme = createTheme(getDesignTokens("dark"));

export default async function Home({ params: { lang } }) {
  const { page } = await getDictionary(lang);
  return (
    <ThemeProvider theme={Theme}>
      <DtcButton value={page.about.title} />
    </ThemeProvider>
  );
}
