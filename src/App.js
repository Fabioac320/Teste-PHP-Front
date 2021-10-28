import React from 'react';
import Empresa from './Empresa';
import Cliente from './Cliente';
import Home from './Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SnackbarProvider from 'react-simple-snackbar';

function App() {
  return (
    <BrowserRouter>
      <SnackbarProvider>

          <Routes>
          <Route path="/" element={<Home />} />
              <Route path="/empresa" element={<Empresa />} />
              <Route path="/cliente" element={<Cliente />} />
          </Routes>

      </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;