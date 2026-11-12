import ServiceCard from '../components/servicesCard.tsx';
import nailTreatmentsImg from '../images/nail-treatments.jpg'
import manicure from '../images/manicure.jpg'
import makeup from '../images/makeup.jpg'

export default function Services() {
    return (
        <section id = "locations" className="py-75 min-w-full min-h-full ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 animate-rise-fade-in">
                <p className="font-gothic text-base uppercase text-bold text-stone-500 animate-rise-fade-in">
                    WHAT WE OFFER
                </p>

                <h2 className="mt-3 font-cormamont text-4xl text-stone-900 animate-rise-fade-in">
                    Our Services
                </h2>
            </div>
            <div className="flex flex-row justify-center">
                <div className="flex flex-col max-w-7xl mx-3">
                    <ServiceCard
                        serviceName = "Nail Care"
                        serviceDescription= "Expert filing, shaping, cuticle care and an extensive range of lacquer shades and gel finishes."
                        serviceImg = {nailTreatmentsImg}
                    />
                </div>
                <div className="flex flex-col max-w-7xl mx-3">
                    <ServiceCard
                        serviceName = "Manicure"
                        serviceDescription= "Complete holistic treatment for a freshly manicured look and beautifully pedicured feet."
                        serviceImg = {manicure}
                    />
                </div>
                <div className="flex flex-col max-w-7xl mx-3">
                    <ServiceCard
                        serviceName = "Makeup"
                        serviceDescription= "The opportunity to create a look thats uniquely you. Your therapist works with you to guide you to the products that are right for you."
                        serviceImg = {makeup}
                    />
                </div>
            </div>
        </section>
    );
}