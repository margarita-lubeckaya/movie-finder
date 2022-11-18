import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const MoviesPage = lazy(() => import('./pages/MoviesPage'))

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div>loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/movies" element={<MoviesPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  )
}

export default App
