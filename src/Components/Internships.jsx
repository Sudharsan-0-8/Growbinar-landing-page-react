import '../Css/internships.css';
import UIUX from '../assets/UI-UX.jpg';
import FullStack from '../assets/Full Stack.jpg';
import AppDevelopment from '../assets/Application Development.jpg';
function Internships(){
    return (
        <div>
            <div className="internship-card"><a href="https://forms.gle/Tc4APEywvd3TS9DA6"><img src={UIUX} alt="UI-UX Design"/></a>
    <span className="info">Click to <span className="bold-text">Apply Now !!!</span></span></div>
    <div className="internship-card"><a href="https://forms.gle/1RW7GurQXoKz2Yk28"><img src={FullStack} alt="Full Stack Development"/></a>
        <span className="info">Click to <span  className="bold-text">Apply Now !!!</span></span></div>
    <div className="internship-card"><a href="https://forms.gle/tvynLGAdhifsNiTL6"><img src={AppDevelopment} alt="Application Development"/></a>
        <span class="info">Click to <span  className="bold-text">Apply Now !!!</span></span></div>
        </div>
    )
}
export default Internships;