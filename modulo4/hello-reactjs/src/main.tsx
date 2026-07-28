import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppAnimales from './AppAnimales.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppAnimales />
  </StrictMode>,
)
