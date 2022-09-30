import React, { useState } from "react";
import {
  Box,
  Image,
  Text,
  Grid,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Textarea,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";

export default function Demo() {
  const [formstate, setformstate] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
    role: "",
  });

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(formstate);
    let params = {
      first_name: formstate.firstname,
      last_name: formstate.lastname,
      sender_email: formstate.email,
      message: formstate.message,
      Role: formstate.role,
    };

    emailjs.send("service_68r9ye1", "template_kxsco0p", params).then((res) => {
      alert("sucess" + res.status);
    });
  };

  const changevalue = (e) => {
    const { name, value } = e.target;
    setformstate({
      ...formstate,
      [name]: value,
    });
  };

  return (
    <>
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(2,1fr)",
        }}
        gap={6}
        w={"100%"}
        m="auto"
        justifyContent={"center"}
        textAlign="left"
        alignItems={"center"}
        p="10"
        pt="200"
        bg={"red.100"}
      >
        {/* First Box start from here  */}
        <Box>
          <Box>
            <Heading
              as="h2"
              size="2xl"
              noOfLines={3}
              m="5"
              lineHeight={"shorter"}
              color="#063c4d"
              fontWeight={"semibold"}
              w="100%"
            >
              Experience how LeadIQ boosts prospecting efficiently.
            </Heading>
          </Box>

          <Box>
            <Heading
              as="h4"
              size="md"
              noOfLines={3}
              m="5"
              color={"#576f76"}
              lineHeight="tall"
              fontWeight="medium"
            >
              We’ve got a team of prospecting experts ready to help you hit
              revenue targets, support your team, and build better relationships
              with buyers.
            </Heading>
          </Box>
          <Box>
            <Text
              fontSize="20px"
              color="#00d586"
              letterSpacing={"wide"}
              m="5"
              fontWeight={"semibold"}
            >
              WHAT WE’LL DISCOVER TOGETHER
            </Text>
          </Box>
          <Flex gap={5} m={5} w="60%">
            <Image
              boxSize="30px"
              objectFit="cover"
              src="https://assets.website-files.com/60819f9be381394642b5659e/628bac72a84c6697dbf8146e_check-green.svg"
              alt="Tick"
            />
            <Text
              fontSize={"15px"}
              color="#063c4d"
              noOfLines={2}
              letterSpacing="wide"
              fontWeight={"semibold"}
            >
              What’s working, or not working, with your prospecting team.
            </Text>
          </Flex>
          <Flex gap={5} m={5} w="60%">
            <Image
              boxSize="30px"
              objectFit="cover"
              src="https://assets.website-files.com/60819f9be381394642b5659e/628bac72a84c6697dbf8146e_check-green.svg"
              alt="Tick"
            />
            <Text
              fontSize={"15px"}
              color="#063c4d"
              noOfLines={2}
              letterSpacing="wide"
              fontWeight={"semibold"}
            >
              How LeadIQ can help.
            </Text>
          </Flex>
          <Flex gap={5} m={5} w="60%">
            <Image
              boxSize="30px"
              objectFit="cover"
              src="https://assets.website-files.com/60819f9be381394642b5659e/628bac72a84c6697dbf8146e_check-green.svg"
              alt="Tick"
            />
            <Text
              fontSize={"15px"}
              color="#063c4d"
              noOfLines={2}
              letterSpacing="wide"
              fontWeight={"semibold"}
            >
              How the best companies in the world structure outbound processing
              workflows.
            </Text>
          </Flex>
        </Box>

        {/* Second Box start from Here  */}
        <Box bg="#063c4d" borderRadius={"2xl"}>
          <Box border={"2px solid white"} p="10" borderRadius={"2xl"}>
            <form onSubmit={HandleSubmit}>
              {/* first */}
              <FormControl isRequired mt={4}>
                <FormLabel color={"white"}>First name</FormLabel>
                <Input
                  placeholder="First name"
                  color={"white"}
                  name="firstname"
                  value={formstate.firstname}
                  onChange={changevalue}
                />
              </FormControl>
              {/* second  */}
              <FormControl isRequired mt={4}>
                <FormLabel color={"white"}>Last name</FormLabel>
                <Input
                  placeholder="Last name"
                  color={"white"}
                  name="lastname"
                  value={formstate.lastname}
                  onChange={changevalue}
                />
              </FormControl>
              {/* third  */}
              <FormControl isRequired mt={4}>
                <FormLabel color={"white"}>Email</FormLabel>
                <Input
                  placeholder="Email"
                  color={"white"}
                  name="email"
                  value={formstate.email}
                  onChange={changevalue}
                />
              </FormControl>
              {/* fourth */}
              <FormControl isRequired mt={4}>
                <FormLabel color={"white"}>Message</FormLabel>
                <Textarea
                  placeholder="Here is a sample placeholder"
                  color={"white"}
                  name="message"
                  value={formstate.message}
                  onChange={changevalue}
                />
              </FormControl>
              {/* fifth */}
              <FormControl mt={4} isRequired>
                <FormLabel color={"white"}>Role</FormLabel>
                <Select
                  placeholder="Select Role"
                  color={"green.600"}
                  name="role"
                  value={formstate.role}
                  onChange={changevalue}
                >
                  <option>Web developer</option>
                  <option>Android Developer</option>
                  <option>IOS developer</option>
                  <option>Data Analyst</option>
                  <option>Data Scientist</option>
                  <option>ML Engineer</option>
                  <option>Others</option>
                </Select>
              </FormControl>
              {/* button  */}
              <Button colorScheme="blue" mt="5" type="submit" color={"white"}>
                Submit
              </Button>
            </form>
          </Box>
        </Box>
      </Grid>
    </>
  );
}
