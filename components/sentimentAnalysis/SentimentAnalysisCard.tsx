import { Box, Text, Heading, Flex, Progress } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BiSmile, BiMeh } from "react-icons/bi";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { MdOutlineSentimentNeutral } from "react-icons/md";
export const SentimentAnalysisCard = () => {
  return (
    <Link href={"/company"}>
      <Box
        bgColor={"white"}
        borderColor={"#e5e7eb"}
        borderWidth={1}
        width={[360, 420]}
        borderRadius={12}
        p={4}
        gap={12}
        boxShadow="sm"
        cursor={"pointer"}
      >
        <Text color={"#64748b"} fontSize={"sm"} fontWeight={500} textTransform={`capitalize`}>
          {`Sagicor`.toUpperCase()}
        </Text>
        <Text color={"black"} fontSize={"larger"} fontWeight="bold">
          Overwhelmingly Positive
        </Text>

        <Box display={"flex"} gap={1} py={6}>
          <Progress
            height={"14px"}
            width={"20%"}
            borderRadius={6}
            sx={{
              "& > div": {
                background: "#e6484d",
              },
            }}
            size="lg"
            value={100}
          />
          <Progress
            height={"14px"}
            width={"40%"}
            borderRadius={6}
            sx={{
              "& > div": {
                background: "#ff9f1b",
              },
            }}
            size="lg"
            value={100}
          />
          <Progress
            height={"14px"}
            width={"40%"}
            borderRadius={6}
            colorScheme="whatsapp"
            size="lg"
            value={100}
            sx={{
              "& > div": {
                background: "#46a759",
              },
            }}
          />
        </Box>

        <Flex gap={12}>
          <Flex
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent="space-between"
          >
            <Text color={"#64748b"} fontSize={"md"}>
              Negative
            </Text>
            <Flex mt={1} alignItems="center" gap={2}>
              <HiOutlineEmojiSad color="#ef4444" size={24} />
              <Text fontWeight={"bold"}>123</Text>
            </Flex>
          </Flex>
          <Flex
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent="space-between"
          >
            <Text color={"#64748b"} fontSize={"md"}>
              Neutral
            </Text>
            <Flex mt={1} alignItems="center" gap={2}>
              <BiMeh color="#ff9f1b" size={24} />
              <Text fontWeight={"bold"}>123</Text>
            </Flex>
          </Flex>
          <Flex
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent="space-between"
          >
            <Text color={"#64748b"} fontSize={"md"}>
              Positive
            </Text>
            <Flex mt={1} alignItems="center" gap={2}>
              <BiSmile color="#46a759" size={24} />
              <Text fontWeight={"bold"}>104</Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Link>
  );
};
