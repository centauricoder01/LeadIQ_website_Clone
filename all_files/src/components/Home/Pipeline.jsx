import React from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Image,
  Text,
  Button,
  Heading,
  Center,
  Grid,
  DarkMode,
} from "@chakra-ui/react";

export default function Pipeline() {
  return (
    <Box bgGradient="linear(#f4fbfc 0%, orange.100 25%, #f4fbfc 50%)" pb={100}>
      <Box>
        <Center>
          <Heading
            as="h2"
            size={{
              base: "md",
              md: "2xl",
              lg: "2xl",
            }}
            noOfLines={{
              base: 3,
              md: 2,
              lg: 2,
              xl: 2,
              "2xl": 2,
            }}
            m={10}
            mt={50}
            textAlign={"center"}
            lineHeight="10rem"
          >
            Build sales pipeline smarter
            <br /> with the LeadIQ platform
          </Heading>
        </Center>
        <Center>
          <NavLink to={"/demo"}>
            <DarkMode>
              <Button
                colorScheme="orange"
                borderRadius={50}
                h={"5rem"}
                w={{
                  base: "18rem",
                  md: "15rem",
                  lg: "15rem",
                }}
                fontSize="1.3rem"
              >
                Book A Demo
              </Button>
            </DarkMode>
          </NavLink>
        </Center>
      </Box>
      <Grid
        // templateColumns="repeat(3, 1fr)"
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
        m={50}
        mt={100}
        justifyContent="center"
      >
        <Box>
          <Box
            borderRadius="3rem"
            bg="green.300"
            color="white"
            px={4}
            // h={"78.5%"}
          >
            <Image
              w={{
                base: "30rem",
                md: "30rem",
                lg: "30rem",
              }}
              objectFit="cover"
              zIndex={1}
              borderRadius="1rem"
              src="https://assets.website-files.com/60819f9be381394642b5659e/63175e48773cbb3df9e0fcaf_identify-prospect-data.svg"
              alt="Dan Abramov"
            />
          </Box>
          <Text fontSize="2xl" m={4}>
            Identify prospect data
          </Text>
          <Text fontSize="xl" color="blue.600" w={"80%"} m={4}>
            Find, capture, and sync contact data to your system of record
            faster.
          </Text>
        </Box>
        <Box>
          <Box borderRadius="3rem" bg="Orange" color="white" px={4}>
            <Image
              w={{
                base: "30rem",
                md: "30rem",
                lg: "30rem",
              }}
              objectFit="cover"
              zIndex={1}
              borderRadius="1rem"
              src="https://assets.website-files.com/60819f9be381394642b5659e/63175e49615f15440015f8b7_track-sales-triggers.svg"
              alt="Dan Abramov"
            />
          </Box>
          <Text fontSize="2xl" m={4}>
            Identify prospect data
          </Text>
          <Text fontSize="xl" color="blue.600" w={"80%"} m={4}>
            Find, capture, and sync contact data to your system of record
            faster.
          </Text>
        </Box>
        <Box>
          <Box
            borderRadius="3rem"
            bg="blue.900"
            color="white"
            px={4}
            // h={"78.5%"}
          >
            <Image
              w={{
                base: "30rem",
                md: "30rem",
                lg: "30rem",
              }}
              objectFit="cover"
              zIndex={1}
              borderRadius="1rem"
              src="https://assets.website-files.com/60819f9be381394642b5659e/63175e480a2e474afbe0db64_compose-personal-messages.svg"
              alt="Dan Abramov"
            />
          </Box>
          <Text fontSize="2xl" m={4}>
            Identify prospect data
          </Text>
          <Text fontSize="xl" color="blue.600" w={"80%"} m={4}>
            Find, capture, and sync contact data to your system of record
            faster.
          </Text>
        </Box>
      </Grid>
    </Box>
  );
}
