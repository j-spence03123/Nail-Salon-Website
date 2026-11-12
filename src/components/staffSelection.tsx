import { BackButton } from "./backButton";

type StaffSelectionProps = {
    members: { id: string; name: string }[]
    selectedMember: string;
    onSelect: (member: string) => void;
    onBack: () => void
}

export function StaffSelection({
    members,
    selectedMember,
    onSelect,
    onBack,
}: StaffSelectionProps) {
  return (
     <label className="flex font-cormamont px-6 py-4 flex-col gap-2">
        
        <div className="mb-4 flex items-center justify-between gap-4">
            <h3 className="mt-3 font-cormamont text-4xl text-stone-900 ">Choose a professional</h3>
            <BackButton onBackButton={onBack} />
        </div>
        
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
