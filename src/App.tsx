import { useState, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Layout>
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((counter) => counter + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
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
