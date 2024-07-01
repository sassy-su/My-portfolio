import React from "react";
import './works.css';
import portfolio1 from '../../assets/img/jump.png';
import portfolio2 from '../../assets/img/empty.png';
import portfolio3 from '../../assets/img/school.png';
import portfolio4 from '../../assets/img/search.png';
// import portfolio5 from '../../assets/img/trophy.png';
// import portfolio6 from '../../assets/img/workplace.png';


const Works=() => {
    return (
        <section id="works">
            <div className="container-center">
            <h2 className="workstitle">My Portfolio</h2>
                <span className="worksdesc">I take Pride in paying attention to the smallest detail and making sure that my work  is pixel perfect.I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
                </div>
                    <div className="worksImgs">
                        <img src={portfolio1} alt="portfolio1" className="worksImg"/>
                        <img src={portfolio2} alt="portfolio2" className="worksImg"/>
                        <img src={portfolio3} alt="portfolio3" className="worksImg"/>
                 {/* <img src={portfolio4} alt="portfolio4" className="worksImg"/> */}
                 {/* <img src={portfolio5} alt="portfolio5" className="worksImg"/> */}
                  {/* <img src={portfolio6} alt="portfolio6" className="worksImg"/>  */}
                 </div>
        
        <div className="work-btn-container">
        <button className="workBtn">See more</button>
        </div>
        </section>

        
        
    )
}

export default Works
    

        
