
// IMPORT
import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhoneFlip} from '@fortawesome/free-solid-svg-icons';
import './index.css';
import {formatPhone, validateEmail} from "../../../utils/helpers";


// COMPONENT
function Contact(){
    const email = 'noahbeckercoding@gmail.com';
    const phone = '2153417295';

    const [nameErrMsg, setNameErrMsg] = useState('');
    const [emailErrMsg, setEmailErrMsg] = useState('');
    const [messageErrMsg, setMessageErrMsg] = useState('');

    function validate({target}){
        target.value = target.value.trim();
        
        switch (target.name){
            case 'name':
                if (!target.value)
                    setNameErrMsg("Don't leave name field blank");
                else
                    setNameErrMsg('');
                break;
            case 'email':
                if (!target.value)
                    setEmailErrMsg("Don't leave email field blank");
                else if (!validateEmail(target.value))
                    setEmailErrMsg('Invalid email');
                else
                    setEmailErrMsg('');
                break;
            case 'message':
                if (!target.value)
                    setMessageErrMsg("Don't leave message field blank");
                else
                    setMessageErrMsg('');
                break;
        }
    }

    function submit(e){
        e.preventDefault();

        if (!nameErrMsg && !emailErrMsg && !messageErrMsg){
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const message = document.getElementById('contact-message').value;

            alert('Form submitted!' + '\nName: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
        }
    }

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

        <form id="contact-form" onSubmit={submit}>
            <div>
                <label htmlFor="name">Name:&nbsp;</label>
                <input name="name" id='contact-name' placeholder="First Last" onBlur={validate} />
            </div>

            <div>
                <label htmlFor="email">Email:&nbsp;</label>
                <input name="email" id='contact-email' placeholder="email@website.com" onBlur={validate} />
            </div>

            <div>
                <label htmlFor="message">Message:&nbsp;</label>
                <textarea name="message" id='contact-message' placeholder='Hi, Noah…' rows='10' onBlur={validate} />
            </div>

            <button type='submit' form='contact-form'>Send</button>
        </form>
    </>);
}


// EXPORT
export default Contact;