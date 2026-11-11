

type ServiceSelectionProps = {
    services: { id: string; name: string }[]
    selectedService: string
    onSelect: (service: string) => void;
}

export function ServiceSelection({
    services,
    selectedService,
    onSelect,
}: ServiceSelectionProps) {
  return (
     <div className="flex flex-col  px-6 py-4 gap-2">
        <span className="font-cormamont">Service</span>
        <select
            className="rounded-lg border border-stone-300 bg-white px-4 py-3 font-gothic text-base text-bold opacity-80 text-neutral-500"
            value={selectedService}
            onChange={(event) => onSelect(event.currentTarget.value)}
        >
            <option value="" disabled hidden>Choose a service</option>
            {services.map((service) => (
                <option key={service.id} value={service.id} className="font-gothic rounded-lg animate-drop-in">
                    {service.name}
                </option>
            ))}
        </select>
    </div>
  );
}
