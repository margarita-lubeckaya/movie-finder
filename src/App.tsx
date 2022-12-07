import { Suspense, lazy } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
// import { ReactQueryDevtools } from 'react-query/devtools'
import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom'

import Layout from '@components/Layout'
import LoaderStyled from '@components/styled/Loader'

const Home = lazy(() => import('@modules/home/Home'))
const About = lazy(() => import('@modules/about/About'))
const Movies = lazy(() => import('@modules/movies/Movies'))
const NotFound = lazy(() => import('@modules/not-found/NotFound'))

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Suspense fallback={<LoaderStyled />}>
            <Routes>
              <Route path="/" element={<Outlet />}>
                <Route path="" element={<Home />} />
                <Route path="about/*" element={<About />} />
                <Route path="movies/*" element={<Movies />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </QueryClientProvider>
  )
}

export default App
