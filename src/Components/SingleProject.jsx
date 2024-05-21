import { useState } from "react";

import './SingleProject.css'
import arrowImage from '../assets/Arrow.svg'
import { Link } from "react-router-dom";

export default function SingleProjecto({title, type, image, id}){
    const [isShown, setIsShown] = useState(false);
    return (
        <section className="singleProject">
            <Link className="projectTitle" to={id}>
                <div className="project-title-flex">
                    <p>{type}</p>
                    <div className="project-title-connection">
                        <h2 onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>{title}</h2>
                        <img className="single-project-arrow" src={arrowImage} />
                    </div>
                </div>
                <img className={`singleProjectImg ${isShown === true ? "active" : ""}`} src={image} alt={title}/>
            </Link>
            
        </section>
    )
}