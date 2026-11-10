import {headerAppointmentButton} from '../components/headerAppointmentButton.tsx'
import {aboutButton} from '../components/aboutButton.tsx'
import {servicesButton} from '../components/servicesButton.tsx'
import {locationsButton} from '../components/locationsButton.tsx'
import {titleButton} from '../components/titleButton.tsx'

type HeaderProps = {
};

export default function Header(){
    return (
        <div className="max-w- mx-auto px-6 md:px-12 flex items-center justify-between h-[72px]  bg-rose-100">
            <div className="flex  justify-start flex-row  bg-rose-100">
                {titleButton({onTitleButton: () => window.open('localhost:5173', '_blank')})}
            </div>
            <div className="flex justify-center text-2xl flex-row  bg-rose-100">
                {aboutButton({onAbout: () => window.open('localhost:5173/about', '_blank')})}
                {servicesButton({onServices: () => window.open('localhost:5173/services', '_blank')})}
                {locationsButton({onLocations: () => window.open('localhost:5173/locations', '_blank')})}
            </div>
            <div className="flex justify-end flex-row text-2xl bg-rose-100">
                {headerAppointmentButton({onBookAppointment: () => window.open('localhost:5173/bookings', '_blank')})}
            </div>
        </div>
        
    )
}