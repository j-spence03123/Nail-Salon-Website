import './App.css'
import './index.css'
import {appointmentButton} from './components/appointmentButton.tsx'
import Header from './components/header.tsx'

export default function App() {
  return (
    <div>
      <Header />
      <div
        className="flex flex-col min-h-screen items-center justify-center background-image bg-cover bg-center">
        <h1 className="font-cormamont text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter leading-[0.9]">Bote Beauty </h1>
        <h2 className="text-2xl mb-8 text-white font-cormamont italic opacity-90 text-center">Make every treatment unforgettable</h2>
        {appointmentButton({onBookAppointment: () => window.open('localhost:5173/bookings', '_blank')})}
      </div>
    </div>
  );
}