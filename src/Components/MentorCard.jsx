import Logo from '../assets/Grow_logo_full.png';
import Cardimg from  '../assets/cardimg.jpg';

function MentorCard({ className:classes }) {
    return (
        <div className={`${classes} group h-fit w-fit relative`}>
            <img src={Cardimg}
                className="-z-10 rounded-xl"
            />
            <div className="hidden group-hover:block h-fit w-full pt-4 pb-2 bg-white absolute bottom-0 z-30 rounded-xl">
                <h1 className="text-center text-xl font-bold">
                    Sundar Pichai
                </h1>
                <p className="text-center text-sm">
                    Software Engineer
                </p>
                <img src={Logo} 
                    className='mx-auto h-16'
                />
            </div>
        </div>
    )
}

export default MentorCard;