import { Box, Heading } from "@chakra-ui/react";
import { SentimentAnalysisCard } from "./SentimentAnalysisCard";
import React from "react";

export const SentimentAnalysisItems = () => {
  return (
    <Box px={100} py={10}>
      <Heading color={"gray.700"} size={"lg"} pb={8}>
        Companies Sentiment Analysis
      </Heading>

      <SentimentAnalysisCard />
    </Box>
  );
};
