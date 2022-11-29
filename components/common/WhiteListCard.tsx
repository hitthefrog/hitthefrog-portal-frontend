import { Box, Flex, ModalContent, Select, Text } from "@chakra-ui/react";
import { ReactElement, useState } from "react";
import Button from "./Button";

interface WhiteListCardProps {
  children: any;
  type: "default" | "job" | "search" | "select" | "comment";
  onClick?: any;
  buttonText?: string;
}

const CardContainer = ({ children, type }: WhiteListCardProps) => {
  return (
    <ModalContent
      w="full"
      h="full"
      maxWidth={
        type === "default" ? "320px" : type === "job" ? "320px" : "640px"
      }
      maxHeight="480px"
      transition={"max-width 0.2s ease-in-out"}
      background={"rgba(255, 255, 255, 0.1)"}
      border={"1px solid rgba(245, 245, 245, 0.2)"}
      backdropFilter={"blur(40.775px)"}
      borderRadius="16px"
    >
      {children}
    </ModalContent>
  );
};

const WhiteListCard = () => {
  const [type, setType] = useState<
    "default" | "job" | "search" | "select" | "comment"
  >("default");
  const [job, setJob] = useState<
    | string
    | "Designer"
    | "Developer"
    | "PM/PO"
    | "Entrepreneur"
    | "Artist"
    | "Musician"
    | "Student"
    | "Other"
  >("");

  const buttonText =
    type === "default"
      ? "Get Started"
      : type === "job"
      ? "go to search"
      : type === "search"
      ? "Next"
      : type === "comment"
      ? ""
      : type === "select"
      ? ""
      : "";

  const onClick = () => {
    type === "default"
      ? setType("job")
      : type === "job"
      ? setType("search")
      : type === "search"
      ? setType("default")
      : type === "comment"
      ? ""
      : type === "select"
      ? ""
      : "";
  };

  return (
    <CardContainer type={type}>
      <Flex
        h="full"
        flexDirection={"column"}
        padding="16px"
        justifyContent="space-between"
      >
        <Box></Box>
        <Flex flexDirection={"column"} gap="32px" color={"#fff"}>
          <Text
            fontSize={"xl"}
            color="#DBDBDB"
            textAlign={"center"}
            fontWeight="medium"
          >
            {type === "default"
              ? "Just recommend 3books, then be our whitelist!"
              : type === "job"
              ? "What’s your job?"
              : ""}
          </Text>
          {type === "job" ? (
            <Select onChange={(e) => setJob(e.target.value)}>
              <option value="Designer">Designer</option>
              <option value="Developer">Developer</option>
              <option value="PM/PO">PM/PO</option>
              <option value="Entrepreneur">Entrepreneur</option>
              <option value="Artist">Artist</option>
              <option value="Musician">Musician</option>
              <option value="Student">Student</option>
              <option value="Other">Other</option>
            </Select>
          ) : null}
          <Button text={buttonText} onClick={onClick} />
        </Flex>
      </Flex>
    </CardContainer>
  );
};

export default WhiteListCard;
