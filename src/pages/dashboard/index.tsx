import { Box } from "@chakra-ui/react";
import { SentimentAnalysisItems } from "components/sentimentAnalysis/SentimentAnalysisItems";
import React from "react";
import Navbar from "../../../components/navbar/Navbar";

const index = () => {
  return (
    <Box bgColor={"#f3f4f6"} height={"100vh"}>
      <Navbar />
      <Box bgColor={"#f3f4f6"}>
        <SentimentAnalysisItems />
      </Box>
    </Box>
  );
};

export default index;
