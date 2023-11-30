import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Layout } from './components/Layout';
import Clear from './pages/Clear';
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Main />} />
          <Route path='/clear' element={<Clear />} />
        </Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
