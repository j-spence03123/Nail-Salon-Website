import { ServiceSelection } from '../components/serviceSelection';
import { StaffSelection } from '../components/staffSelection';
import { LocationSelection } from '../components/locationSelection';
import { services, professionals, locations } from '../components/bookingData';
import { useState } from 'react';
import { BackButton } from '../components/backButton';
import { BookingMenuState } from '../enums';

import "cally"


export default function Bookings() {
    const [currentBookingMenuState, setCurrentBookingMenuState] = useState(BookingMenuState.Locations)
    const [previousBookingMenuState, setPreviousBookingMenuState] = useState<null | BookingMenuState>(null)
    const [selectedService, setSelectedService] = useState("");
    const [selectedMember, setSelectedMember] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const eligibleProfessionals = professionals.filter((professional) =>
        professional.assignments.some((assignment) =>
            assignment.locationId === selectedLocation &&
            assignment.serviceIds.includes(selectedService)
        )

    )
    const today = new Intl.DateTimeFormat("sv-SE", {
        timeZone: "Europe/London",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(new Date());
    return (
        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center gap-8 px-6 py-12 lg:px-8">
            <div className=" w-full max-w-full px-6 lg:px-8 animate-rise-fade-in">
                <div className="mx-auto max-w-6xl mb-8">
                    <p className="font-gothic text-left text-base text-bold opacity-80 text-neutral-500 ">
                        BOOK WITH US
                    </p>

                    <h2 className="mt-3 font-cormamont text-4xl text-stone-900 ">
                        Choose your service and professional
                    </h2>
                    {previousBookingMenuState !== null && (
                    <div className="box-border animate-booking-card rounded-2xl h-50 border-1 border-stone-300 transition-shadow duration-300 ease-in-out hover:shadow-2xl">
                        <BackButton
                            onBackButton = {() => {
                                setCurrentBookingMenuState(previousBookingMenuState)
                            }}
                        />
                    </div>
                    )}
                </div>
                <div className=" w-full max-w-[1000px]">
                    {currentBookingMenuState === BookingMenuState.Locations && (
                        <div className="box-border animate-booking-card rounded-2xl h-50 border-1 border-stone-300 transition-shadow duration-300 ease-in-out hover:shadow-2xl">
                            <LocationSelection
                                locations = {locations}
                                selectedLocation={selectedLocation}
                                onSelect = {(locationId) => {
                                    setSelectedLocation(locationId)
                                    setPreviousBookingMenuState(currentBookingMenuState)
                                    setCurrentBookingMenuState(BookingMenuState.Services)
                                    
                                }}/>
                        </div>
                    )}
                    {currentBookingMenuState === BookingMenuState.Services && (
                        <div className="box-border animate-booking-card rounded-2xl h-50 border-1 border-stone-300 transition-shadow duration-300 ease-in-out hover:shadow-2xl">
                            <ServiceSelection
                                services = {services}
                                selectedService={selectedService}
                                onSelect = {(serviceId) => {
                                    setSelectedService(serviceId)
                                    setPreviousBookingMenuState(currentBookingMenuState)
                                    setCurrentBookingMenuState(BookingMenuState.Members)
                                }}/>
                        </div>
                    )}  
                    {currentBookingMenuState === BookingMenuState.Members && (
                        <div className="box-border animate-booking-card rounded-2xl h-50 border-1 border-stone-300 transition-shadow duration-300 ease-in-out hover:shadow-2xl">
                            <StaffSelection
                                members = {eligibleProfessionals}
                                selectedMember={selectedMember}
                                onSelect = {(memberId) => {
                                    setSelectedMember(memberId)
                                    setPreviousBookingMenuState(currentBookingMenuState)
                                    setCurrentBookingMenuState(BookingMenuState.Dates)
                                }}/>
                        </div>
                    )}
                    {currentBookingMenuState === BookingMenuState.Dates && (
                    <div className="relative box-border animate-booking-card flex h-50 flex-col gap-2 rounded-2xl border border-stone-300 px-6 py-4 transition-shadow duration-300 ease-in-out hover:shadow-2xl">
                        <h2 className="m-0 font-cormamont">Choose a date</h2>

                        <button
                            type="button"
                            aria-expanded={isCalendarOpen}
                            aria-controls="booking-calendar"
                            className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-left font-gothic text-base text-neutral-500 opacity-80"
                            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                        >
                            {selectedDate
                                ? selectedDate.split("-").reverse().join("/")
                                : "Select a date"}
                        </button>

                        <div
                            id="booking-calendar"
                            hidden={!isCalendarOpen}
                            className="absolute left-0 top-full z-10 mt-2 rounded-xl border border-stone-300 bg-white p-4 shadow-lg"
                        >
                            <calendar-date
                                className="cally"
                                locale="en-GB"
                                value={selectedDate}
                                min={today} 
                                onchange={(event) => {
                                    const calendar = event.currentTarget as HTMLElement & { value: string };
                                    setSelectedDate(calendar.value);
                                    setIsCalendarOpen(false);
                                }}
                            >
                                <calendar-month />
                            </calendar-date>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
}