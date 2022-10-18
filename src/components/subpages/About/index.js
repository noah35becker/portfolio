
// IMPORT
import headshot from '../../../assets/noah-becker-headshot.jpg';
import './index.css';


// COMPONENT
function About(){
    return (<>
        <img className='headshot mb-4' src={headshot} alt='headshot' />

        <p className="bio text-start mx-1 mx-sm-2 mx-md-5 px-lg-5">   
            <span className='fw-bold'>{'Noah Becker'}</span>{` is a full-stack web developer based in Brooklyn, NY. In 2022, he graduated from Columbia University's Coding Bootcamp, prior to which he gained several years of experience as a self-taught web designer and data specialist. He is dedicated to the art of writing clear, efficient code. Also a professional musician, he combines his instincts for improvisation with high-level planning to develop applications that deliver an intuitive user experience. He is known amongst his colleagues for sharp attention to detail; patience, thoughtfulness, and precision in his communication with others; and the ability to think critically and break down problems into manageable steps, no matter how complex the project.`}
            
            <span className="line-break"><br /></span>
            
            {`After briefly attending Northwestern University as an engineering major, Noah transferred to The New School in New York City, where he earned a BFA in Music Performance and continued his established career as a nationally- and internationally-touring saxophonist, clarinetist, composer and bandleader. Alongside his own music, he has worked as a music copyist for several composers (including Pulitzer Prize and Grammy winners), preparing digital sheet music based either on handwritten scores or transcribing directly from audio; and as a private music teacher, using his own self-developed curriculum. He speaks English, Spanish, and Hebrew, and loves to read, run, and cook.`}
        </p>
    </>);
}


// EXPORT
export default About;