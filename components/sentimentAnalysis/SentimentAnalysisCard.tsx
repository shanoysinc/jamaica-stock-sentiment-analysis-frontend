import { Box, Text, Heading } from "@chakra-ui/react";
import React from "react";

export const SentimentAnalysisCard = () => {
  return (
    <Box
      bgColor={"white"}
      borderColor={"#e5e7eb"}
      borderWidth={1}
      width={400}
      height={200}
      borderRadius={12}
      p={4}
      gap={12}
    >
      <Text color={"#64748b"} fontSize={"lg"}>
        Sagicor
      </Text>
      <Text color={"black"} fontSize={"larger"} fontWeight="bold">
        Overwhelmingly Positive
      </Text>

      <Box>
        <Text color={"#64748b"} fontSize={"md"}>
          Negative
        </Text>
        <Box>
          <Text color={"#64748b"} fontSize={"md"}>
            Negative
          </Text>
        </Box>
      </Box>
      <Box></Box>
      <Box></Box>
    </Box>
  );
};
