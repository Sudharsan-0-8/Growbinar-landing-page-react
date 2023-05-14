import { useState } from "react";
import MentorCard from "./MentorCard";
import Companies from "./Companies";

function MentorCards({ className:classes }) {
    const [viewMore, setViewMoreStatus] = useState(false);

    return (
        <div className={`${classes} container mx-auto text-center p-8  bg-gblightblue/10`}>
            <h1 className="text-center text-[40px] font-bold">
                Get advice from <span className="text-gbviolet">Top People in the field.</span>
            </h1>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center gap-y-8">
                {
                    Companies.map((value,index)=>(
                      
                        <MentorCard Name={Companies[index].Name} Cardimg={Companies[index].Cardimg} Logo={Companies[index].Logo}
                        Role={Companies[index].Role}/>
                       
                    ))
                }
                {
                    viewMore ? (
                        <>
                            <MentorCard />
                            <MentorCard />
                            <MentorCard />
                            <MentorCard />
                            <MentorCard />
                            <MentorCard />
                            <MentorCard />
                        </>
                    ) : ''
                }
                
            </div>
            <button disabled={true} className="mx-auto px-6 py-2 bg-white font-bold rounded-md mt-8" 
                    onClick={()=>setViewMoreStatus(!viewMore)}
                >
                    { viewMore ? 'view less' : 'view more' }
            </button>
        </div>
    )
}

export default MentorCards;