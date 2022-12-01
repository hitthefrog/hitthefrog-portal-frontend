import { ChevronLeftIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Icon,
  IconButton,
  Image,
  Input,
  ModalContent,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useWallet } from "hooks";
import { bookSearch } from "pages/api/book-search";
import { ReactElement, useEffect, useState } from "react";
import Button from "./Button";

export type PageType = "default" | "job" | "search" | "select" | "comment";
export type JobType =
  | string
  | "Designer"
  | "Developer"
  | "PM/PO"
  | "Entrepreneur"
  | "Artist"
  | "Musician"
  | "Student"
  | "Other";

export interface BookType {
  title: string; //책 제목
  authors: string; //책 작가 리스트
  thumbnail: string; //썸네일 이미지(링크)
  comment?: string; //책 관련된 한줄소감(리뷰)
  createdBy?: string; //책 추천 작성자 지갑주소
  job?: JobType; //직업
}

interface WhiteListCardProps {
  children: any;
  type: PageType;
  onClick?: any;
  buttonText?: string;
}

const CardContainer = ({ children, type }: WhiteListCardProps) => {
  return (
    <ModalContent
      w="full"
      maxWidth={
        type === "default" ? "320px" : type === "job" ? "320px" : "640px"
      }
      maxHeight={"480px"}
      transition={"max-width 0.2s ease-in-out"}
      borderRadius="16px"
      border="1px solid rgba(255,255,255,0.1)"
      background={" rgba(255,255,255,0.06)"}
      backdropFilter={" blur(20px)"}
    >
      {children}
    </ModalContent>
  );
};

const WhiteListCard = () => {
  const { account, getAccount } = useWallet();
  const [query, setQuery] = useState("");
  const [type, setType] = useState<PageType>("default");
  const [job, setJob] = useState<JobType>("");
  const [bookData, setBookData] = useState<BookType[] | null>(null);
  const [comment, setComment] = useState<string>("");
  const [count, setCount] = useState(0);

  const [currentBook, setCurrentBook] = useState<BookType>({
    title: "",
    authors: "",
    thumbnail: "",
    comment: "",
    createdBy: "",
  });

  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const submitForm = async (e) => {
    setLoading(true);
    e.preventDefault();
    const res = await axios.post("http://118.67.129.141:8000/api/bookpost", {
      title: currentBook.title,
      authors: currentBook.authors[0],
      thumbnail: currentBook.thumbnail,
      createdBy: currentBook.createdBy,
      comment: currentBook.comment,
      job: job,
    });
    // Success if status code is 201
    if (res.status === 200) {
      console.log(res.status, "Thank you for contacting us!", {
        type: "success",
      });

      setCount(count + 1);

      toast({
        title: "Sucessfully submitted!",
        description: `${
          count === 3
            ? "Congratulations🎉 Now you can buy our NFT"
            : `You left ${count + 1} books`
        }`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setLoading(false);
      setType("search");
      setComment("");
      setQuery("");
      setCurrentBook({
        title: "",
        authors: "",
        thumbnail: "",
        comment: "",
        createdBy: "",
      });
    } else {
      console.log(res.status, "Please re-check your inputs.", {
        type: "error",
      });
    }
  };

  const buttonText =
    type === "default"
      ? "Start"
      : type === "job"
      ? "Next"
      : type === "search"
      ? "Next"
      : type === "comment"
      ? "Upload"
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
      ? submitForm
      : type === "select"
      ? ""
      : "";
  };

  useEffect(() => {
    getAccount();
  }, []);

  const getBookData = async (query: string) => {
    if (query === "") {
      return null;
    } else {
      const { data } = await bookSearch({ query: query });
      return setBookData(data.documents);
    }
  };

  useEffect(() => {
    getBookData(query);
  }, [query]);
  return (
    <CardContainer type={type}>
      <Flex
        flexDirection={"column"}
        padding="16px"
        paddingTop={
          type === "search" ? "24px" : type === "comment" ? "24px" : "32px"
        }
        justifyContent="space-between"
        transition={"max-height 0.2s ease-in-out"}
        maxHeight="408px"
      >
        {count === 3 ? (
          <Flex flexDirection={"column"} gap="24px">
            <Text
              fontSize={"xl"}
              color="#DBDBDB"
              textAlign={"center"}
              fontWeight="medium"
            >
              BUY FROG
            </Text>
            <Button text="Go Opensea" onClick={() => alert("OpenseaLink")} />
          </Flex>
        ) : (
          <>
            {type === "search" ? (
              <Flex
                borderBottom={"1px solid rgba(245, 245, 245, 0.2)"}
                paddingBottom="16px"
                position={"sticky"}
                alignItems="center"
                top="0"
                zIndex={1}
              >
                <Icon color="#fff" marginRight={"16px"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </Icon>
                <Input
                  value={query}
                  placeholder={"Search your books"}
                  onChange={(e) => setQuery(e.target.value)}
                  color="#dbdbdb"
                  fontSize="18px"
                  border="none"
                  padding={0}
                  h="fit-content"
                  background="transparent"
                  focusBorderColor="none"
                  _placeholder={{ color: " rgba(245, 245, 245, 0.2);" }}
                ></Input>
              </Flex>
            ) : null}
            {type === "search" && bookData !== null ? (
              <Flex overflow={"scroll"}>
                <Flex
                  flexDirection={"column"}
                  transition="max-height 0.5s ease-in-out"
                  paddingTop={"24px"}
                  paddingBottom={"24px"}
                  gap="16px"
                >
                  {bookData.map((post, index) => (
                    <Flex
                      style={{}}
                      w="full"
                      _hover={{
                        scale: 0.95,
                      }}
                      cursor="pointer"
                      flexDirection={"row"}
                      onClick={() => {
                        setCurrentBook({
                          thumbnail: post.thumbnail,
                          title: post.title,
                          authors: post.authors[0],
                          job: job,
                          createdBy: account,
                        }),
                          setType("comment");
                      }}
                      key={index}
                    >
                      <Image
                        maxWidth={"80px"}
                        borderRadius="8px"
                        src={post.thumbnail}
                        marginRight="16px"
                      />
                      <Flex flexDirection={"column"}>
                        <Text
                          fontWeight={"semibold"}
                          fontSize={"18px"}
                          color={"#fff"}
                        >
                          {post.title}
                        </Text>
                        <div>
                          <Text color={"#dbdbdb"}>{post.authors}</Text>
                        </div>
                      </Flex>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            ) : null}
            <Flex flexDirection={"column"} gap="24px" color={"#fff"}>
              {type === "default" ? (
                <Text
                  fontSize={"xl"}
                  color="#DBDBDB"
                  textAlign={"center"}
                  fontWeight="medium"
                >
                  "Just recommend 3books, then be our whitelist!"{" "}
                </Text>
              ) : type === "job" ? (
                <Text
                  fontSize={"xl"}
                  color="#DBDBDB"
                  textAlign={"center"}
                  fontWeight="medium"
                >
                  "What’s your job?"{" "}
                </Text>
              ) : type === "comment" ? (
                <>
                  <IconButton
                    padding={"0"}
                    aria-label="back"
                    background={"none"}
                    w="fit-content"
                    top={"-2"}
                    left={"-3"}
                    _hover={{
                      bg: "none",
                    }}
                    _active={{ bg: "#0e0e0e" }}
                    onClick={() => setType("search")}
                    icon={
                      <Icon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                          />
                        </svg>
                      </Icon>
                    }
                  />
                  <Flex
                    w="full"
                    _hover={{
                      scale: 0.95,
                    }}
                    cursor="pointer"
                    flexDirection={"row"}
                    onClick={() => {
                      setCurrentBook({
                        title: currentBook.title,
                        thumbnail: currentBook.thumbnail,
                        authors: currentBook.authors,
                        job: job,
                        createdBy: account,
                      }),
                        setType("comment");
                    }}
                  >
                    <Image
                      maxWidth={"80px"}
                      borderRadius="8px"
                      src={currentBook.thumbnail}
                      marginRight="16px"
                    />
                    <Flex flexDirection={"column"}>
                      <Text
                        fontWeight={"semibold"}
                        fontSize={"18px"}
                        color={"#fff"}
                      >
                        {currentBook.title}
                      </Text>
                      <div>
                        <Text color={"#dbdbdb"}>{currentBook.authors}</Text>
                      </div>
                    </Flex>
                  </Flex>
                  <Flex flexDirection={"column"}>
                    <Text fontSize={"14px"}>Comment</Text>
                    <Input
                      value={comment}
                      placeholder={
                        "Please tell us your any impression about this book (Max 200)"
                      }
                      onChange={(e) => {
                        setComment(e.target.value),
                          setCurrentBook({
                            title: currentBook.title,
                            thumbnail: currentBook.thumbnail,
                            authors: currentBook.authors,
                            job: job,
                            createdBy: account,
                            comment: e.target.value,
                          });
                      }}
                      color="#dbdbdb"
                      fontSize="18px"
                      border="none"
                      padding={0}
                      background="transparent"
                      focusBorderColor="none"
                      _placeholder={{ color: " rgba(245, 245, 245, 0.2);" }}
                    ></Input>
                  </Flex>
                </>
              ) : null}

              {type === "job" ? (
                <Select
                  placeholder="Select your job"
                  onChange={(e) => setJob(e.target.value)}
                >
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
              {type === "search" ? null : type === "comment" ? null : (
                <Button
                  disabled={
                    type === "default" ? false : job === "" ? true : false
                  }
                  text={buttonText}
                  onClick={onClick}
                />
              )}

              {type === "comment" ? (
                <Button
                  disabled={comment === "" ? true : false}
                  text={buttonText}
                  onClick={submitForm}
                />
              ) : null}
            </Flex>
          </>
        )}
      </Flex>
    </CardContainer>
  );
};

export default WhiteListCard;
