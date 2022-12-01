import { Box, Flex, Image, Input } from "@chakra-ui/react";
import Button from "@components/common/Button";
import axios from "axios";
import { useWallet } from "hooks";
import { useEffect, useState } from "react";

const Well = () => {
  const { account, getAccount } = useWallet();
  const [btnVisible, setBtnVisible] = useState(0);
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  const submitForm = async (e) => {
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
      setLoading(false);
      setLink("");
    } else {
      console.log(res.status, "Please re-check your inputs.", {
        type: "error",
      });
    }
  };

  useEffect(() => {
    getAccount();
  }, []);

  return (
    <Flex
      backgroundColor={"#000"}
      justifyContent="center"
      alignItems={"center"}
      height={"calc(100vh - 60px)"}
    >
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
            padding={4}
            background="transparent"
            focusBorderColor="none"
            _placeholder={{ color: " rgba(245, 245, 245, 0.2);" }}
          ></Input>
          <Button
            loading={loading}
            onClick={submitForm}
            text={"Submit project"}
          />
        </Flex>
        <Flex>
          <Image width={"400px"} src="/images/well.png" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Well;
