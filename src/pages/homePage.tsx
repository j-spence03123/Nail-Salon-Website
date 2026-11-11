import {appointmentButton} from '../components/appointmentButton.tsx'
import { useNavigate } from 'react-router'

export default function HomePage() {
    const navigate = useNavigate();
    return (
        <div
            className="flex flex-col min-h-screen items-center justify-center background-image bg-cover bg-center">
            <h1 className="font-cormamont text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter leading-[0.9] animate-rise-fade-in ">Bote Beauty </h1>
            <h2 className="text-2xl mb-8 text-white font-cormamont italic opacity-90 text-center animate-rise-fade-in ">Make every treatment unforgettable</h2>
            {appointmentButton({ onBookAppointment: () => navigate('/bookings')})} 
        </div>
    );
}