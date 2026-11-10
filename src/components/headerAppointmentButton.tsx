type headerAppointmentButtonProps = {
  onBookAppointment: () => void;
};

export function headerAppointmentButton({onBookAppointment}: headerAppointmentButtonProps) {
  return (
    <div>
      <button
      className = "rounded-full bg-red-300 px-9 py-4 font-gothic text-sm text-white font-bold "
      onClick={onBookAppointment}>
        Book Now
      </button>
    </div>
  );
}
