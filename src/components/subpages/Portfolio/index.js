
// IMPORTS
import Project from './Project';
import projects from '../../../assets/project-imgs';


// COMPONENT
function Portfolio(){
    return (
        <div className='d-flex flex-wrap justify-content-around'>
            {projects.map(({name, src, languages, desc, githubLink, deployedLink = '', bkgdPosY = ''}, index) =>
                <Project
                    name={name}
                    src={src}
                    languages={languages}
                    desc={desc}
                    githubLink={githubLink}
                    deployedLink={deployedLink}
                    bkgdPosY={bkgdPosY}
                    tabIndex={index + 1}
                    key={name}
                />
            )}    
        </div>
    );
}


// EXPORT
export default Portfolio;