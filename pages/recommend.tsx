import { useEffect, useState } from 'react'

import { bookSearch } from './api/book-search'

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
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)}></input>
      {data.map((post) => (
        <>
          {post.authors.map((data) => (
            <p>{data}</p>
          ))}
          <p>{post.title}</p>
        </>
      ))}
    </div>
  )
}

export default recommend
