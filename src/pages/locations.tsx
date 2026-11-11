import { useNavigate } from 'react-router'
import LocationCard from '../components/locationCard';

export default function LocationsPage() {
    const navigate = useNavigate();
    return (
        <section id = "locations" className="py-75 min-w-full min-h-full">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <p className="font-gothic text-base tracking-[0.2em] text-bold opacity-80 text-neutral-500">
                    VISIT US
                </p>

                <h2 className="mt-3 font-cormamont text-4xl text-stone-900">
                    Our Locations
                </h2>
            </div>
            <div className="flex flex-row justify-center">
                <div className="flex flex-col max-w-7xl">
                    <LocationCard
                        name="Chester"
                        address="St Werburgh St, Chester CH1 2DY"
                        phone="07777 777777"
                        weekHours="Mon - Sat: 9am - 8pm"
                        sunHours= "Sun: 10am - 5pm"
                        onBook={() => navigate("/bookings")}
                    />
                </div>
                <div className="flex flex-col max-w-7xl mx-6 my-10">
                    <div className="box-border rounded-2xl h-75 w-100 border-1 border-stone-300 transition-shadow duration-300 ease-in-out hover:shadow-2xl "> 
                        <p className="text-left px-8 text-black font-cormamont text-3xl opacity-100 py-25 animate-rise-fade-in">More locations coming soon...</p>
                    </div>
                </div>
            </div>
        </section>
    );
}