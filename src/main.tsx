
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import React from 'react' // Added explicit React import

// Create root with non-null assertion since we know the element exists
const rootElement = document.getElementById("root")
if (!rootElement) throw new Error("Failed to find the root element")

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
