import React from "react";
import {
  Box,
  Image,
  Text,
  Button,
  Heading,
  Center,
  Grid,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Pipeline from "./Pipeline";
import TopSales from "./TopSales";
import UserExperience from "./UserExperience";

export default function Home() {
  return (
    <>
      <Box pt={100} bg="#042f3c" color="white">
        <Center m={5}>
          <Heading
            as="h2"
            size="3xl"
            noOfLines={{
              base: "3",
              md: "1",
              lg: "1",
            }}
            display="block"
            textAlign={"center"}
          >
            Prospecting that's personal
          </Heading>
        </Center>
        <Center>
          <Heading
            as="h2"
            size={{
              base: "md",
              md: "lg",
              lg: "lg",
            }}
            noOfLines={{
              base: "2",
              md: "1",
              lg: "1",
            }}
            textAlign={"center"}
          >
            Build sales pipeline by prospecting smarter.
          </Heading>
        </Center>
        <Center
          ml={{
            base: 0,
            md: 10,
            lg: 30,
          }}
          mt={10}
        >
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
          >
            <Center>
              <NavLink to="/demo">
                <Button
                  colorScheme="orange"
                  m={5}
                  h={50}
                  borderRadius={25}
                  w={150}
                >
                  Book A Demo
                </Button>
              </NavLink>
            </Center>
            <Center>
              <Button colorScheme="blue" m={5} h={50} borderRadius={25} w={130}>
                Start Free
              </Button>
            </Center>
            <Center>
              <Image
                src="https://assets.website-files.com/60819f9be381394642b5659e/62e2af399bdc6fcfbe9cbf59_no-credit-card.svg"
                alt="Arrow"
                mt={10}
                // borderRadius={50090}
              />
            </Center>
          </Grid>
        </Center>
        <Center m={10} mt={20}>
          <Image
            w={{
              base: "40rem",
              md: "60rem",
              lg: "70rem",
            }}
            borderRadius={25}
            objectFit="cover"
            zIndex={1}
            src="https://embed-ssl.wistia.com/deliveries/cfde895b5b6e3ad4e2d94fdba605c546.webp?image_crop_resized=1920x1080"
            alt="Dan Abramov"
          />
        </Center>
        <Center mt={10}>
          <Heading
            as="h2"
            // size="xl"
            // noOfLines={1}
            size={{
              base: "md",
              md: "lg",
              lg: "lg",
            }}
            noOfLines={{
              base: "2",
              md: "1",
              lg: "1",
            }}
            textAlign={"center"}
          >
            Too many sellers, sending too many messages
          </Heading>
        </Center>
        <Center>
          <Heading
            as="h2"
            mt={5}
            size={{
              base: "xs",
              md: "sm",
              lg: "md",
            }}
            noOfLines={{
              base: "2",
              md: "1",
              lg: "1",
            }}
            textAlign={"center"}
          >
            The world has never before been this noisy.
          </Heading>
        </Center>
        <Center m={10} mt={20}>
          <Image
            w={{
              base: "40rem",
              md: "60rem",
              lg: "70rem",
            }}
            borderRadius={25}
            objectFit="cover"
            zIndex={1}
            src="https://assets.website-files.com/60819f9be381394642b5659e/631a3251de5c6f228f20bd7a_world-noise.svg"
            alt="Dan Abramov"
          />
        </Center>
      </Box>

      {/* ELement of the Home Pages */}
      <Pipeline />
      <TopSales />
      <UserExperience />
    </>
  );
}
