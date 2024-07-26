import {
  Text,
  Title,
  TextInput,
  Button,
  Image,
  useMantineTheme,
} from "@mantine/core";
import classes from "./Home.module.css";

export default function Home() {
  const theme = useMantineTheme();
  return (
    <div
      id="home"
      className={classes.wrapper}
      style={{ backgroundColor: theme.colors.purpleJen[0] }}
    >
      <div style={{ maxWidth: 900, display: "flex", margin: "0 auto" }}>
        <div className={classes.body}>
          <Title className={classes.title}>First Message</Title>
          <Text fw={500} fz="lg" mb={5}>
            Subscribe to our newsletter!
          </Text>
          <Text fz="sm" c="dimmed">
            You will never miss important product updates, latest news and
            community QA sessions. Our newsletter is once a week, every Sunday.
          </Text>

          <div className={classes.controls}>
            <TextInput
              placeholder="Your email"
              classNames={{ input: classes.input, root: classes.inputWrapper }}
            />
            <Button className={classes.control}>Subscribe</Button>
          </div>
        </div>
        <Image
          src={"./undraw_open_note_gwm9.svg"}
          className={classes.image}
          // TODO: alt tag
          alt=""
        />
      </div>
    </div>
  );
}
