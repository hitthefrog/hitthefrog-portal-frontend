import { Button as ChakraButton } from "@chakra-ui/react";

interface ButtonPorps {
  text: string;
  onClick: any;
}

const Button = ({ text, onClick }: ButtonPorps) => {
  return (
    <ChakraButton
      backgroundColor={"#000000"}
      color="#DBDBDB"
      _hover={{ bg: "#0e0e0e" }}
      _pressed={{ bg: "#0e0e0e" }}
      _active={{ bg: "#0e0e0e" }}
      onClick={onClick}
      fontWeight="medium"
      padding={"16px"}
      h="fit-content"
      borderRadius={"8px"}
    >
      {text}
    </ChakraButton>
  );
};

export default Button;
