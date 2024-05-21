import { Link } from "react-router-dom";

export default function ProjectBack(){
    return(
    <div className="header-back">
        <Link className='backButton' to={'..'}>
            <span className="material-symbols-outlined icon">arrow_back</span>
            Back
        </Link>
    </div>
    )
}