import React from "react";
import './Skills.css';
import UIdesigner from '../../assets/img/designer.png';
import Webdesigner from '../../assets/img/web.png';
import Appdesigner from '../../assets/img/app.png';
const Skills=() => {
    return (
        <section id='Skills'>
            <span className="Skilltitle">What I Do</span>
            <span className="Skilldesc"> I am skilled and passionate web designer with experience in creating visually appealing and  user-friendly Website.I have a strong understanding of  design and a keen eye for detail.I am porficient in HTML,CSS and JavaScript as well as design software  such as Adobe Photoshop and Illustrator</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIdesigner} alt="UIdesigner" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p> A visual of brightly colored abstract shapes appears at the top of her homepage. The motif repeats throughout her portfolio, helping to define a distinct personal brand.</p>
                    </div>
                </div>
            </div>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={Webdesigner} alt="Webdesigner" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Website Designer</h2>
                        <p>A discreet hover effect on each image reveals the name of the project, while keeping text to a minimum. To make a portfolio in a similar style, head over to this template.</p>
                    </div>
                </div>
            </div>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={Appdesigner} alt="Appdesigner" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>App Designer</h2>
                        <p>MealMaster is a comprehensive app designed to help users discover new recipes, plan their meals, and manage their grocery lists. The app offers personalized recipe recommendations, meal planning tools, and an integrated shopping list feature to make cooking and meal prep easier and more enjoyable.</p>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Skills