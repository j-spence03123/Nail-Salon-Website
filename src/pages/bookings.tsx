import { ServiceSelection } from '../components/serviceSelection';
import { StaffSelection } from '../components/staffSelection';
import { LocationSelection } from '../components/locationSelection';
import { services, professionals, locations } from '../components/bookingData';
import { useState, useEffect } from 'react';
import { BackButton } from '../components/backButton';
import { BookingMenuState } from '../enums';



export default function Bookings() {
    const [currentBookingMenuState, setCurrentBookingMenuState] = useState(BookingMenuState.Locations)
    const [previousBookingMenuState, setPreviousBookingMenuState] = useState<null | BookingMenuState>(null)

    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedService, setSelectedService] = useState("");
    const [selectedMember, setSelectedMember] = useState("");
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    type BookingSlot = {
        dateTime: Date
        time: string
    }
    const [slotTime, setSlotTime] = useState('')
    const [bookingSlots, setBookingSlots] = useState<BookingSlot[][]>([])
    const [slotIndex, setSlotIndex] = useState(0);

    const appointmentDateTime = bookingSlots[slotIndex]
        ?.find(slot => slot.time === slotTime)
        ?.dateTime

    const selectedLocationName = locations.find(
        location => location.id === selectedLocation
        )?.name

    const selectedMemberName = professionals.find(
        member => member.id === selectedMember
        )?.name

    const eligibleProfessionals = professionals.filter((professional) =>
        professional.assignments.some((assignment) =>
            assignment.locationId === selectedLocation &&
            assignment.serviceIds.includes(selectedService)
        )

    )


    useEffect(() => {
        const location = locations.find(location => location.id === selectedLocation)
        if (!location || !selectedMember) return

        const [hour, minute] = location.openingHours.close.split(":").map(Number)
        setBookingSlots([]);

        let today = new Date()

        for (let i = 0; i < 14; i++) {
            const currentDate = new Date(today)
            currentDate.setDate(today.getDate() + i)

            const hours = currentDate.getDay() === 0
                ? location.sundayHours ?? location.openingHours
                : location.openingHours

            const [openHour, openMinute] = hours.open.split(":").map(Number)
            const [closeHour, closeMinute] = hours.close.split(":").map(Number)

            const endTime = new Date(currentDate)
            endTime.setHours(closeHour, closeMinute, 0, 0)
            currentDate.setHours(openHour, openMinute, 0, 0)

            const timeSlots: BookingSlot[] = []


            while (currentDate < endTime) {
                if (currentDate >= today) {
                    timeSlots.push({
                        dateTime: new Date(currentDate),
                        time: currentDate.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                        }),
                    })
                }

                currentDate.setMinutes(currentDate.getMinutes() + 30)
            }

            if (timeSlots.length > 0) {
                setBookingSlots(prev => [...prev, timeSlots])
            }
        }
    }, [selectedLocation, selectedMember])

    return (
        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center gap-8 px-6 py-12 lg:px-8">
            <div className=" w-full max-w-full px-6 lg:px-8 animate-rise-fade-in">
                <div className="mx-auto max-w-6xl mb-8">
                    <p className="font-gothic text-left text-xl text-bold opacity-100 text-neutral-500 ">
                        BOOK WITH US
                    </p>
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
                                onBack={() => {setCurrentBookingMenuState(BookingMenuState.Locations), setSelectedLocation('')}}
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
                                onBack={() => {setCurrentBookingMenuState(BookingMenuState.Services), setSelectedService('')}}
                                selectedMember={selectedMember}
                                onSelect = {(memberId) => {
                                    setSelectedMember(memberId)
                                    setPreviousBookingMenuState(currentBookingMenuState)
                                    setCurrentBookingMenuState(BookingMenuState.Dates)
                                }}/>
                                
                        </div>
                    )}
                    {currentBookingMenuState === BookingMenuState.Dates && (
                        <div className="box-border animate-booking-card rounded-2xl h-100 border-1 border-stone-300 transition-shadow duration-300 ease-in-out hover:shadow-2xl">
                            <div className="p-4 font-gothic text-neutral-900">
                                <div className="flex items-center justify-between gap-4 px-4">
                                    <p className="font-cormamont">Available Bookings</p>

                                    <BackButton
                                        onBackButton={() => {
                                            setSelectedMember(''),
                                            setCurrentBookingMenuState(BookingMenuState.Members)
                                        }}
                                    />
                                </div>
                                <div className='flex gap-3 items-center w-full overflow-x-auto px-4  mt-4 font-gothic text-base text-neutral-500'>
                                    {
                                        bookingSlots.length && bookingSlots.map((item, index) =>(
                                            <div onClick={() => setSlotIndex(index)}className={`text-center py-6 min-w-16 rounded-xl cursor-pointer ${slotIndex === index ? 'bg-rose-300 text-white': 'border border-gray'}`}key={index}>
                                                <p> {item[0] && daysOfWeek[item[0].dateTime.getDay()] }</p>
                                                <p> {item[0] && item[0].dateTime.getDate() }</p>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className='flex items-center gap-3 w-full px-4 overflow-x-auto mt-4'>
                                    {bookingSlots.length && bookingSlots[slotIndex].map((item,index)=>(
                                        <p onClick={() => setSlotTime(item.time)} className={`text-base text-neutral-500 font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-rose-200 text-white': 'border border-gray'} `}key={index}>
                                            {item.time.toLowerCase()}

                                        </p>
                                    ))}
                                </div>
                                <div className="px-4 mt-4">
                                    <button className='bg-rose-300 text-white font-gothic text-base text-neutral-500 w-full py-3 rounded-full'
                                    onClick ={() => {
                                        setPreviousBookingMenuState(currentBookingMenuState)
                                        
                                        setCurrentBookingMenuState(BookingMenuState.Booked)
                                        }}> BOOK
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    {currentBookingMenuState === BookingMenuState.Booked &&(
                        <div className="box-border animate-booking-card rounded-2xl h-50 border-1 border-stone-300 transition-shadow duration-300 ease-in-out hover:shadow-2xl">
                            <div className="flex h-full flex-col justify-start py-6 gap-2 px-10 text-left">
                                <p className='font-cormamont'>Appointment booked!</p>
                                {appointmentDateTime && (
                                    <p className='font-gothic text-base text-neutral-600'>Your booking at Bote Beauty {selectedLocationName} with {selectedMemberName} {" on "}
                                        {appointmentDateTime.toLocaleDateString("en-GB", {
                                            weekday: "long",
                                            day: "numeric",
                                            month: "long",
                                        })}
                                        {" at "}
                                        {appointmentDateTime.toLocaleTimeString("en-GB", {
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })}
                                        {" is confirmed!"}</p>
                                )}
                                <p className='font-gothic text-2xl text-rose-600'>Thank you!</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}