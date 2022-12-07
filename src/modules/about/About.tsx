import { Route, Routes } from 'react-router-dom'

import AboutPage from './pages/AboutPage'

const About = () => {
  return (
    <Routes>
      <Route path="" element={<AboutPage />} />
    </Routes>
  )
}

export default About
