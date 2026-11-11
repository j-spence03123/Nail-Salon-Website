import './App.css'
import './index.css'
import HomePage from './pages/homePage.tsx'
import LocationsPage from './pages/locations.tsx'
import AboutUs from './pages/aboutUs.tsx'
import Services from './pages/services.tsx'
import Bookings from './pages/bookings.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Header from './components/header.tsx'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/bookings" element={<Bookings/>} />
      </Routes>
    </BrowserRouter>
  )
}