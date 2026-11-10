type AppointmentButtonProps = {
  onBookAppointment: () => void;
};

export function appointmentButton({onBookAppointment}: AppointmentButtonProps) {
  return (
    <div>
      <button
      className = "rounded-full bg-white px-9 py-4 font-gothic text-sm text-black transition duration-300 ease-in-out hover:scale-110 font-bold"
      onClick={onBookAppointment}>
        Book Now
      </button>
    </div>
  );
}
