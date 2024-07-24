import "@/styles/globals.css";
import "@mantine/core/styles.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import AppWrapper from "@/components/AppWrapper/AppWrapper";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </MantineProvider>
  );
}
