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
        <div className="max-w-full fixed mx-auto px-6 md:px-12 flex items-center justify-between h-[72px] w-full bg-rose-100">
            <div className="flex  justify-start flex-row  bg-rose-100">
                {titleButton({onTitleButton: () => navigate('/')})}
            </div>
            <div className="flex justify-center text-2xl flex-row  bg-rose-100">
                {aboutButton({onAbout: () => navigate('/about-us')})}
                {servicesButton({onServices: () => navigate('/services')})}
                {locationsButton({onLocations: () => navigate('/locations')})}
            </div>
            <div className="flex justify-end flex-row text-2xl bg-rose-100">
                {headerAppointmentButton({onBookAppointment: () => navigate('/bookings')})}
            </div>
        </div>
        
    )
}