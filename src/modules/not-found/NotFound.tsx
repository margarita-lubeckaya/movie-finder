import { Route, Routes } from 'react-router-dom'

import NotFoundPage from './pages/NotFound'

const NotFound = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default NotFound
