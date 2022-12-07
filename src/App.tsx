import { Suspense, lazy } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import LoaderStyled from '@components/styled/Loader'

import Layout from './Layout'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const MoviesPage = lazy(() => import('./pages/MoviesPage'))
const Movie = lazy(() => import('./pages/Movie'))

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Suspense fallback={<LoaderStyled />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/movies" element={<MoviesPage />} />
              <Route path="/movie/:id" element={<Movie />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
