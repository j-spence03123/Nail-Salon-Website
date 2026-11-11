import {headerAppointmentButton} from '../components/headerAppointmentButton.tsx'
import {aboutButton} from '../components/aboutButton.tsx'
import {servicesButton} from '../components/servicesButton.tsx'
import {locationsButton} from '../components/locationsButton.tsx'
import {titleButton} from '../components/titleButton.tsx'
import { useNavigate } from 'react-router'

export default function Header() {
    const navigate = useNavigate();

    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-rose-200">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-2 lg:flex-nowrap lg:px-6">
                <div className="shrink-0">
                    {titleButton({ onTitleButton: () => navigate("/") })}
                </div>

                <nav className="order-last flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 text-stone-600 lg:order-none lg:w-auto">
                    {aboutButton({ onAbout: () => navigate("/about-us") })}
                    {servicesButton({ onServices: () => navigate("/services") })}
                    {locationsButton({ onLocations: () => navigate("/locations") })}
                </nav>

                <div className="shrink-0 text-stone-900">
                    {headerAppointmentButton({
                        onBookAppointment: () => navigate("/bookings"),
                    })}
                </div>
            </div>
        </header>
    );
}
