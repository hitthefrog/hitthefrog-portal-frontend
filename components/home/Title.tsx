import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { FC } from "react";
import { Link as ScrollLink } from "react-scroll";

const Title: FC = () => {
  const submitForm = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://118.67.129.141:8000/api/bookpost", {
      title: "권도균의 스타트업 경영 수업",
      authors: "권도균",
      thumbnail:
        "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1631183%3Ftimestamp%3D20221107224644",
      createdBy: "0x5EF7D133e7d90f3D806C3a6e6Dc840C6Aa4026D0",
      comment: "이 책 좋아요",
      job: "Entrepreneur",
    });
    // Success if status code is 201
    if (res.status === 201) {
      console.log(res.status, "Thank you for contacting us!", {
        type: "success",
      });
    } else {
      console.log(res.status, "Please re-check your inputs.", {
        type: "error",
      });
    }
  };
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
      <ScrollLink to="story" spy={true} smooth={true}>
        <Button
          variant="ghost"
          fontSize="4xl"
          mb={8}
          className="animate__animated animate__heartBeat animate__infinite"
        >
          ↓
        </Button>
      </ScrollLink>
      <Button onClick={submitForm}>정보 전송</Button>
    </Flex>
  );
};

export default Title;
