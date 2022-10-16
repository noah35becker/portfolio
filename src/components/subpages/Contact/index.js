
// IMPORT
import {formatPhone} from "../../../utils/helpers";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhoneFlip} from '@fortawesome/free-solid-svg-icons';
import './index.css';


// COMPONENT
function Contact(){
    const email = 'noahbeckercoding@gmail.com';
    const phone = '2153417295';

    return (<>
        <div className="contact-info">
            <a href={`mailto:${email}`} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faEnvelope}/>:&nbsp;
                <span>{email}</span>
            </a>

            <a href={`tel:${phone}`} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faPhoneFlip}/>:&nbsp;
                <span>{formatPhone(phone)}</span>
            </a>
        </div>

        <form className="contact-form">
            <div>
                <label htmlFor="name">Name:&nbsp;</label>
                <input type="text" name="name" placeholder="First Last" />
            </div>

            <div>
                <label htmlFor="email">Email:&nbsp;</label>
                <input type="email" name="email" placeholder="email@website.com" />
            </div>

            <div>
                <label htmlFor="message">Message:&nbsp;</label>
                <textarea name="message" rows='10' />
            </div>
        </form>
    </>);
}


// EXPORT
export default Contact;