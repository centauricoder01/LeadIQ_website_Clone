import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import SimpleSlider from "./ReactSliders";

export default function UserExperience() {
  return (
    <>
      <Box>
        <Heading as="h2" size="3xl" noOfLines={2} w={"50%"} textAlign="left">
          What our amazing users have to say
        </Heading>
        <SimpleSlider />
      </Box>
    </>
  );
}
