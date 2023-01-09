import { Route, Routes } from 'react-router-dom'

import Homepage from './pages/Homepage'

const Home = () => {
  return (
    <Routes>
      <Route path="" element={<Homepage />} />
    </Routes>
  )
}

export default Home
