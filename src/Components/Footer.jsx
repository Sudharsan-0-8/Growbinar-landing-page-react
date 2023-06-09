import logo from '../assets/Grow_logo_full.png';
import { AiFillInstagram, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';

function Footer({ className:classes }) {
    return (
        <footer className={`${classes} border-t-2 border-solid border-gbviolet`}>
          <div className="md:object-left-bottom  p-20 pb-10 pt-10">      
          <span className='inline-block'>  
            <img src={logo} className="h-24 " alt="Grow_logo"/>
            </span>
                <div className="">
                    <div className="md:flex lg:flex-row space-y-8 lg:space-y-0 flex-col justify-between">
                     <div className="flex-1 text-black-200 text-center lg:text-left justify-center text-xl font-medium">
                      <p>Growbinar is a mentorhip platform to</p>
                      <p>efficiently connect Mentors which enjoy</p>
                      <p>helping people mentees mentees</p>
                     </div>
                      <div className="flex-1 flex flex-col space-y-6">
                       <div className="flex xl:flex-row flex-col lg:justify-center items-center xl:space-x-6 space-y-6 lg:space-y-0 text-gbviolet font-bold">
                          <a className="text-xl hover:font-bold cursor-pointer">Be a Mentor</a>
                          <a className="text-xl hover:font-bold cursor-pointer">Careers</a>
                          <a className="text-xl hover:font-bold cursor-pointer">About</a>
                        </div>
                        <div className="text-center">
                          Copyright © Growbinar 2023. All Rights Reserved.
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col space-y-6">
                        <div className="flex flex-row justify-center lg:justify-end space-x-10">
                          <AiFillInstagram className="text-3xl"  onClick={() => window.open('https://www.instagram.com/growbinar/')}/>
                          <AiFillLinkedin className="text-3xl" onClick={() => window.open('https://www.linkedin.com/company/growbinar/')}/>
                          <AiFillFacebook className="text-3xl" href='#' onClick={() => window.open('/')}/>
                        </div>
                        <div className="flex lg:flex-row flex-col gap-[10px] justify-end items-center">
                          <a href="" className="underline">Contact us</a>
                          <a href="" className="underline">Privacy policy</a>
                          <a href="" className="underline">Terms of use</a>
                        </div>
                      </div>
                 </div>
            </div>
          </div>
        </footer>
    )
}

export default Footer;