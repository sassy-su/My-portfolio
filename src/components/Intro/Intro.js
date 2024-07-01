import React from "react";
import './Intro.css';
import bg from '../../assets/img/sq.png';
import btnImg from '../../assets/img/hiring.png';
import {Link} from 'react-scroll';
const Intro = () => {
    return (
        <div id="Intro">
            <div className="IntroContent">
                <span className="hello">Hello,</span>
                <span className="IntroText">I'm<span className="IntroName"> Shashank</span> <br/>Website  Designer</span>
                <p className="IntroPara">I am a skilled web Designer with experience in creating  proficiency in HTML, CSS, JavaScript .</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire " className="btnImg"/>Hire me</button></Link>

            </div>
            <img src={bg} alt='Profile' className='bg'/>
            

        </div>
    )
}
    

export default Intro