
// IMPORT
import {useState} from "react";
import {validateEmail} from "../../utils/helpers";
import './index.css';
import {sendForm} from '@emailjs/browser';



// COMPONENT
export default function ContactForm(){
    const EMAILJS_SERVICE_ID = 'service_u4yrgjf';
    const EMAILJS_TEMPLATE_ID = 'template_f7yhb18';
    const EMAILJS_PUBLIC_API_KEY = 'fHtXi9Ei9B7U0f65w';

    const [nameErrMsg, setNameErrMsg] = useState('');
    const [emailErrMsg, setEmailErrMsg] = useState('');
    const [messageErrMsg, setMessageErrMsg] = useState('');

    const [submitStatus, setSubmitStatus] = useState('unsubmitted');
    const submitMsgDelay = 4000; // ms


    function isBlank({target}){
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


    function trimOnBlur({target}){
        target.value = target.value.trim();
    }


    function isValidEmail({target}){
        if (target.value){
            if (!validateEmail(target.value))
                setEmailErrMsg('Invalid email');
            else
                setEmailErrMsg('');
        }
    }


    async function submit(e){
        e.preventDefault();

        if (!nameErrMsg && !emailErrMsg && !messageErrMsg){
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const message = document.getElementById('contact-message').value;

            if (name && email && message){
                setSubmitStatus('submitting');
                
                try{
                    const sendEmailResult = await sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, '#contact-form', EMAILJS_PUBLIC_API_KEY);

                    if (sendEmailResult.text === 'OK'){
                        setSubmitStatus('success');
                        setTimeout(() => {
                            setSubmitStatus('unsubmitted');
                            e.target.reset();
                        }, submitMsgDelay);
                    }
                } catch {
                    setSubmitStatus('failure');
                    setTimeout(() => {
                        setSubmitStatus('unsubmitted');
                    }, submitMsgDelay);
                }
            }
        }
    }


    return <>
        <form id="contact-form" className='gradient-bkgd d-flex flex-column align-items-center mx-2 mx-4-lg' onSubmit={submit}>
            <div>
                <label className='form-label' htmlFor="name">Name:&nbsp;</label>
                <input
                    className='form-control mb-1' name="name" id='contact-name' placeholder="First Last" onChange={isBlank} onBlur={e => {trimOnBlur(e); isBlank(e);}}
                    style={nameErrMsg ? {outlineStyle: 'solid'} : {}}
                />
                <div className='err-msg d-block mb-2'>{nameErrMsg || <>&nbsp;</>}</div>
            </div>

            <div>
                <label className='form-label' htmlFor="email">Email:&nbsp;</label>
                <input
                    className='form-control mb-1' name="email" id='contact-email' placeholder="email@website.com" onChange={isBlank} onBlur={e => {trimOnBlur(e); isBlank(e); isValidEmail(e);}}
                    style={emailErrMsg ? {outlineStyle: 'solid'} : {}}
                    />
                <div className='err-msg d-block mb-2'>{emailErrMsg || <>&nbsp;</>}</div>
            </div>

            <div>
                <label className='form-label' htmlFor="message">Message:&nbsp;</label>
                <textarea
                    className='form-control mb-1' name="message" id='contact-message' placeholder='Hi, Noah…' rows='10' onChange={isBlank} onBlur={e => {trimOnBlur(e); isBlank(e);}}
                    style={messageErrMsg ? {outlineStyle: 'solid'} : {}}
                />
                <div className='err-msg d-block mb-2'>{messageErrMsg || <>&nbsp;</>}</div>
            </div>

            {submitStatus === 'unsubmitted' ?
                <button className='btn btn-submit fs-5' type='submit' form='contact-form'>Send</button>
            : submitStatus === 'submitting' ?
                <p className="submitting fs-5">Sending…</p>
            : submitStatus === 'success' ?
                <p className="submit-success fs-5">Sent! I'll get back to you ASAP.</p>
            : // submitStatus === 'failure'
                <p className="submit-failure fs-5">Your message did not send<br/>Please try resubmitting, or refresh the page</p>
            }
            
        </form>
    </>;
}