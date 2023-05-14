import Logo from '../assets/M1C.jpg';
import Companies from './Companies';
import Cardimg from  '../assets/M1.jpg';
function MentorCard({ className:classes }) {
    return (
        <div className={`${classes} group h-fit w-fit relative`}>
                        <img src={Cardimg}
                            className="z-10 rounded-xl"
                        />
                    <div className="hidden group-hover:block h-fit w-full pt-4 pb-2 bg-white absolute bottom-0 z-30 rounded-xl">
                        <h1 className="text-center text-xl font-bold">
                            Raamanujan
                        </h1>
                        
                        <img src={Logo} 
                             className='mx-auto h-16'
                        />
                    </div>
        </div>
    )
}

export default MentorCard;