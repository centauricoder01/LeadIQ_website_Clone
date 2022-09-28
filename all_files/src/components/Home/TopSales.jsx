import {
  Box,
  Center,
  Text,
  Button,
  Grid,
  Image,
  Flex,
  DarkMode,
} from "@chakra-ui/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function TopSales() {
  const [FirstValue, setFirstValue] = useState({
    titleone: "Tailor your outbound prospecting",
    titleTwo:
      "Capture the right contact, identify sales triggers, and allow us to automatically draft your personalized message in seconds.",
    thirdImg:
      "https://assets.website-files.com/60819f9be381394642b5659e/631f566c6a6cdc5b017b8af7_sales-professionals-visual.svg",
  });

  return (
    <>
      <Box m={10} mt={50}>
        <Center>
          <Text
            fontSize={{
              base: "xl",
              md: "3xl",
              lg: "5xl",
            }}
            m={3}
            as="b"
            color={"blue.900"}
            textAlign={"center"}
          >
            Designed for your entire team
          </Text>
        </Center>
        <Center>
          <Text
            fontSize={{
              base: "sm",
              md: "md",
              lg: "xl",
            }}
            color="#576f76"
            textAlign={"center"}
          >
            LeadIQ makes all sales roles more productive and effective.
          </Text>
        </Center>
      </Box>

      {/* BUTTON PART OF THE WEB PAGE */}

      <Grid
        m={50}
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
        }}
        gap={5}
      >
        <Button
          colorScheme="green"
          variant="outline"
          display="flex"
          w={"100%"}
          h="5rem"
          justifyContent={"left"}
          gap={6}
          onClick={() => {
            setFirstValue({
              titleone: "Tailor your outbound prospecting",
              titleTwo:
                "Capture the right contact, identify sales triggers, and allow us to automatically draft your personalized message in seconds.",
              thirdImg:
                "https://assets.website-files.com/60819f9be381394642b5659e/631f566c6a6cdc5b017b8af7_sales-professionals-visual.svg",
            });
          }}
        >
          <Box bg="green.100" borderRadius={3} display="flex">
            <Image
              //   boxSize="3.8rem"
              objectFit="cover"
              src="https://assets.website-files.com/60819f9be381394642b5659e/6310ffd645041c3873e31d16_sales-professionals.svg"
              alt="Dan Abramov"
            />
          </Box>
          <Text>Sales Expert</Text>
        </Button>

        {/* Second BUtton of the wesite */}

        <Button
          colorScheme="green"
          variant="outline"
          display="flex"
          //   w={"100%"}
          h="5rem"
          justifyContent={"left"}
          gap={6}
          onClick={() => {
            setFirstValue({
              titleone: "Personalize at scale",
              titleTwo:
                "Equip your sellers with customized outbound messages that combine prospect insights with your company’s value proposition to get more responses.",
              thirdImg:
                "https://assets.website-files.com/60819f9be381394642b5659e/631a399a0c1dbb2228b95188_sales-leaders.svg",
            });
          }}
        >
          <Box bg="yellow.100" borderRadius={3} display="flex">
            <Image
              boxSize="3.8rem"
              objectFit="cover"
              src="https://assets.website-files.com/60819f9be381394642b5659e/6310fe5eaf9b772a7ec7837c_sales-leaders.svg"
              alt="Dan Abramov"
            />
          </Box>
          <Text>Sales</Text>
        </Button>

        {/* Third Part of the website  */}

        <Button
          colorScheme="green"
          variant="outline"
          display="flex"
          w={"100%"}
          h="5rem"
          justifyContent={"left"}
          gap={6}
          onClick={() => {
            setFirstValue({
              titleone: "Ensure your data is accurate ",
              titleTwo:
                "And that it stays that way. Synchronize contacts between your CRM and selling tools instantly.",
              thirdImg:
                "https://assets.website-files.com/60819f9be381394642b5659e/63124f70e2519f39f3a32eee_rev-ops-visual.svg",
            });
          }}
        >
          <Box bg="blue.100" borderRadius={3} display="flex">
            <Image
              boxSize="3.8rem"
              objectFit="cover"
              src="https://assets.website-files.com/60819f9be381394642b5659e/6311025e180ffa316aa4293b_revenue-ops.svg"
              alt="Dan Abramov"
            />
          </Box>
          <Text>Revenue</Text>
        </Button>

        {/* Fourth button of the website */}

        <Button
          colorScheme="green"
          variant="outline"
          display="flex"
          w={"100%"}
          h="5rem"
          justifyContent={"left"}
          gap={6}
          onClick={() => {
            setFirstValue({
              titleone: "Your message matters",
              titleTwo:
                "Take control of your company’s brand by owning the value propositions your sellers use in their outreach.",
              thirdImg:
                "https://assets.website-files.com/60819f9be381394642b5659e/63124d2e7bab4a8bc620e330_rev-ops-visual.svg",
            });
          }}
        >
          <Box bg="red.100" borderRadius={3} display="flex">
            <Image
              boxSize="3.8rem"
              objectFit="cover"
              src="https://assets.website-files.com/60819f9be381394642b5659e/63110437d9c2f912c70575f5_marketing.svg"
              alt="Dan Abramov"
            />
          </Box>
          <Text>Marketing</Text>
        </Button>
      </Grid>
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(2,1fr)",
        }}
        textAlign="left"
        w={"100%"}
        p="20"
      >
        <Box w={"100%"} m="auto">
          <Box w={"100%"}>
            <Text fontSize="4xl" as="b">
              {FirstValue.titleone}
            </Text>
          </Box>
          <Box w={"100%"}>
            <Text fontSize="xl" mt={3} color="#576f76">
              {FirstValue.titleTwo}
            </Text>
          </Box>
          <Box w={"100%"}>
            <NavLink to={"/demo"}>
              <DarkMode>
                <Button bg="orange.300" borderRadius={50} h={12} mt={10}>
                  Book A Demo
                </Button>
              </DarkMode>
            </NavLink>
          </Box>
        </Box>
        <Box>
          <Image
            src={FirstValue.thirdImg}
            alt="Dan Abramov"
            w={"100%"}
            objectFit="cover"
          />
        </Box>
      </Grid>
    </>
  );
}
