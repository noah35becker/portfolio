
// IMPORTS
import links from '../../assets/footer-links';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


// COMPONENT
function Footer(){
    return (
        <footer>
            <div className='logos'>
                {links.map(({name, src, type, link}) => 
                    <a className='logo' href={link} target='_blank' rel='noreferrer' key={name}>
                        {type === 'img' ?
                            <img src={src} alt={name} typeof={typeof src} />
                            :
                            <FontAwesomeIcon icon={src} />
                        }
                    </a>
                )}
            </div>

            <p>
                Designed and coded by Noah Becker
                &nbsp;
                <span></span>  {/* Add a left- (or right-) border here later */}
                &nbsp;
                &copy;
                &nbsp;
                {new Date().getFullYear()}
            </p>
        </footer>
    );
}

// EXPORT
export default Footer;