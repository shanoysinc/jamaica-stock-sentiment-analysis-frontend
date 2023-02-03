import { Box, Flex, Heading } from "@chakra-ui/react";
import { SentimentAnalysisCard } from "./SentimentAnalysisCard";
import React from "react";

export const SentimentAnalysisItems = () => {
  return (
    <Box px={[3, 10]} py={14}>
      <Heading color={"gray.700"} size={"md"} pb={8}>
        Companies Sentiment Analysis
      </Heading>

      <Flex flexWrap={"wrap"} gap={4}>
        <SentimentAnalysisCard />
        <SentimentAnalysisCard />
        <SentimentAnalysisCard />
        <SentimentAnalysisCard />
      </Flex>
    </Box>
  );
};
