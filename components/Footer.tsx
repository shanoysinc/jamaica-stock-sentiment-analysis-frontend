import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Image,
  Divider
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";
import { SiShanghaimetro } from "react-icons/si";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box px={20} pt={20}>
      <Stack py={4} spacing={4} justify={"center"} align={"center"}>
        <HStack>
          <SiShanghaimetro fontSize={"28px"} color="#09AE6D" />
          <Text fontWeight={"bold"} color="#05af6e" fontSize="x-large">
            sentimetrics
          </Text>
        </HStack>
        <HStack gap={6}>
          <Link href={"#"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
        </HStack>
      </Stack>
      <Divider />
      <Box>
        <Stack
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2023 Hack Week. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
