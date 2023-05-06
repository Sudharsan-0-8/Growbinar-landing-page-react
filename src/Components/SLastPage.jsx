import image from '../assets/Reward.png';
import casual from '../assets/image3d.png';
function SLastPage(){
    return(
        <>
            <p className="font-bold text-center p-3 text-2xl">Filter Mentors by your objective or Field</p>
            <br/>
            <br/>
            <div>
                <div className="mx:auto flex flex-row space-x-5 justify-center">
                    <button className="text-gbviolet font-medium ring-2 ring-gbviolet
                    hover:bg-gbviolet focus:text-white rounded-full p-3">UI/UX</button>
                    <button className="text-gbviolet font-medium  ring-2 ring-gbviolet rounded-full p-3">Front-end Dev</button>
                    <button className="text-gbviolet font-medium  ring-2 ring-gbviolet rounded-full p-3">Data Management</button>
                    <button className="text-gbviolet font-medium  ring-2 ring-gbviolet rounded-full p-3">Back-end Dev</button>
                    <button className="text-gbviolet font-medium  ring-2 ring-gbviolet rounded-full p-3">Data Science</button>
                    <button className="text-gbviolet font-medium  ring-2 ring-gbviolet rounded-full p-3">Blockchain</button>
                </div>
                <br/>
                <div className="mx:auto flex flex-row space-x-5 justify-center">
                    <button className="text-gbviolet font-medium  ring-2 ring-gbviolet rounded-full p-3">Building Brand</button>
                    <button className="text-gbviolet font-medium  ring-2 ring-gbviolet rounded-full p-3">Human Res..</button>
                    <button className="text-gbviolet font-medium  ring-2 ring-gbviolet rounded-full p-3">Operations</button>
                    <button className="text-gbviolet font-medium  ring-2 ring-gbviolet rounded-full p-3">Entrepreneur</button>
                    <button className="bg-gbviolet text-white font-bold  font-medium  
                    ring-2 ring-white rounded-full p-3">Search More</button>
                </div>
                <br/>
                <br/>
                <br/>
                <div className="flex flex-row justify-center lg:justify-between">
                    <div className="text-left mx-20 justify-center">
                        <p className="font-bold text-2xl">Unlock achievements and rise up the ranks</p> 
                        <p className="font-bold text-2xl">with our <span className="text-gborange">rewards program.</span></p>
                        <br/>
                        <p className='text-lg font-bold font-medium text-black'>Gain recognition for your hardwork and dedication with our</p>
                        <p className='text-lg font-bold font-medium text-black'>innovative rewards system.Climb the ranks,achieve your goals.</p>
                    </div>
                    <div className="h-96 w-400 rounded-l-lg bg-lightorange bg-cover">
                        <div>
                            <img src={image} className='mr-4 h-100 w-200'/>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div className='mx:auto flex flex-row justify-start'>
                    <div className='h-48 w-400 rounded-r-lg bg-gbpink '>
                        <div>
                            <img src={casual} className='h-64 mr-4'/>
                        </div>
                    </div>
                    <div className='justify-end'>
                        <p className='font-bold text-2xl'>Empowering students with information-explore</p>
                        <p className='font-bold text-2xl'>ongoing <span className='text-gbpink'>Government schemes</span>.</p>
                        <br/>
                        <p className='text-lg text-right font-medium font-bold text-black'>
                            our comprehensive guide to goverment-funded student schemes
                        </p>
                        <p className='text-lg text-right font-medium font-bold text-black'>
                            will help you access the support you need to achieve your goals.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SLastPage;