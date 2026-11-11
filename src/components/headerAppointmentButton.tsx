type headerAppointmentButtonProps = {
  onBookAppointment: () => void;
};

export function headerAppointmentButton({onBookAppointment}: headerAppointmentButtonProps) {
  return (
    <div>
      <button
      className = "rounded-full bg-rose-300 px-9 py-4 font-gothic text-sm font-bold translate-y-[-6px] button-animation cursor-pointer"
      onClick={onBookAppointment}>
        Book Now
      </button>
    </div>
  );
}
