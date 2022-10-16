
// IMPORT
import headshot from '../../../assets/noah-becker-headshot.jpg';


// COMPONENT
function About(){
    return (<>
        <img className='headshot' src={headshot} alt='headshot of Noah Becker' />

        <p className="bio">   
            <span>{'Noah Becker'}</span>{' is a professional computer programmer based in Brooklyn, NY. In 2022, he graduated from Columbia University Engineering\'s Coding Bootcamp, prior to which he gained several years of experience as a self-taught programmer (specializing in web design and data processing).'}
            
            <span className="line-break">&nbsp;<br /></span>
            
            {'After briefly attending Northwestern University as an engineering major, Noah transferred to The New School in New York City, where he earned a BFA in Jazz Performance and began a music career as a saxophonist, clarinetist, composer and bandleader. Alongside his own music, he has worked as a music copyist for several composers (including Pulitzer Prize and Grammy winners), preparing digital sheet music based either on handwritten scores or transcribing directly from audio, a process which includes highly detailed formatting, error-checking, and UX considerations. The whole scope of Noah\'s interests and professional experience aids him well in the technical, aesthetic, and creative demands of programming.'}
        </p>
    </>);
}


// EXPORT
export default About;