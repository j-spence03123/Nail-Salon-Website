import { MapPin, Phone, Clock } from "lucide-react";
import { locationsAppointmentButton } from "./locationsAppointmentButton";

type LocationCardProps = {
    name: string;
    address: string;
    phone: string;
    weekHours: string;
    sunHours: string;
    onBook: () => void;
};



export default function LocationCard({
    name,
    address,
    phone,
    weekHours,
    sunHours,
    onBook,
}: LocationCardProps) {
    return(
        <div className="flex flex-row justify-center my-10 ">
            <div className="box-border rounded-2xl h-75 w-100 border-1 border-stone-300 transition-shadow duration-300 ease-in-out hover:shadow-2xl "> 
                <p className="text-left px-8 text-black font-cormamont text-3xl opacity-100 py-6 animate-rise-fade-in">{name}</p>
                <div className="flex flex-row px-8">
                    <MapPin aria-hidden="true" strokeWidth={1} className="size-4 translate-y-3"/>
                    <h1 className="text-left text-neutral-700 font-gothic text-base opacity-100 animate-rise-fade-in my-2 mx-2">{address}</h1>
                </div>
                <div className="flex flex-row px-8">
                    <Phone aria-hidden="true" strokeWidth={1} className="size-4 translate-y-3"/>
                    <h1 className="text-left text-neutral-700 font-gothic text-base opacity-100 animate-rise-fade-in my-2 mx-2">{phone}</h1>
                </div>
                <div className="flex flex-column px-8">
                    <Clock aria-hidden="true" strokeWidth={1} className="size-4 translate-y-3"/>
                    <div className="text-left text-neutral-700 font-gothic text-base opacity-100 animate-rise-fade-in my-2 mx-2">
                        <p>{weekHours}</p>
                        <p>{sunHours}</p>
                    </div>
                </div>
                <div className="text-white px-10">
                    {locationsAppointmentButton({onBookAppointment: onBook})}
                </div>
            </div>
        </div>
    )
}
