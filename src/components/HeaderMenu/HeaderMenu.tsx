import { Group, Burger, Container, useMantineTheme, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./HeaderMenu.module.css";
import { headers } from "next/headers";

const links = [
  { link: "/about", label: "About Me  | " },
  { link: "/services", label: " Services  | " },
  { link: "/contact", label: " Contact" },
];

export default function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);
  const theme = useMantineTheme();

  const items = links.map((link) => {
    return (
      <Text key={link.label} style={{ cursor: "pointer" }} fw={400}>
        {link.label}
      </Text>
    );
  });

  return (
    <>
      <header
        className={classes.preHeader}
        style={{ backgroundColor: theme.colors.purpleJen[7] }}
      >
        <Container
          size="lg"
          display={"flex"}
          style={{ justifyContent: "space-between" }}
        >
          <Text size="sm" fw={300}>
            Questions? Call 111-111-1111
          </Text>
        </Container>
      </header>
      <header className={classes.header}>
        <Container
          size="md"
          display={"flex"}
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <MantineLogo size={28} />
          <Group gap={15} visibleFrom="sm">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </Container>
      </header>
    </>
  );
}
