import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Link as ScrollLink } from "react-scroll";

const Title: FC = () => {
  return (
    <Flex
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      id="title"
      px="4"
      backgroundColor={"#000000"}
    >
      <Flex
        flexDirection={"column"}
        justifyContent="center"
        alignItems={"center"}
        w="full"
        px={24}
      >
        <Flex w="full" gap={12}>
          <img src="/images/logo_colorful.svg" />
          <Text
            color={"#fff"}
            fontWeight="bold"
            fontSize="6xl"
            fontFamily={"Overpass Mono"}
            fontStyle="normal"
          >
            is community for creators
          </Text>
        </Flex>

        <Text color={"#fff"} fontWeight="bold" fontSize="6xl">
          based in South Korea. We’re with [ Pleasant, Confident and Bold ]
          people.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Title;
