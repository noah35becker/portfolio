
// IMPORT
import headshot from '../../../assets/noah-becker-headshot.jpg';
import './index.css';


// COMPONENT
function About(){
    return (<>
        <img className='headshot mb-4' src={headshot} alt='headshot' />

        <p className="bio text-start mx-1 mx-sm-2 mx-md-5 px-lg-5">   
            <span className='fw-bold'>{'Noah Becker'}</span>{` is a full-stack web developer based in New York City. A graduate of Columbia University's Full-Stack Bootcamp, he offers extensive experience with Node, SQL, MongoDB, GraphQL, Express, React, JavaScript, HTML, CSS, and other languages and frameworks. Over nearly a decade of work experience in web development and data management, he has combined strong technical expertise with a creative approach to provide high-quality solutions to clients’ business challenges.`}
            
            <span className="line-break"><br /></span>

            {`He is dedicated to the art of writing clear, efficient code, and combines improvisation with planning and organization to build applications that deliver an intuitive user experience. Colleagues recognize his sharp attention to detail; his patience, thoughtfulness, and precision when communicating with others; and his ability to think critically and break down problems into manageable steps, no matter how complex the project.`}

            <span className="line-break"><br /></span>

            {`After attending Northwestern University as a mechanical engineering major, Noah transferred to The New School in New York City, where he earned a BFA in Music Performance and continued his established career as a nationally- and internationally-touring saxophonist, clarinetist, composer and bandleader. He speaks English, Spanish, and Hebrew, and loves to read, run, and cook.`}
        </p>
    </>);
}


// EXPORT
export default About;