import Arrays from './Arrays.js'
import '../Css/marq.css'
function LastPage({className:classes}){
    return(
        <div>
            <div className="Container">
                <h3 className="text-black-600 text-center" style={{fontSize:"45px"}} ><strong>From Skeptics to Success - <span className="text-gbviolet">Hear it from 
                them</span></strong></h3>

            <br/><br/>
                
                <p className="text-black-400 text-center" 
                style={{fontSize:"20px", fontWeight:"110px"}}>It is a long established fact that a reader will be distracted by the 
                readable content of a page when looking at its layout. The point of</p>   
            </div>
            
            <br/>
            <br/>
            
            
            <div className="marquee-wrapper space-y-6 flex content-center">
                <div className="marquee">
                {
                    Arrays.map(s =>(
                        <div className="mx-5 box-content h-50 w-150 p-2 border-2 border-dashed border-2 border-indigo-600 rounded-xl" >
                        <img src={s.image_link} className="object-contain h-40 w-40 float-left p-2"/>
                        <h3 className="content-end [overflow:none]">{s.name}</h3>
                        <h3>{s.data}</h3>
                        </div>
                    ))
                }
                </div>
            </div>
            <br/>
            <br/>
            <div className="text-gbviolet text-3xl font-bold text-center justify-center">
                <p> 
                Level up your career with our mentorship platform
                </p>
                <p>
                -where inspiration meets achievement.Join now
                </p>
                <p>
                and let's make your dreams a reality
                </p>
            </div>
        </div>
    );
}
export default LastPage;