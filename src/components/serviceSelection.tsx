

type ServiceSelectionProps = {
    services: string[];
    selectedService: string;
    onSelect: (service: string) => void;
}

export function ServiceSelection({
    services,
    selectedService,
    onSelect,
}: ServiceSelectionProps) {
  return (
     <label className="flex flex-col gap-2">
        <span>Service</span>
        <select
            className="rounded-lg border border-stone-300 bg-white px-4 py-3 font-gothic text-base tracking-[0.2em] text-bold opacity-80 text-neutral-500"
            value={selectedService}
            onChange={(event) => onSelect(event.currentTarget.value)}
        >
            <option value="" disabled hidden>Choose a service</option>
            {services.map((service) => (
                <option key={service} value={service}>
                    {service}
                </option>
            ))}
        </select>
    </label>
  );
}
