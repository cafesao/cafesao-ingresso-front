import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './router/Router'
import './main.css'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
