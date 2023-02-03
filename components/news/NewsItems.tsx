import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Badge, BadgeDelta } from "@tremor/react";
export const NewsItems = () => {
  return (
    <Box pt={6}>
      <Box pb={6} cursor={"pointer"}>
        <Text fontWeight={"bold"} fontSize={"md"}>
          Suspendisse eu vulputate est, ac sodales nunc.
        </Text>
        <Text pt={1} pb={3} fontSize={"sm"} color="#4b5563">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eu vulputate est, ac sodales nunc.....
        </Text>
        <BadgeDelta
          deltaType="moderateIncrease"
          text="12.3%"
          isIncreasePositive={true}
          size="xs"
        />
      </Box>
      <Box pb={6} cursor={"pointer"}>
        <Text fontWeight={"bold"} fontSize={"md"}>
          Suspendisse eu vulputate est, ac sodales nunc.
        </Text>
        <Text pt={1} pb={3} fontSize={"sm"} color="#4b5563">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eu vulputate est, ac sodales nunc.....
        </Text>
        <BadgeDelta
          deltaType="moderateIncrease"
          text="12.3%"
          isIncreasePositive={true}
          size="xs"
        />
      </Box>
      <Box pb={6} cursor={"pointer"}>
        <Text fontWeight={"bold"} fontSize={"md"}>
          Suspendisse eu vulputate est, ac sodales nunc.
        </Text>
        <Text pt={1} pb={3} fontSize={"sm"} color="#4b5563">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eu vulputate est, ac sodales nunc.....
        </Text>
        <BadgeDelta
          deltaType="moderateDecrease"
          text="12.3%"
          isIncreasePositive={true}
          size="xs"
        />
      </Box>
    </Box>
  );
};
