import {headerAppointmentButton} from '../components/headerAppointmentButton.tsx'
import {aboutButton} from '../components/aboutButton.tsx'
import {servicesButton} from '../components/servicesButton.tsx'
import {locationsButton} from '../components/locationsButton.tsx'
import {titleButton} from '../components/titleButton.tsx'
import { useNavigate } from 'react-router'

type HeaderProps = {
};

export default function Header(){
    const navigate = useNavigate();
    return (
        <div className="max-w-full fixed px-6 z-50 flex items-center justify-between h-[72px] w-full bg-rose-50">
            <div className="flex  justify-start flex-row text-stone-900 translate-y-[-6px] translate-x-[600px]">
                {titleButton({onTitleButton: () => navigate('/')})}
            </div>
            <div className="flex justify-center flex-row text-stone-600 translate-y-[-6px]">
                {aboutButton({onAbout: () => navigate('/about-us')})}
                {servicesButton({onServices: () => navigate('/services')})}
                {locationsButton({onLocations: () => navigate('/locations')})}
            </div>
            <div className="flex justify-end flex-row text-stone-900 translate-x-[-600px]">
                {headerAppointmentButton({onBookAppointment: () => navigate('/bookings')})}
            </div>
        </div>
        
    )
}