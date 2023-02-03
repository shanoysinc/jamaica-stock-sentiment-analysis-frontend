import { ReactElement } from "react";
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Heading, VStack } from "@chakra-ui/react";
import { FcComboChart, FcDataSheet, FcFilledFilter } from "react-icons/fc";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box py={4} px={20}>
      <Heading my={12}>What does this do?</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcFilledFilter} w={10} h={10} />}
          title={"Media Source Filter"}
          text={
            "A feature that allows users to select specific media sources (e.g., news outlets, blogs, social media) to analyze the sentiment of their coverage of Jamaican companies. This would give a more accurate picture of the media landscape and help users understand the bias and opinions of different sources."
          }
        />
        <Feature
          icon={<Icon as={FcComboChart} w={10} h={10} />}
          title={"Sentiment Analysis Visualization"}
          text={
            "A visual representation of the sentiment analysis results, such as a bar graph or pie chart, that displays the percentage of positive, negative, and neutral coverage for each Jamaican company. This would make it easier for users to quickly understand the overall sentiment and spot any trends or changes over time."
          }
        />
        <Feature
          icon={<Icon as={FcDataSheet} w={10} h={10} />}
          title={"Company Comparison"}
          text={
            "A feature that allows users to compare the sentiment of coverage for multiple Jamaican companies at once. This would give users a broad understanding of how different companies are being received by the media and help them identify which companies are seen positively or negatively by the public."
          }
        />
      </SimpleGrid>
    </Box>
  );
}
