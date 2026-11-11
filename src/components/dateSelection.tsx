
import "cally";

type AppointmentSelectionProps = {
    dates: string[];
    selectedDate: string;
    onSelect: (dates: string) => void;
}

export function AppointmentSelection({
    members,
    selectedMember,
    onSelect,
}: AppointmentSelectionProps) {
  return (
    
     <label className="flex flex-col gap-2">
        <span>Service</span>
        <select
            className="rounded-lg border border-stone-300 bg-white px-4 py-3 font-gothic text-base tracking-[0.2em] text-bold opacity-80 text-neutral-500"
            value={selectedMember}
            onChange={(event) => onSelect(event.currentTarget.value)}
        >
            <calendar-date>
            <calendar-month></calendar-month>
            </calendar-date>
        </select>
    </label>
  );
}
