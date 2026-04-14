import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route} from 'react-router'
import Layouts from './Layouts';
import Image from './Image';
import Text from './Text';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<Layouts />}>
        <Route path='/' element={<App />} />
        <Route path='/image' element={<Image />} />
        <Route path='/text' element={<Text />} />

      </Route>
    </Routes>
    </BrowserRouter>
  
  </StrictMode>,
)
