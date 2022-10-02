import React, { useRef } from "react";
import { Box, Image, Text, Button, DarkMode, space } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_Nav");
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
      pt={10}
      pb={5}
      bg="#042f3c"
      color="white"
      gap={{
        base: "5",
        md: "40",
        lg: "80",
      }}
      position="fixed"
      width={"100%"}
      margin="auto"
      zIndex={100}
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
        gap={{
          base: "5",
          md: "20",
          lg: "50",
        }}
        ref={navRef}
        className="FullBgColor"
      >
        <NavLink to={"/success"}>
          <Text
            fontSize={{
              base: "small",
              md: "xl",
              lg: "2xl",
            }}
          >
            Stories
          </Text>
        </NavLink>

        <Box>
          <NavLink to={"/demo"}>
            <DarkMode>
              <Button
                colorScheme="green"
                borderRadius={50}
                h={{
                  base: "10",
                  md: "35",
                  lg: "35",
                }}
                w={{
                  base: "30",
                  md: "40",
                  lg: "50",
                }}
                fontSize={{
                  base: "sm",
                  md: "md",
                  lg: "xl",
                }}
              >
                Book Demo
              </Button>
            </DarkMode>
          </NavLink>
        </Box>
        {/* showHide buttons */}
      </Box>
    </Box>
  );
}
