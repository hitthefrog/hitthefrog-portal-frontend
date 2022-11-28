import {
  Box,
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { AiOutlineWallet } from "react-icons/ai";
import { useWallet } from "hooks";
import Link from "next/link";
import WhiteListCard from "./WhiteListCard";

// PLN 프로젝트에 맞게 세계관, 로드맵, 팀 변경
const scrollLink = [
  { id: "story", name: "Story" },
  { id: "roadmap", name: "Roadmap" },
  { id: "team", name: "Team" },
];

const Header: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { account, getAccount } = useWallet();

  const onClickWallet = () => {
    getAccount();
  };

  useEffect(() => {
    if (account) {
      onOpen();
    }
  }, [account]);

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <WhiteListCard />
      </Modal>

      <Flex
        position="fixed"
        w="full"
        height={90}
        top={0}
        justifyContent="space-between"
        alignItems="center"
        px={24}
        py={2}
        zIndex={1}
      >
        <Box>
          {/* PLN 로고 이름 or 이미지 변경 */}
          <Link href="/">
            <Text
              color={"#fff"}
              fontWeight="bold"
              fontSize="xl"
              cursor="pointer"
            >
              <img src="/images/logo_white.svg" />
            </Text>
          </Link>
        </Box>
        <Button onClick={onOpen}>Trigger modal</Button>
        <Flex gap={2}>
          {scrollLink.map((v, i) => {
            return (
              <ScrollLink key={i} to={v.id} spy={true} smooth={true}>
                <Button
                  color={"#fff"}
                  _hover={{ bg: "none" }}
                  fontSize={14}
                  variant="ghost"
                  fontWeight="regular"
                >
                  {v.name}
                </Button>
              </ScrollLink>
            );
          })}
          <Flex justifyContent="center" alignItems="center">
            <Link href="/well">
              <Button
                color={"#fff"}
                _hover={{ bg: "none" }}
                fontSize={14}
                variant="ghost"
                fontWeight="regular"
              >
                Well
              </Button>
            </Link>
          </Flex>

          <Flex justifyContent="center" alignItems="center">
            {account ? (
              <Popover>
                <PopoverTrigger>
                  <Button
                    backgroundColor={"#202020"}
                    _hover={{ bg: "#202020" }}
                    borderRadius={"24px"}
                  >
                    <AiOutlineWallet color={"#fff"} size={28} />
                    <Text color={"#fff"} ml={2} fontSize="xs">
                      {account.substring(0, 4)}...
                      {account.substring(account.length - 4)}
                    </Text>
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader fontWeight="bold">
                    HIT THE FROG NFT
                  </PopoverHeader>
                  <PopoverBody cursor="pointer" fontSize="m">
                    <Link href="/my-nft">My NFT</Link>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            ) : (
              <Button
                borderRadius={24}
                backgroundColor={"#202020"}
                onClick={onClickWallet}
                _hover={{ bg: "#202020" }}
              >
                <AiOutlineWallet color={"#fff"} size={28} />
                <Text color={"#fff"} ml={2} fontSize="xs">
                  Connect
                </Text>
              </Button>
            )}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
