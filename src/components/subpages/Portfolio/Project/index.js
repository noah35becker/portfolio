
// IMPORT
import './index.css';


// COMPONENT
function Project({name, src, languages, link, bkgdPosY}){
    return (
        <div className="project mx-sm-3 mb-4 d-flex flex-column align-items-center">
            <a className='hover-opacity' href={src} target='_blank' rel='noreferrer'>
                <h3>{name}</h3>
            </a>

            <h5 className="languages fs-6 fst-italic">
                {languages}
            </h5>

            <a className='hover-opacity' href={link} target='_blank' rel='noreferrer' aria-label={name}>
                <div className='img' style={{backgroundImage: `url(${src})`, backgroundPositionY: bkgdPosY}}></div>
            </a>
        </div>
    );
}


// EXPORT
export default Project;