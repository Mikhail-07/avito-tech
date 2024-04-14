import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './components/AppRouter';
import ScrollToTop from './utils/ScrollToTop';


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <AppRouter />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
