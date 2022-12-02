import {
  Box,
  cookieStorageManager,
  Flex,
  Image,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import Button from "@components/common/Button";
import axios from "axios";
import { useWallet } from "hooks";
import { useEffect, useState } from "react";

const Well = () => {
  const { account, getAccount } = useWallet();
  const [btnVisible, setBtnVisible] = useState(0);
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const submitForm = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    e.preventDefault();
    const res = await axios.post("http://118.67.129.141:8000/api/projectdrop", {
      link: link,
      createdBy: account,
    });
    // Success if status code is 201
    if (res.status === 200) {
      console.log(res.status, "Sucess", {
        type: "success",
      });
      toast({
        title: "Sucessfully submitted!",
        description:
          "FROG will checkout your project. Then you'll get limited NFT",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setLoading(false);
      setLink("");
    } else {
      console.log(res.status, "Please re-check your inputs.", {
        type: "error",
      });
      setLoading(false);
      toast({
        title: "Something wrong :(",
        description: "Check your metamask address or enternet status!",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    getAccount();
  }, []);

  console.log(account);

  return (
    <Flex
      backgroundColor={"#000"}
      justifyContent="center"
      alignItems={"center"}
      height={"100vh"}
    >
      {account ? (
        <>
          <Flex
            onMouseEnter={() => setBtnVisible(1)}
            onMouseLeave={() => setBtnVisible(0)}
          >
            <Flex
              opacity={btnVisible}
              position="absolute"
              top={"50%"}
              left={"50%"}
              transform="translate(-50%, -65%)"
              transition={"all 0.25s ease-in-out"}
              flexDirection="column"
              gap={"16px"}
              w="full"
              maxW={"20%"}
            >
              <Input
                value={link}
                placeholder={"Your project link"}
                backgroundColor="rgba(255,255,255,0.1)"
                border="1px solid rgba(255,255,255,0.1)"
                borderColor={"rgba(255,255,255,0.1)"}
                backdropFilter="blur(30px)"
                onChange={(e) => {
                  setLink(e.target.value);
                }}
                color="#dbdbdb"
                fontSize="18px"
                padding={"24px 16px"}
                background="transparent"
                focusBorderColor="none"
                _placeholder={{ color: " rgba(245, 245, 245, 0.2);" }}
              ></Input>
              <Button
                loading={loading}
                onClick={submitForm}
                disabled={link === "" ? true : false}
                text={"Submit project"}
              />
            </Flex>
            <Flex>
              <Image width={"400px"} src="/images/well_2.png" />
            </Flex>
          </Flex>
        </>
      ) : (
        <Text>Login</Text>
      )}
    </Flex>
  );
};

export default Well;
