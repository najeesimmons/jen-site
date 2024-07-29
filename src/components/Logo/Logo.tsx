import { Box, Image } from "@mantine/core";

export default function Logo({ size = 50, ...others }) {
  return (
    <Box
      w={size}
      h={size}
      display={"flex"}
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        src="/jen_logo.svg" // Path to the SVG in the public folder
        alt="Logo"
        width={size}
        height={size}
        mb={15}
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      />
    </Box>
  );
}
