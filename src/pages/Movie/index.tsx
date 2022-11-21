import * as React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const MoviePage = () => {
  const { handle } = useParams()
  const { state } = useLocation()

  console.log(handle)
  console.log(state)

  return (
    <div>
      <h1>Movie : {decodeURI(handle || '')}</h1>
    </div>
  )
}

export default MoviePage
