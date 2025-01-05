import { Home, NotFound, RootErrorBoundary } from './page'
import PWABadge from './pwa/PWABadge'

import { BrowserRouter, Route, Routes } from 'react-router'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
          errorElement={<RootErrorBoundary />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <PWABadge />
    </BrowserRouter>
  )
}

export default App
