import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LanguageContextProvider from './context/LanguageContext.jsx'
import ProductContextProvider from './context/ProductContext.jsx'
import 'react-lazy-load-image-component/src/effects/blur.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageContextProvider>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </LanguageContextProvider>
  </StrictMode>,
)
