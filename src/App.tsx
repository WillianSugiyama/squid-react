import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { GamePage } from './pages/Game'

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </div>
  )
}