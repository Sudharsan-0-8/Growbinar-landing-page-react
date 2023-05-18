import CompaniesLogo from './CompaniesLogo';
function TopCompanies() {
    return (
    <div className='flex flex-col h-[160px] bg-lightgrey'>
        <h1 className='text-center text-greyheader font-bold text-[24px] py-5'>Mentors from Top Organization</h1>
        <div className="flex flex-row gap-[20px] companies-container">
        {
            CompaniesLogo.map((obj) =>(
                <img src={obj.Logo} alt={obj.Name} className='object-contain h-[50px] w-[206px]'/>
          
            ))
        }
        </div>
    </div>
    )
}

export default TopCompanies;