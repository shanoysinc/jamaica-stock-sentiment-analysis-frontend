import { Box, Flex, Heading } from "@chakra-ui/react";
import { SentimentAnalysisCard } from "./SentimentAnalysisCard";
import React from "react";
import { useQuery } from "react-query";
import { getAllCompanyData } from "local-api/companyAnalysis";

export const SentimentAnalysisItems = () => {
  const { data: companyAnalysis, isLoading } = useQuery(
    "company",
    () => getAllCompanyData(),
    {
      onError: (err: any) => {},
    }
  );

  console.log(companyAnalysis);

  return (
    <Box px={[3, 10]} py={14}>
      <Heading color={"gray.700"} size={"md"} pb={8}>
        Companies Sentiment Analysis
      </Heading>

      <Flex flexWrap={"wrap"} gap={4}>
        {companyAnalysis &&
          companyAnalysis.map((data: any, index: number) => (
            <SentimentAnalysisCard key={`${data.name}-${index}`} data={data} />
          ))}
      </Flex>
    </Box>
  );
};
