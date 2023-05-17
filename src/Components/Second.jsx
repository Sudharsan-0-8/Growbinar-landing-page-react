
function Second({ className: classes }) {
    return (
        <div className={`${classes} container mx-auto flex flex-col md:flex-row h-[100vh]`}>
            <div className='flex-[5] flex flex-col items-center justify-center'>
                <div className='w-96 text-center md:text-left mx-auto'>
                    <h2 className='text-[40px] md:text-[50px] font-bold'>
                        It was never this 
                        <span className='text-gbviolet'>{' '}Easy</span>
                    </h2>
                    <p className='md:w-80 text-xl font-semibold mt-3'>
                        Match with your mentor based on your Goal and just get started to the journey of your growth
                    </p>
                    <button className='bg-gradient-to-tr from-gbviolet to-gbblue py-2 px-6 rounded-xl font-bold text-xl text-white mt-5'>
                        Get Started
                    </button>
                </div>
            </div>
            <div className='flex-[7] flex justify-center items-center'>
                <img src={'src\\assets\\group.png'}
                    className='h-[600px] w-[800px]'
                />
                <div className='hidden md:block h-96 w-96 absolute'>
                    <div className='absolute -top-24 -left-24 bg-gbviolet/30 rounded-full blur-2xl z-[-999] h-96 w-96'></div>
                    <div className='absolute -bottom-24 -right-24 bg-gbblue/30 rounded-full blur-2xl z-[-999] h-96 w-96'></div>
                </div>
                
            </div>
        </div>
    )
}

export default Second;