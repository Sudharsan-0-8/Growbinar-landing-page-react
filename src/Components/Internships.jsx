import '../Css/internships.css';
function Internships(){
    return (
        <div>
            <div className="internship-card"><a href="https://forms.gle/Tc4APEywvd3TS9DA6"><img src="./src/assets/UI-UX.jpg" alt="UI-UX Design"/></a>
    <span className="info">Click to <span className="bold-text">Apply Now !!!</span></span></div>
    <div className="internship-card"><a href="https://forms.gle/1RW7GurQXoKz2Yk28"><img src="./src/assets/Full Stack.jpg" alt="Full Stack Development"/></a>
        <span className="info">Click to <span  className="bold-text">Apply Now !!!</span></span></div>
    <div className="internship-card"><a href="https://forms.gle/tvynLGAdhifsNiTL6"><img src="./src/assets/Application Development.jpg" alt="Application Development"/></a>
        <span class="info">Click to <span  className="bold-text">Apply Now !!!</span></span></div>
        </div>
    )
}
export default Internships;