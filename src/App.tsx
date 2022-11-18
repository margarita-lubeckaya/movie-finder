import { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout'

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div>loading...</div>}>
          <Routes>
            <Route
              path="/about"
              element={
                <>
                  <div>About</div>
                </>
              }
            />
            <Route
              path="/users"
              element={
                <>
                  <div>Users</div>
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <div>Home</div>
                </>
              }
            />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  )
}

export default App
