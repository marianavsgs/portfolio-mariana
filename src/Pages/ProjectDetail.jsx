import { useParams } from "react-router-dom"
import { projectContent } from "../Data"
import IntroSection from "../Components/IntroSection";
import ResearchSection from "../Components/ResearchSection";
import InfoSection from "../Components/InfoSection";
import SketchSection from "../Components/SketchSection";
import MocksSection from "../Components/MocksSection";
import ConclusionSection from "../Components/ConclusionSection";
import './Project.css'
import ProjectBack from "../Components/ProjectBack";



export default function ProjectDetailPage() {
    const params = useParams()


    const index = projectContent.findIndex((element) => element.id === params.projectId);


    if (index === -1) {
        return (<h1>Page not Found</h1>)
    }
    const project = projectContent[index]
    const details = project.details;

    return (
        <>
            <ProjectBack />
            {details.headerImg && <img className="headerImg" src={details.headerImg} />}
            <h2 className="project-title">{project.title}</h2>
            {details.overview && details.role &&
                <IntroSection overview={details.overview} role={details.role} />}

            {details.research &&
                <ResearchSection researchText={details.research.text} findings={details.research.findings} />}
            {details.customerJourney && 
                <InfoSection title="Customer Flow" text={details.customerJourney.text} img={details.customerJourney.img}/>}
            {details.flow &&
                <InfoSection title="Flow" text={details.flow.text} img={details.flow.img} />}
            {details.sketch && 
                <SketchSection title="Sketching" text={details.sketch.text} img={details.sketch.img}/>}
            {details.mockups && 
                <MocksSection title="High Fidelity Mockups" mockups={details.mockups} />}
            {details.conclusion && 
                <ConclusionSection text={details.conclusion}/>}
        </>
    )
}