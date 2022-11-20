import * as React from 'react'
import { useQuery } from 'react-query'
import { useState } from 'react'
import axios from 'axios'

interface Passenger {
  _id: string
  name: string
}

const fetchPass = async (page: number): Promise<{ data: Passenger[] }> => {
  const { data } = await axios.get(
    `https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`
  )
  return data
}

const HomePage = () => {
  const [page, setPage] = useState(0)

  const {
    isLoading,
    isError,
    data: passengers,
    isSuccess,
  } = useQuery({
    queryKey: ['passengers', page],
    queryFn: () => fetchPass(page),
  })

  return (
    <div className="classname">
      <h1>Homepage Component</h1>

      <button
        disabled={page === 0 ? true : undefined}
        onClick={() => {
          setPage((saved) => Math.max(0, saved - 1))
        }}
      >
        prev page
      </button>

      <button
        disabled={page === 10 ? true : undefined}
        onClick={() => {
          setPage((saved) => saved + 1)
        }}
      >
        next page
      </button>

      <br />
      <h3>page {page}</h3>
      <br />

      {isSuccess &&
        passengers.data.map((item) => (
          <div key={item._id}>
            <p>{item.name}</p>
            <p>{item._id}</p>
          </div>
        ))}

      {isError && <p>Error!</p>}
      {isLoading && <p>Loading..</p>}
    </div>
  )
}

export default HomePage
