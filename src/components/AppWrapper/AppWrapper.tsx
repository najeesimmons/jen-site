import { AppShell, Burger, Center } from "@mantine/core";
import { ReactNode } from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

interface AppWrapperProps {
  children: ReactNode;
}

export default function AppWrapper({ children }: AppWrapperProps) {
  return (
    <AppShell header={{ height: 60 }} padding="sm">
      <AppShell.Header>
        <HeaderMenu />
      </AppShell.Header>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
