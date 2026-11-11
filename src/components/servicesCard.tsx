type ServiceCardProps = {
    serviceName: string;
    serviceDescription: string;
    serviceImg: string;
};



export default function ServiceCard({
    serviceName,
    serviceDescription,
    serviceImg,
}: ServiceCardProps) {
    return(
        <div className="flex flex-row justify-center my-10 animate-rise-fade-in">
            <div className="flex flex-col justify-end box-border rounded-2xl h-125 w-100 border-1 bg-cover bg-center border-stone-300 transition-shadow duration-300 ease-in-out hover:shadow-2xl " 
                style={{ backgroundImage: `url("${serviceImg}")` }}>
                <p className="text-left px-6 text-white font-cormamont text-3xl opacity-100 animate-rise-fade-in mb-2">{serviceName}</p>
                <h1 className="text-left text-white font-gothic text-sm opacity-100 animate-rise-fade-in px-6 mb-6">{serviceDescription}</h1>
            </div>
        </div>
    )
}
