import Image from 'next/image'
import { useEffect, useState } from 'react'

import styled from '@emotion/styled'

import Button from '@/components/Button'
import Box from '@/components/box'

import { bookSearch } from './api/book-search'

const Container = styled.div`
  background: url('https://i.imgur.com/7mdVua3.png');
  background-repeat: no-repeat;
  background-size: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 24px;

  * h3 {
    margin: 0;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    /* or 150% */

    text-align: center;

    color: #dbdbdb;
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
    /* background-color: #f3f3f326; */
    scale: 0.96;
    /* padding: 16px; */
  }

  & svg {
    color: #fff;
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
    color: #dbdbdb;
  }

  & span {
    font-size: 14px;
    color: #dbdbdb;
  }
`

const SearchBar = styled.input`
  width: 100%;
  font-size: 18px;
  height: 72px;
  border: none;
  background-color: transparent;
  color: #dbdbdb;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(245, 245, 245, 0.2);
  }
`

const Icon = styled.svg`
  width: 24px;
  color: #f1f1f1;
  margin-left: 24px;
`
const BookList = styled.div<{ query: string }>`
  position: absolute;
  opacity: ${(props) => (props.query === '' ? 0 : 1)};
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  top: 364px;
  display: flex;
  width: 640px;
  max-height: 408px;
  overflow: scroll;
  flex-direction: column;
  gap: 24px;
  background: rgba(255, 255, 255, 0.1);
  /* stroke */
  padding: 24px;

  border-width: 0px 1px 0px 1px;
  border-style: solid;
  border-color: rgba(245, 245, 245, 0.2);
  backdrop-filter: blur(40.775px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 0px 0px 16px 16px;
`

const recommend = () => {
  const [query, setQuery] = useState('')
  const [data, setData] = useState([])
  const [startSearch, setStartSearch] = useState(true)

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
      <Box query={query} isSearchbar={startSearch}>
        {startSearch ? (
          <>
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
              placeholder={'Search your books'}
              onChange={(e) => setQuery(e.target.value)}
            ></SearchBar>
          </>
        ) : (
          <>
            <h3>Just recommend 3books, then be our whitelist</h3>
            <Button onClick={() => setStartSearch(true)}>Get Started</Button>
          </>
        )}
      </Box>
      <BookList query={query}>
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
    </Container>
  )
}

export default recommend

{
  /* <SearchBarContainer>
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
        </BookList> */
}
