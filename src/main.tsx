import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './App.css'
import UserContextProvider from './contexts/UserContext.tsx'
import CategoryContextProvider from './contexts/CategoryContext.tsx'
import CartContextProvider from './contexts/CartContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserContextProvider>
      <CategoryContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </CategoryContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
)
