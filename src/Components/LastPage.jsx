import Arrays from './Arrays.js'
import '../Css/marq.css'
function LastPage({className:classes}){
    return(
        <div className={`${classes} container mx-auto`} >
            <div className="container">
                <h3 className="text-black-600 text-center" style={{fontSize:"45px"}} ><strong>From Skeptics to Success - <span className="text-gbviolet">Hear it from 
                them</span></strong></h3>

            <br/><br/>
                
                <p className="text-black-400 font-bold text-center" 
                style={{fontSize:"20px", fontWeight:"110px"}}>It is a long established fact that a reader will be distracted by the 
                readable content of a page when looking at its layout.</p>   
            </div>
            
            <br/>
            <br/>
            
            
            <div className="marquee-wrapper space-y-6 flex content-center">
                <div className="marquee">
                {
                    Arrays.map(s =>(
                        <div className="flex flex-col items-center w-[500px] h-[200px] mx-5 box-content p-4 border-2 border-dashed border-indigo-600 rounded-xl">
                            <div className='flex flex-row items-center'>
                                <img src={s.image_link} className="justify-center object-contain h-[100px] w-[100px] float-left p-2"/>
                                
                                <h3 className="content-end [overflow:none] font-bold text-gbviolet align-top">{s.name+","}<h3 className='text-black'>{s.role}</h3></h3>
                            </div>
                            <h3 className='italic font-semibold text-md '>{s.data}</h3>
                        </div>
                    ))
                }
                </div>
            </div>
            <br/>
            <br/>
            <div className="text-gbviolet text-3xl font-bold text-center justify-center">
                <p> 
                Level up your career with our mentorship platform,
                </p>
                <p>
                where inspiration meets achievement. Join now
                </p>
                <p>
                and let's make your dreams a reality
                </p>
            </div>
        </div>
    );
}
export default LastPage;