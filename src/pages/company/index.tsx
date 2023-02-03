import { LineGraph } from "components/Charts/LineGraph";
import React from "react";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { SentimentAnalysisItems } from "components/sentimentAnalysis/SentimentAnalysisItems";
import Navbar from "../../../components/navbar/Navbar";
import { NewsItems } from "components/news/NewsItems";
import { Block, Card, Icon, Metric } from "@tremor/react";

import {
  OfficeBuildingIcon,
  ScaleIcon,
  DatabaseIcon,
} from "@heroicons/react/solid";

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

            <SimpleGrid columns={[1, 2, 3]} gap={10} pb={10}>
              <Card decoration="top" decorationColor={"indigo"}>
                <Flex justifyContent="justify-start" gap="4">
                  <Icon
                    icon={OfficeBuildingIcon}
                    variant="light"
                    size="xl"
                    color={"indigo"}
                  />
                  <Block truncate={true}>
                    <Text>Company Position</Text>
                    <Metric truncate={true}>{1}</Metric>
                  </Block>
                </Flex>
              </Card>
              <Card decoration="top" decorationColor={"fuchsia"}>
                <Flex justifyContent="justify-start" gap="4">
                  <Icon
                    icon={DatabaseIcon}
                    variant="light"
                    size="xl"
                    color={"fuchsia"}
                  />
                  <Block truncate={true}>
                    <Text>Total Data Analyze</Text>
                    <Metric truncate={true}>{"10, 346"}</Metric>
                  </Block>
                </Flex>
              </Card>
              <Card decoration="top" decorationColor={"green"}>
                <Flex justifyContent="justify-start" gap="4">
                  <Icon
                    icon={ScaleIcon}
                    variant="light"
                    size="xl"
                    color={"green"}
                  />
                  <Block truncate={true}>
                    <Text> Total Sentiment</Text>
                    <Metric truncate={true}>Positive</Metric>
                  </Block>
                </Flex>
              </Card>
            </SimpleGrid>
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
