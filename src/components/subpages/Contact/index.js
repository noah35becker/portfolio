
// IMPORT
import {useState, useEffect} from 'react';
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
                    setNameErrMsg("Don't leave blank");
                else
                    setNameErrMsg('');
                break;
            case 'email':
                if (!target.value)
                    setEmailErrMsg("Don't leave blank");
                else if (!validateEmail(target.value))
                    setEmailErrMsg('Invalid email');
                else
                    setEmailErrMsg('');
                break;
            case 'message':
                if (!target.value)
                    setMessageErrMsg("Don't leave blank");
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

            if (name && email && message){
                alert('Form submitted!\n' + '\nName: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
            }
        }
    }


    return (
        <div className='d-flex justify-content-center'>
            <div className="contact-info mx-3 mt-3">
                <a className='fs-5' href={`mailto:${email}`} target='_blank' rel='noreferrer'>
                    <span className='text-dark'><FontAwesomeIcon icon={faEnvelope}/>:&nbsp;</span>
                    <span className='link hover-opacity'>{email}</span>
                </a>
                <br />
                <a className='fs-5' href={`tel:${phone}`} target='_blank' rel='noreferrer'>
                    <span className='text-dark'><FontAwesomeIcon icon={faPhoneFlip}/>:&nbsp;</span>
                    <span className='link hover-opacity'>{formatPhone(phone)}</span>
                </a>
            </div>

            <form id="contact-form" className='d-flex flex-column align-items-center mx-3' onSubmit={submit}>
                <div>
                    <label className='form-label' htmlFor="name">Name:&nbsp;</label>
                    <input
                        className='form-control mb-1' name="name" id='contact-name' placeholder="First Last" onBlur={validate}
                        style={nameErrMsg ? {outlineStyle: 'solid'} : {}}
                    />
                    <div className='err-msg d-block mb-2'>{nameErrMsg || <>&nbsp;</>}</div>
                </div>

                <div>
                    <label className='form-label' htmlFor="email">Email:&nbsp;</label>
                    <input
                        className='form-control mb-1' name="email" id='contact-email' placeholder="email@website.com" onBlur={validate}
                        style={emailErrMsg ? {outlineStyle: 'solid'} : {}}
                        />
                    <div className='err-msg d-block mb-2'>{emailErrMsg || <>&nbsp;</>}</div>
                </div>

                <div>
                    <label className='form-label' htmlFor="message">Message:&nbsp;</label>
                    <textarea
                        className='form-control mb-1' name="message" id='contact-message' placeholder='Hi, Noah…' rows='10' onBlur={validate}
                        style={messageErrMsg ? {outlineStyle: 'solid'} : {}}
                    />
                    <div className='err-msg d-block mb-2'>{messageErrMsg || <>&nbsp;</>}</div>
                </div>

                <button className='btn btn-submit fs-5' type='submit' form='contact-form'>Send</button>
            </form>
        </div>
    );
}



// EXPORT
export default Contact;