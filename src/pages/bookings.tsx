import { ServiceSelection } from '../components/serviceSelection';
import { StaffSelection } from '../components/staffSelection';
import { useState } from 'react';
import "cally"


export default function HomePage() {
    const [selectedService, setSelectedService] = useState("");
    const [selectedMember, setSelectedMember] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const today = new Intl.DateTimeFormat("sv-SE", {
        timeZone: "Europe/London",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(new Date());
    return (
        <div className="flex min-h-screen items-center flex-row  justify-center animate-rise-fade-in">
            <div className="box-border rounded-2xl mx-10 h-50 w-100 border-1 border-stone-300 transition-shadow duration-300 ease-in-out hover:shadow-2xl">
                <ServiceSelection
                    services = {["Nail Care","Manicure","Makeup"]}
                    selectedService={selectedService}
                    onSelect={setSelectedService}/>
            </div>
            <div className="box-border rounded-2xl h-50 w-100 border-1 border-stone-300 transition-shadow duration-300 ease-in-out hover:shadow-2xl">
                <StaffSelection
                    members = {["Dasha","Charlotte","Rihanna"]}
                    selectedMember={selectedMember}
                    onSelect={setSelectedMember}/>
            </div>
            
            <div className="w-full max-w-100 mx-10 rounded-2xl border border-stone-300 bg-white p-6">
                <h2 className="mb-4 font-cormamont text-2xl">Choose a date</h2>

                <calendar-date
                    className="cally"
                    locale="en-GB"
                    value={selectedDate}
                    min={today}
                    onchange={(event) => {
                        const calendar = event.currentTarget as HTMLElement & { value: string };
                        setSelectedDate(calendar.value);
                    }}>
                    <calendar-month />
                </calendar-date>
            </div>
        </div>
    );
}