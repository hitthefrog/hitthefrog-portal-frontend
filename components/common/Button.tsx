import { Button as ChakraButton } from "@chakra-ui/react";

interface ButtonPorps {
  text: string;
  onClick: any;
  loading: boolean;
}

const Button = ({ text, onClick, loading }: ButtonPorps) => {
  return (
    <ChakraButton
      borderRadius="8px"
      backgroundColor="rgba(255,255,255,0.1)"
      border="1px solid rgba(255,255,255,0.1)"
      backdropFilter="blur(30px)"
      color=" rgba(255,255,255,0.8);"
      _hover={{ bg: "rgba(255,255,255,0.2)" }}
      _pressed={{ bg: "#0e0e0e" }}
      _active={{ bg: "#0e0e0e" }}
      onClick={onClick}
      fontWeight="medium"
      padding={"12px"}
      h="fit-content"
      disabled={loading}
    >
      {text}
    </ChakraButton>
  );
};

export default Button;
