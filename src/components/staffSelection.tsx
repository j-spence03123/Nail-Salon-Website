

type StaffSelectionProps = {
    members: string[];
    selectedMember: string;
    onSelect: (members: string) => void;
}

export function StaffSelection({
    members,
    selectedMember,
    onSelect,
}: StaffSelectionProps) {
  return (
     <label className="flex flex-col gap-2">
        <span>Service</span>
        <select
            className="rounded-lg border border-stone-300 bg-white px-4 py-3 font-gothic text-base tracking-[0.2em] text-bold opacity-80 text-neutral-500"
            value={selectedMember}
            onChange={(event) => onSelect(event.currentTarget.value)}
        >
            <option value="" disabled hidden>Choose a professional</option>
            {members.map((members) => (
                <option key={members} value={members}>
                    {members}
                </option>
            ))}
        </select>
    </label>
  );
}
