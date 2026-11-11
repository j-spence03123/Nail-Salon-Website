
import { useNavigate } from 'react-router'
import nailVarnish from '../images/nail-varnish.jpg'
import fenty from '../images/fenty.png'
import tilbury from '../images/charlotte-tilbury.png'
import too_faced from '../images/too_faced.png'

export default function AboutUs() {
    const navigate = useNavigate();
    return (
        <div className="flex bg-white w-full min-h-screen justify-center pt-18 items-center">
            <div className="flex flex-col px-10 animate-rise-fade-in ">
                <p className="text-left text-neutral-500 font-gothic text-base px-10 opacity-80">ABOUT US</p>
                <h1 className="font-cormamont text-6xl font-medium text-black my-6 tracking-tighter px-10 leading-[0.9]">High quality products, guaranteed </h1>
                <p className="text-left space-y-4 text-stone-900 mb-8 text-black font-gothic text-lg leading-relaxed max-w-3xl text-bold text-center px-10">At Bote Beauty, it's not just an ordinary salon. We pride ourselves on top quality products to ensure complete customer satisfaction. We use trusted brands such as Gelish, O.P.I and Shellac.
                Our staff are carefully selected to ensure a qualified and customer-oriented workforce. With competitive and affordable prices across all our locations, we look forward to welcoming you.</p>
                <h2 className="text-left text-neutral-500 font-gothic text-base px-10 opacity-80 my-5">OUR PARTNERS</h2>
                <div className="flex flex-row rounded-base gap-8">
                    <div className="aspect-[16/9] w-50 ml-10 overflow-hidden ">
                        <img src={fenty} alt = "fenty" className="w-full h-full object-cover"/>
                    </div>
                    <div className="aspect-[16/9] w-50 overflow-hidden ">
                        <img src={tilbury} alt = "tilbury" className="w-full h-full object-cover"/>
                    </div>
                    <div className="aspect-[16/9] w-50 overflow-hidden ">
                        <img src={too_faced} alt = "too_faced" className="w-full h-full object-cover"/>
                    </div>
                </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md/50 aspect-[4/5] w-150 animate-rise-fade-in ">
                <img src={nailVarnish} alt="Nail Polish" className="w-full h-full object-cover" />
            </div>
        </div>
    );
}