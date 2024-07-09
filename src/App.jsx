import { Box } from '@mui/material'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent'
import HomePage from './pages/HomePage'
import ExerciseDetailPage from './pages/ExerciseDetailPage'
import FooterComponent from './components/FooterComponent'

function App() {

  return (
    <>
     <Box width="400px" sx={{width: {xl: '1488px'}}} m="auto">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exercise/:id" element={<ExerciseDetailPage />} />
      </Routes>
      <FooterComponent />
     </Box>
    </>
  )
}

export default App
