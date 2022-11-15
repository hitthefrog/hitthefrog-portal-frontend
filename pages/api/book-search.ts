import axios from 'axios'

const Kakao = axios.create({
  baseURL: 'https://dapi.kakao.com', // 공통 요청 경로를 지정해준다.
  headers: {
    Authorization: 'KakaoAK d5b5ca401683d7d9a5a8f30d5faa739b'
  }
})

// search book api
export const bookSearch = (params) => {
  return Kakao.get('/v3/search/book', { params })
}
