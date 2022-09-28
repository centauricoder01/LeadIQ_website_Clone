import React from "react";
import { Box, Image, Text, Button, DarkMode } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
      pt={10}
      bg="#042f3c"
      color="white"
    >
      <Box>
        <NavLink to={"/"}>
          <Image
            src="https://assets.website-files.com/60819f9be381394642b5659e/6081a538174f4d6bc01bdd27_leadiq-logo.svg"
            alt="Logo"
          />
        </NavLink>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={10}
      >
        <NavLink to={"/platform"}>
          <Text fontSize="1xl">Platform</Text>
        </NavLink>
        <NavLink to={"/success"}>
          <Text fontSize="1xl">Success Stories</Text>
        </NavLink>
        <NavLink to={"/resources"}>
          <Text fontSize="1xl">Resources</Text>
        </NavLink>
        <NavLink to={"/pricing"}>
          <Text fontSize="1xl">Pricing</Text>
        </NavLink>
      </Box>

      <Box>
        <NavLink to={"/demo"}>
          <DarkMode>
            <Button colorScheme="green" borderRadius={50} h={12}>
              Book A Demo
            </Button>
          </DarkMode>
        </NavLink>
      </Box>
    </Box>
  );
}
