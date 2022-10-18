
// IMPORTS
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import links from './links';
import './index.css';


// COMPONENT
function Footer(){
    return (
        <footer className='text-center mt-5 mb-3'>
            <div className='logos mb-1'>
                {links.map(({name, faIcon, link, color}) => 
                    <a className='logo fs-2' href={link} target='_blank' rel='noreferrer' key={name}>
                        <FontAwesomeIcon className='fa' icon={faIcon} style={{color}} />
                    </a>
                )}
            </div>

            <div>
                <span className='border-end border-dark'>
                    Designed and coded by Noah Becker
                    &nbsp;
                </span>
                &nbsp;
                &copy;&nbsp;
                {new Date().getFullYear()}
            </div>
        </footer>
    );
}


// EXPORT
export default Footer;