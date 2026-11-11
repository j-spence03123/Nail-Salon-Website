

type LocationSelectionProps = {
    locations: { id: string; name: string }[]
    selectedLocation: string
    onSelect: (location: string) => void;
}

export function LocationSelection({
    locations,
    selectedLocation,
    onSelect,
}: LocationSelectionProps) {
  return (
     <div className="flex flex-col  px-6 py-4 gap-2">
        <span className="font-cormamont">Location</span>
        <select
            className="rounded-lg border border-stone-300 bg-white px-4 py-3 font-gothic text-base text-bold opacity-80 text-neutral-500"
            value={selectedLocation}
            onChange={(event) => onSelect(event.currentTarget.value)}
        >
            <option value="" disabled hidden>Choose a Location</option>
            {locations.map((location) => (
                <option key={location.id} value={location.id} className="font-gothic rounded-lg animate-drop-in">
                    {location.name}
                </option>
            ))}
        </select>
    </div>
  );
}
