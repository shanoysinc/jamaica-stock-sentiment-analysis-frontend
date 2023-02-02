import { Box } from "@chakra-ui/react";
import { SentimentAnalysisItems } from "components/sentimentAnalysis/SentimentAnalysisItems";
import React from "react";
import Navbar from "../../../components/navbar/Navbar";
const index = () => {
  return (
    <Box bg={"#f9fafb"}>
      <Navbar />
      <Box>
        <SentimentAnalysisItems />
      </Box>
    </Box>
  );
};

export default index;
