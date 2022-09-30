import { Box, Grid, Text, GridItem, Flex } from "@chakra-ui/react";
import React from "react";

export default function Success() {
  return (
    <Grid pt={200} templateColumns="repeat(3, 1fr)" gap={6}>
      <Grid templateColumns="repeat(4, 1fr)">
        <GridItem w="100%" h="20" bg="yellow.300" />
        <GridItem w="75%" h="35%" bg="blue.900" borderRadius={100} />
        <GridItem w="80%" h="20" bg="white.500" />
        <GridItem w="80%" h="20" bg="yellow.300" />
        <GridItem w="80%" h="20" bg="blue.500" />
      </Grid>
      <Box textAlign={"center"}>Hello world</Box>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <GridItem w="100%" h="20" bg="blue.500" />
        <GridItem w="100%" h="20" bg="blue.500" />
        <GridItem w="100%" h="20" bg="blue.500" />
        <GridItem w="100%" h="20" bg="blue.500" />
        <GridItem w="100%" h="20" bg="blue.500" />
        <GridItem w="100%" h="20" bg="blue.500" />
        <GridItem w="100%" h="20" bg="blue.500" />
        <GridItem w="100%" h="20" bg="blue.500" />
        <GridItem w="100%" h="20" bg="blue.500" />
        <GridItem w="100%" h="20" bg="blue.500" />
        <GridItem w="100%" h="20" bg="blue.500" />
        <GridItem w="100%" h="20" bg="blue.500" />
        <GridItem w="100%" h="20" bg="blue.500" />
        <GridItem w="100%" h="20" bg="blue.500" />
        <GridItem w="100%" h="20" bg="blue.500" />
        <GridItem w="100%" h="20" bg="blue.500" />
        <GridItem w="100%" h="20" bg="blue.500" />
        <GridItem w="100%" h="20" bg="blue.500" />
        <GridItem w="100%" h="20" bg="blue.500" />
        <GridItem w="100%" h="20" bg="blue.500" />
      </Grid>
    </Grid>
  );
}
