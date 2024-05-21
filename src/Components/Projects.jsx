
import SingleProject from './SingleProject.jsx'
import { projectContent } from '../Data.js'

export default function Projects() {
    
    
    return (
        <section className='projects'>
            {projectContent.map((project) =>
                <SingleProject key={project.title} {...project} />
            )}
        </section>
    )

}