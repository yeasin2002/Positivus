import { Home, NotFound, RootErrorBoundary } from './page';
import PWABadge from './pwa/PWABadge';

import { Route, Routes } from 'react-router';

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home />}
          errorElement={<RootErrorBoundary />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <PWABadge />
    </>
  );
};

export default App;
