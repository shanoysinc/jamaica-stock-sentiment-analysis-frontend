import { Box, Text, Heading, Flex, Progress } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { ImSad, ImSmile } from "react-icons/im";
import { MdOutlineSentimentNeutral } from "react-icons/md";
export const SentimentAnalysisCard = () => {
  return (
    <Link href={"/company"}>
      <Box
        bgColor={"white"}
        borderColor={"#e5e7eb"}
        borderWidth={1}
        width={[360, 420]}
        height={220}
        borderRadius={12}
        p={4}
        gap={12}
        boxShadow="sm"
        cursor={"pointer"}
      >
        <Text color={"#64748b"} fontSize={"lg"}>
          Sagicor
        </Text>
        <Text color={"black"} fontSize={"larger"} fontWeight="bold">
          Overwhelmingly Positive
        </Text>

        <Box display={"flex"} gap={6} py={6}>
          <Progress
            width={"20%"}
            borderRadius={6}
            colorScheme="red"
            size="lg"
            value={20}
          />
          <Progress
            width={"40%"}
            borderRadius={6}
            colorScheme="yellow"
            size="lg"
            value={40}
          />
          <Progress
            width={"40%"}
            borderRadius={6}
            colorScheme="whatsapp"
            size="lg"
            value={40}
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
            <Flex mt={2} alignItems="center" gap={2}>
              <ImSad color="#ef4444" size={20} />
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
            <Flex mt={2} alignItems="center" gap={2}>
              <MdOutlineSentimentNeutral color="#fb923c" size={24} />
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
            <Flex mt={2} alignItems="center" gap={2}>
              <ImSad color="#22c55e" size={20} />
              <Text fontWeight={"bold"}>104</Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Link>
  );
};
