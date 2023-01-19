
// IMPORT
import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEarthAmericas} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import './index.css';



// COMPONENT
function Project({name, src, languages, desc, githubLink, deployedLink, bkgdPosY, tabIndex}){
    const [clicked, setClicked] = useState(false);


    function isFullyInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    
        );
    }


    function focusser(thisTabIndex){
        const project = document.querySelector(`.project[projectid="${thisTabIndex}"]`);
        const projectImgWrapper = document.querySelector(`.project-img-wrapper[tabindex="${thisTabIndex}"]`);
        projectImgWrapper.focus();

        if(!isFullyInViewport(projectImgWrapper))
            project.scrollIntoView();
    }


    return (
        <div projectid={tabIndex} className="project mx-sm-3 mb-5 d-flex flex-column align-items-center">
            <div className='project-title hover-opacity' target='_blank' rel='noreferrer' onClick={() => {setClicked(!clicked); focusser(tabIndex);}}>
                <h3>{name}</h3>
            </div>

            <h5 className="project-desc">
                {desc}
            </h5>

            <h5 className="project-languages fs-6 fst-italic">
                {languages}
            </h5>

            <div tabIndex={tabIndex} className='project-img-wrapper position-relative' onClick={() => {setClicked(!clicked); focusser(tabIndex);}} style={{cursor: clicked ? 'default' : 'pointer'}} onBlur={() => setClicked(false)}>
                <div className={`project-img ${clicked ? 'transparent-mask' : 'hover-opacity'}`} style={{backgroundImage: `url(${src})`, backgroundPositionY: bkgdPosY}}></div>

                <div className={`project-img-overlay ${clicked ? 'clicked' : ''} justify-content-center align-items-center`} style={{visibility: clicked ? 'visible' : 'hidden'}}>
                    <a className='github-link mx-4' href={githubLink} target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon className='deployed-link fa' icon={faGithub} />
                    </a>
                    {deployedLink && <a
                        className='mx-4' href={deployedLink} target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon className='deployed-link fa' icon={faEarthAmericas} />
                    </a>}
                    
                </div>
            </div>
        </div>
    );
}



// EXPORT
export default Project;