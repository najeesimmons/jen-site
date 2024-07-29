import {
  Group,
  Burger,
  Container,
  useMantineTheme,
  Text,
  Anchor,
  Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./HeaderMenu.module.css";
import Logo from "../Logo/Logo";

const links = [
  { link: "/home", label: "Home  | ", href: "#home" },
  { link: "/services", label: " Services  | ", href: "#services" },
  { link: "/about", label: "About Me  | ", href: "#about" },
  { link: "/contact", label: " Contact" },
];

export default function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);
  const theme = useMantineTheme();

  const items = links.map((link) => {
    return (
      <Anchor
        href={link.href}
        key={link.label}
        style={{ cursor: "pointer" }}
        fw={500}
        c={"black"}
        underline="never"
      >
        <div>{link.label}</div>
      </Anchor>
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
          {/* <MantineLogo size={28} /> */}
          <Logo />
          <Group gap={15} visibleFrom="sm" mb="15px">
            {items}
          </Group>
          <Burger
            opened={opened}
            onClick={toggle}
            size="sm"
            hiddenFrom="sm"
            mb={"15px"}
          />
        </Container>
      </header>
    </>
  );
}
