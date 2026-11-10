
import { useNavigate } from 'react-router'
import nailVarnish from '../images/nail-varnish.jpg'


export default function AboutUs() {
    const navigate = useNavigate();
    return (
        <div className="flex bg-white w-full min-h-screen justify-center pt-18 items-center">
            <div className="flex flex-col">
                <h1 className="font-cormamont text-6xl font-medium text-black my-6 tracking-tighter px-10 leading-[0.9]">High quality products, guaranteed </h1>
                <p className="text-left space-y-4 text-neutral-500 mb-8 text-black font-gothic text-lg leading-relaxed max-w-3xl text-bold opacity-100 text-center px-10">At Bote Beauty, it's not just an ordinary salon. We pride ourselves on top quality products to ensure complete customer satisfaction. We use trusted brands such as Gelish, O.P.I and Shellac.
                Our staff are carefully selected to ensure a qualified and customer-oriented workforce. With competitive and affordable prices across all our locations, we look forward to welcoming you.</p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/5] w-150">
                <img src={nailVarnish} alt="Nail Polish" className="w-full h-full object-cover" />
            </div>
        </div>
    );
}