
// IMPORTS
import Project from './Project';
import projects from '../../../assets/project-imgs';


// COMPONENT
function Portfolio(){
    return (
        <div className='d-flex flex-wrap justify-content-around'>
            {projects.map(({name, src, languages, link, bkgdPosY = ''}) =>
                <Project
                    name={name}
                    src={src}
                    languages={languages}
                    link={link}
                    bkgdPosY={bkgdPosY}
                    key={name}
                />
            )}    
        </div>
    );
}


// EXPORT
export default Portfolio;