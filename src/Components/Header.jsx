import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Grow_logo_full.png";


function Header() {
    const [isSideBarVisible, setSideBarVisiblity] = useState(false);
    const navigate=useNavigate();

    return (
        <div className="container mx-auto top-0">
            <div className="mx-auto flex flex-row justify-between lg:justify-between items-center">
                <div className="flex-[1.5] flex flex-row justify-start items-center">
                    <img src={logo} alt="Growbinar Logo" 
                        className="h-36 flex-shrink-0"
                    />
                </div>
                <div className="flex lg:flex-[3.5] flex-row md:justify-center lg:justify-center xl:justify-around  items-center">
                    <div className="hidden lg:flex outline-none h-fit w-64 bg-white border-2 border-slate-400 focus:ring-2 ring-gbviolet ring-offset-2 target:border-gbviolet rounded-xl">
                        <input type="text" placeholder="Search event, course, mentor" 
                            className="py-1 px-3 rounded-xl [outline:none]"
                        />
                    </div>
                    <nav className="xl:flex hidden flex-row justify-between space-x-6">
                        <a className="text-xl hover:font-bold active:font-bold cursor-pointer">Home</a>
                        <a className="text-xl hover:font-bold cursor-pointer" onClick={()=>navigate('/intern')}>Internships</a>
                        <a className="text-xl hover:font-bold cursor-pointer">Be a Mentor</a>
                    </nav>
                    <div className="xl:flex hidden flex-row border-2 border-slate-400 rounded-full w-fit h-10">
                        <button className="px-10 font-bold text-gbviolet">
                            login
                        </button>
                        <div className="px-10 text-white font-bold bg-gbviolet rounded-xl text-center py-1.5 [cursor:pointer] rounded-xl">
                            signup
                        </div>
                    </div>
                </div>
                <div className="md:flex-1 flex flex-row xl:hidden justify-end">
                    <div className=" text-center py-4 space-y-2 [cursor:pointer]"
                            onClick={()=>{
                                setSideBarVisiblity(true);
                            }}
                    >
                        <div className="h-1 w-8 bg-gbviolet"></div>
                        <div className="h-1 w-8 bg-gbviolet"></div>
                        <div className="h-1 w-8 bg-gbviolet"></div>
                    </div>
                </div>
                <div className={`${isSideBarVisible?'visible':'hidden'} fixed flex flex-col w-80 h-[100%] bg-white shadow-2xl shadow-black z-50 top-0 right-0 p-10 space-y-6`}>
                    <div className="self-end [cursor:pointer]"
                        onClick={()=>{
                            setSideBarVisiblity(false);  
                        }}
                    >
                        <div className="absolute h-1 w-8 rotate-45 bg-gbviolet"></div>
                        <div className="absolute h-1 w-8 -rotate-45 bg-gbviolet"></div>
                    </div>
                    <div className="text-center py-4 hover:font-bold">Home</div>
                    <div className="text-center py-4 hover:font-bold">Events</div>
                    <div className="text-center py-4 hover:font-bold">Be a Mentor</div>
                    <div className="self-center py-4 text-center w-24 bg-gbviolet rounded-3xl text-white font-bold">login</div>
                    <div className="self-center py-4 text-center w-24 bg-gbviolet rounded-3xl text-white font-bold">signup</div>

                </div>
            </div>
        </div>
     );
}

export default Header;