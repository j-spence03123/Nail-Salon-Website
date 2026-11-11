import { ServiceSelection } from '../components/serviceSelection';
import { StaffSelection } from '../components/staffSelection';
import { useNavigate } from 'react-router'
import { useState } from 'react';
import "cally"


export default function HomePage() {
    const [selectedService, setSelectedService] = useState("");
    const [selectedMember, setSelectedMember] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const navigate = useNavigate();
    return (
        <div className="flex min-h-screen items-center flex-row  justify-center">
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
            <button type="button" popoverTarget="cally-popover1" className="btn">
                {selectedDate || "Choose a date"}
            </button>

            <div
                id="cally-popover1"
                popover="auto"
                className="dropdown rounded-box bg-base-100 p-4 shadow-lg"
            >
                <calendar-date
                    className="cally"
                    locale="en-GB"
                    value={selectedDate}
                    onchange={(event) => {
                        const calendar = event.currentTarget as HTMLElement & { value: string };
                        setSelectedDate(calendar.value);
                    }}
                >
                    <calendar-month />
                </calendar-date>
            </div>
        </div>
    );
}