import { LineGraph } from "components/Charts/LineGraph";
import React from "react";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { SentimentAnalysisItems } from "components/sentimentAnalysis/SentimentAnalysisItems";
import Navbar from "../../../components/navbar/Navbar";
import { NewsItems } from "components/news/NewsItems";
import { Card } from "@tremor/react";

export default function Index() {
  return (
    <Box bgColor={"#f3f4f6"} height={"100vh"}>
      <Navbar />
      <Box bgColor={"#f3f4f6"} px={[3, 10]} py={12}>
        <SimpleGrid columns={[1, 1, 1, 3]} spacing={14}>
          <Box gridColumnStart={1} gridColumnEnd={[1, 1, 1, 3]}>
            <Text fontWeight={"bold"} fontSize={"x-large"} pb={8}>
              Sagicor Financial Company
            </Text>

            <Flex gap={10} pb={10}>
              <Card
                maxWidth="max-w-none"
                hFull={false}
                shadow={true}
                decoration="top"
                decorationColor="indigo"
                marginTop="mt-0"
              >
                <Text textTransform={"uppercase"} color="gray.600">
                  Company Position
                </Text>
                <Text pt={2} fontSize="lg" fontWeight={"bold"}>
                  1
                </Text>
              </Card>
              <Card
                maxWidth="max-w-none"
                hFull={false}
                shadow={true}
                marginTop="mt-0"
                decoration="top"
                decorationColor="indigo"
              >
                <Text textTransform={"uppercase"} color="gray.600">
                  Total Data Analyze
                </Text>
                <Text pt={2} fontSize="lg" fontWeight={"bold"}>
                  10,334
                </Text>
              </Card>
              <Card
                maxWidth="max-w-none"
                hFull={false}
                shadow={true}
                decoration="top"
                decorationColor="green"
                marginTop="mt-0"
              >
                <Text textTransform={"uppercase"} color="gray.600">
                  Total Sentiment
                </Text>
                <Text pt={2} fontSize="lg" fontWeight={"bold"}>
                  Positive
                </Text>
              </Card>
            </Flex>
            <LineGraph />
          </Box>
          <Box pt={16}>
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
