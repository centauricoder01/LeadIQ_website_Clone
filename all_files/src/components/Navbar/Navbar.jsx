import React, { useRef } from "react";
import { Box, Image, Text, Button, DarkMode } from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

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
      gap={100}
      // border={"2px solid red"}
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
        gap={50}
        ref={navRef}
        className="FullBgColor"
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

        <Box>
          <NavLink to={"/demo"}>
            <DarkMode>
              <Button colorScheme="green" borderRadius={50} h={12}>
                Book A Demo
              </Button>
            </DarkMode>
          </NavLink>
        </Box>
        {/* showHide buttons */}
        <Button
          onClick={showNavbar}
          colorScheme="red"
          className="nav-btn nav-close-btn"
        >
          <FaTimes />
        </Button>
      </Box>
      {/* second showhide Buttons  */}
      <Button onClick={showNavbar} colorScheme="green" className="nav-btn">
        <FaBars />
      </Button>
    </Box>
  );
}
