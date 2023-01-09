import { Route, Routes } from 'react-router-dom'

import MovieDetails from './pages/MovieDetails'
import MoviesList from './pages/MoviesList'

const Movies = () => {
  return (
    <Routes>
      <Route path="" element={<MoviesList />} />
      <Route path="/:id" element={<MovieDetails />} />
    </Routes>
  )
}

export default Movies
