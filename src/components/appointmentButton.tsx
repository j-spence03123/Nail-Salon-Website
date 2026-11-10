type AppointmentButtonProps = {
  onBookAppointment: () => void;
};

export function appointmentButton({onBookAppointment}: AppointmentButtonProps) {
  return (
    <div>
      <button
      className = "rounded-full bg-white px-9 py-4 font-helvetica text-sm text-black font-bold"
      onClick={onBookAppointment}>
        Book Now
      </button>
    </div>
  );
}
