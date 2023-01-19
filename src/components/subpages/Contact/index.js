
// IMPORT
import ContactForm from './ContactForm';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhoneFlip} from '@fortawesome/free-solid-svg-icons';
import './index.css';
import {formatPhone} from "../../../utils/helpers";



// COMPONENT
function Contact(){
    const email = 'noahbeckercoding@gmail.com';
    const phone = '2153417295';

    return (
        <div className='contact-wrapper d-flex justify-content-center flex-wrap-reverse'>
            <ContactForm />

            <div className="contact-info gradient-bkgd mx-2 mx-4-lg mb-3">
                <a className='fs-5' href={`mailto:${email}`} target='_blank' rel='noreferrer'>
                    <span className='text-dark'><FontAwesomeIcon icon={faEnvelope} />:&nbsp;</span>
                    <span className='link hover-opacity'>{email}</span>
                </a>
                <br />
                <a className='fs-5' href={`tel:${phone}`} target='_blank' rel='noreferrer'>
                    <span className='text-dark'><FontAwesomeIcon icon={faPhoneFlip} />:&nbsp;</span>
                    <span className='link hover-opacity'>{formatPhone(phone)}</span>
                </a>
            </div>
        </div>
    );
}



// EXPORT
export default Contact;