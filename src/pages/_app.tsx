import "@/styles/globals.css";
import "@mantine/core/styles.css";
import type { AppProps } from "next/app";
import {
  MantineColorsTuple,
  MantineProvider,
  MantineThemeOverride,
} from "@mantine/core";
import AppWrapper from "@/components/AppWrapper/AppWrapper";

export default function App({ Component, pageProps }: AppProps) {
  const purpleJen: MantineColorsTuple = [
    "#fbf5fd", // in use
    "#dce4f5",
    "#c8bad2",
    "#aa91bd",
    "#9e84b2",
    "#8e72a3",
    "#826797", // in use
    "#b1a5ba",
    "#705883",
    "#69527c",
    "#5f4b70",
  ];

  const theme: MantineThemeOverride = {
    colors: {
      purpleJen: purpleJen,
    },
  };

  return (
    <MantineProvider theme={theme}>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </MantineProvider>
  );
}
