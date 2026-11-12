import { BackButton } from './backButton'

type ServiceSelectionProps = {
    services: { id: string; name: string }[]
    selectedService: string
    onSelect: (service: string) => void;
    onBack: () => void
}

export function ServiceSelection({
    services,
    selectedService,
    onSelect,
    onBack,
}: ServiceSelectionProps) {
  return (
     <div className="flex flex-col  px-6 py-4 gap-2">
        <div className="mb-4 flex items-center justify-between gap-4">
            <h3 className='mt-3 font-cormamont text-4xl text-stone-900 '>Choose a service</h3>
            <BackButton onBackButton={onBack} />
        </div>
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
