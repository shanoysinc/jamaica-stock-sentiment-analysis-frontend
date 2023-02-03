import { SimpleGrid } from "@chakra-ui/react";
import { Card, Title, LineChart } from "@tremor/react";

const chartdata = [
  {
    year: 1951,
    "Sentiment Analysis": 1.74,
  },
  {
    year: 1952,
    "Sentiment Analysis": -1,
  },
  {
    year: 1953,
    "Sentiment Analysis": -1.6,
  },
  {
    year: 1954,
    "Sentiment Analysis": 0.6,
  },
  {
    year: 1955,
    "Sentiment Analysis": 0.3,
  },
];

export const LineGraph = () => {
  return (
    <Card>
      <LineChart
        data={chartdata}
        dataKey="year"
        categories={["Sentiment Analysis"]}
        colors={["blue"]}
        marginTop="mt-6"
        yAxisWidth="w-10"
      />
    </Card>
  );
};
