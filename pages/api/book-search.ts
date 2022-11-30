import axios from "axios";

type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

type Range<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

type BookSearchParams = {
  query: string; //검색을 원하는 질의어
  sort?: "accuracy" | "accuracy"; //결과 문서 정렬 방식, accuracy(정확도순) 또는 recency(최신순), 기본 값 accuracy
  page?: Range<1, 50>; //결과 페이지 번호, 1~50 사이의 값, 기본 값 1
  size?: Range<1, 50>; //한 페이지에 보여질 문서 수, 1~50 사이의 값, 기본 값 10
};

const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com", // 공통 요청 경로를 지정해준다.
  headers: {
    Authorization: "KakaoAK d5b5ca401683d7d9a5a8f30d5faa739b",
  },
});

// search book api
export const bookSearch = (params: BookSearchParams) => {
  return Kakao.get("/v3/search/book", { params });
};
