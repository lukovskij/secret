import React from 'react'
import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-react';
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <FpjsProvider
    loadOptions={{
      apiKey: import.meta.env.VITE_FINGER_API_KEY,
      region: "eu"
    }}
  >
    <App />
  </FpjsProvider>
  </React.StrictMode>,
)


