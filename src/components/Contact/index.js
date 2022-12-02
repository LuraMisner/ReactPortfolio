import './index.scss'
import { Loader } from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
//import { faFile } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_nr68lob', 'template_def99xp', refForm.current, 'M8yxbLp1QpnvSWLOj').then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            }, () => {
                alert('Failed to send message, please try again.')
            }
        )
    }
    
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={'Contact me'.split('')} idx={15} />
                    </h1>

                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND'/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

                <div className='left-side'>
                    <div className='text-area'>
                        <p>I’m currently looking for full-time or part-time software engineering positions, but I'm open to hearing about all opportunities.</p>
                        <p> Please feel free to use the form on the left to send me a message, or contact me directly at <strong>MisnerLura@Gmail.com</strong> or by connecting with me on LinkedIn using the button below.</p>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lura-misner/">
                            <FontAwesomeIcon icon={faLinkedin} color="4d4d4e" />
                        </a>
                    </div>
                </div>

            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact