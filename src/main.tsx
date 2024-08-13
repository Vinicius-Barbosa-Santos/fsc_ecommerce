import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './App.css'
import UserContextProvider from './contexts/UserContext.tsx'
import CategoryContextProvider from './contexts/CategoryContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserContextProvider>
      <CategoryContextProvider>
        <App />
      </CategoryContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
)
