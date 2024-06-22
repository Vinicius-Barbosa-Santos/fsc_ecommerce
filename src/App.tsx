import { FunctionComponent } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import { HomePage } from './pages/Home'
import { LoginPage } from './pages/Login'

export const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}