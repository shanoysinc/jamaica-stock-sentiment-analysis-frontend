import { Box } from "@chakra-ui/react";
import { SentimentAnalysisItems } from "components/sentimentAnalysis/SentimentAnalysisItems";
import React from "react";
import Navbar from "../../../components/navbar/Navbar";

const index = () => {
  return (
    <Box height={"100vh"}>
      <Navbar />
      <Box>
        <SentimentAnalysisItems />
      </Box>
    </Box>
  );
};

export default index;
