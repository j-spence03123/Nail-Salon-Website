

type StaffSelectionProps = {
    members: { id: string; name: string }[]
    selectedMember: string;
    onSelect: (member: string) => void;
}

export function StaffSelection({
    members,
    selectedMember,
    onSelect,
}: StaffSelectionProps) {
  return (
     <label className="flex font-cormamont px-6 py-4 flex-col gap-2">
        <span>Professional</span>
        <select
            className="rounded-lg border border-stone-300 bg-white px-4 py-3 font-gothic text-base text-bold opacity-80 text-neutral-500"
            value={selectedMember}
            onChange={(event) => onSelect(event.currentTarget.value)}
        >
            <option value="" disabled hidden>Choose a professional</option>
            {members.map((member) => (
                <option key={member.id} value={member.id}>
                    {member.name}
                </option>
            ))}
        </select>
    </label>
  );
}
