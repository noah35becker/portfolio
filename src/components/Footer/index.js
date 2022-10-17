
// IMPORTS
import links from '../../assets/footer-links';
import './index.css';


// COMPONENT
function Footer(){
    return (
        <footer className='text-center mt-5 mb-3'>
            <div className='logos mb-3'>
                {links.map(({name, src, link}) => 
                    <a className='logo mx-2 hover-opacity' href={link} target='_blank' rel='noreferrer' key={name}>
                        <img src={src} alt={name} typeof={typeof src} />
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