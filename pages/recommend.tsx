import Image from 'next/image'
import { useEffect, useState } from 'react'

import styled from '@emotion/styled'

import { bookSearch } from './api/book-search'

const Container = styled.div`
  background: url('https://i.imgur.com/7XaIf8n.png') center center;
  background-repeat: no-repeat;
  background-size: 100vw;
  display: flex;
  align-items: center;
  height: 100vh;

  & > * {
    color: var(--fg-color);
  }

  & > div {
    display: flex;
    background-color: #fff;
    width: 640px;
    margin: 0 auto;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    justify-content: start;
    height: 480px;
    overflow: scroll;
    padding: 0 16px 16px 16px;
    border-radius: 16px;
  }
`

const BookContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  & img {
    border-radius: 8px;
    max-width: 80px;
    margin-right: 24px;
  }

  &:hover {
    background-color: #f3f3f3;
    scale: 0.98;
    padding: 16px;
  }
`

const BookDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  & p {
    margin: 0;
  }

  & > p {
    font-size: 18px;
    font-weight: 500;
  }

  & span {
    font-size: 14px;
    color: #727272;
  }
`

const SearchBar = styled.input`
  width: 100%;
  font-size: 18px;
  height: 72px;
  padding-left: 16px;
  border: none;

  &:focus {
    outline: none;
  }
`

const Icon = styled.svg`
  width: 24px;
`

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: sticky;
  top: 0;
  background-color: #fff;
  border-bottom: 1px solid #e9ebee;
`

const BookList = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
`

const recommend = () => {
  const [query, setQuery] = useState('')
  const [data, setData] = useState([])

  const getBookData = async (query) => {
    if (query === '') {
      return null
    } else {
      const { data } = await bookSearch({ query: query })
      return setData(data.documents)
    }
  }

  useEffect(() => {
    getBookData(query)
  }, [query])

  console.log(data)
  return (
    <Container>
      <div>
        <SearchBarContainer>
          <Icon
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
            />
          </Icon>
          <SearchBar
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></SearchBar>
        </SearchBarContainer>

        <BookList>
          {data.map((post) => (
            <BookContainer>
              <img src={post.thumbnail} layout='fill' />
              <BookDetails>
                <p>{post.title}</p>
                <div>
                  {post.authors.map((data) => (
                    <span>{data}</span>
                  ))}
                </div>
              </BookDetails>
            </BookContainer>
          ))}
        </BookList>
      </div>
    </Container>
  )
}

export default recommend
