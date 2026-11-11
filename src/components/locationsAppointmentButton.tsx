type locationsAppointmentButtonProps = {
  onBookAppointment: () => void;
};

export function locationsAppointmentButton({onBookAppointment}: locationsAppointmentButtonProps) {
  return (
    <div>
      <button
      className = "rounded-full bg-black px-9 py-4 w-full font-gothic text-sm font-bold translate-y-[-6px] button-animation-locations cursor-pointer animate-rise-fade-in"
      onClick={onBookAppointment}>
        Book Now   ↗
      </button>
    </div>
  );
}
