function MentorCard({ className:classes, Cardimg,Logo,Name,Role}) {
    return (
        <div className={`${classes} group h-fit w-fit relative`}>
                        <img src={Cardimg}
                            className="z-10 rounded-xl h-[300px] w-[280px]" 
                        />
                    <div className="hidden group-hover:block h-fit w-full pt-4 pb-2 bg-white absolute bottom-0 z-30 rounded-xl">
                        <h1 className="text-center text-2xl font-bold">
                            {Name}
                        </h1>
                        
                        <h2 className='text-center font-normal text-xl'>
                            {Role}
                        </h2>

                        <img src={Logo} 
                             className='mx-auto h-12'
                        />
                    </div>
                </div>
    )
}

export default MentorCard;
