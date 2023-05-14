import image from '../assets/Reward.png';
import casual from '../assets/image3d.png';
function SLastPage(){
    return(
        <div className='container mx-auto'>
            <p className="font-bold text-center p-3 text-2xl">Filter Mentors by your objective or Field</p>
            <br/>
            <br/>
            <div>
                <div className="mx-auto space-x-5 space-y-8 text-center">
                    <button className="text-gbviolet font-medium ring-2 ring-gbviolet hover:bg-gbviolet focus:text-white rounded-full p-3 inline">UI/UX</button>
                    <button className="text-gbviolet font-medium  ring-2 ring-gbviolet rounded-full p-3 inline">Front-end Dev</button>
                    <button className="text-gbviolet font-medium  ring-2 ring-gbviolet rounded-full p-3 inline">Data Management</button>
                    <button className="text-gbviolet font-medium  ring-2 ring-gbviolet rounded-full p-3 inline">Back-end Dev</button>
                    <button className="text-gbviolet font-medium  ring-2 ring-gbviolet rounded-full p-3 inline">Data Science</button>
                    <button className="text-gbviolet font-medium  ring-2 ring-gbviolet rounded-full p-3 inline">Blockchain</button>
                    <button className="text-gbviolet font-medium  ring-2 ring-gbviolet rounded-full p-3 inline">Building Brand</button>
                    <button className="text-gbviolet font-medium  ring-2 ring-gbviolet rounded-full p-3 inline">Human Res..</button>
                    <button className="text-gbviolet font-medium  ring-2 ring-gbviolet rounded-full p-3 inline">Operations</button>
                    <button className="text-gbviolet font-medium  ring-2 ring-gbviolet rounded-full p-3 inline">Entrepreneur</button>
                    <button className="bg-gbviolet text-white font-bold ring-2 ring-white rounded-full p-3 inline">Search More</button>
                </div>
                <br/>
                <br/>
                <br/>
                <div className="flex flex-row justify-center lg:justify-between">
                    <div className="flex-1 flex flex-col text-left mx-20 justify-center">
                        <p className="font-bold text-2xl text-center lg:text-left">Unlock achievements and rise up the ranks with our <span className="text-gborange">rewards program.</span></p> 
                        <br/>
                        <p className='text-lg font-bold text-black text-center lg:text-left'>Gain recognition for your hardwork and dedication with our innovative rewards system.Climb the ranks,achieve your goals.</p>
                    </div>
                    <div className="flex-1 hidden lg:flex justify-center items-center p-16 h-96 rounded-[12px]  bg-lightorange bg-cover">
                        <div className=''>
                            <img src={image} className='mr-4 h-100 w-200'/>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div className='mx:auto flex flex-row justify-between'>
                    <div className='hidden lg:flex flex-[1] justify-end p-10 h-96 rounded-[12px] bg-gbpink '>
                        <div>
                            <img src={casual} className='h-80 mr-4'/>
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col px-20 justify-center items-center text-left lg:text-center'>
                        <p className='font-bold text-2xl text-center lg:text-left'>Empowering students with information-explore ongoing <span className='text-gbpink'>Government schemes</span>.</p>
                        <br/>
                        <p className='text-lg font-medium text-black text-center lg:text-left'>
                            our comprehensive guide to goverment-funded student schemes will help you access the support you need to achieve your goals.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SLastPage;