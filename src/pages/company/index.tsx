import { LineGraph } from "components/Charts/LineGraph";
import React from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { SentimentAnalysisItems } from "components/sentimentAnalysis/SentimentAnalysisItems";
import Navbar from "../../../components/navbar/Navbar";
import { NewsItems } from "components/news/NewsItems";

export default function Index() {
  return (
    <Box bgColor={"#f3f4f6"} height={"100vh"}>
      <Navbar />
      <Box bgColor={"#f3f4f6"} px={50} py={12}>
        <SimpleGrid columns={3} spacing={14}>
          <Box gridColumnStart={1} gridColumnEnd={3}>
            <Text fontWeight={"bold"} fontSize={"x-large"} pb={4}>
              Sagicor Financial Company
            </Text>
            <LineGraph />
          </Box>
          <Box pt={4}>
            <Text fontWeight={"bold"} fontSize={"lg"}>
              Latest news for Sacigor
            </Text>
            <NewsItems />
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
