import './index.scss';
import AnimatedLetter from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { Loader } from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetter letterClass={letterClass} strArray={'About me'.split('')} idx={15}/>
                </h1>
                <p>
                Eight years ago I got my first taste of programming while exploring the opportunities that my local trade school had to offer. Although it was a small and short-lasting encounter, it was enough to jump-start my interest in the field.
                </p>
                <p>
                Recently, I graduated from the University of Vermont with a bachelor's degree in Computer Science. My time at the University of Vermont allowed me to pick up several technical skills in various languages such as Python, Java, C, C++, Swift, and R, in addition to skills in web development, database management, and algorithms. It also allowed me to pick up crucial soft skills, as many courses encouraged communication and collaboration regarding development.
                </p>
                <p>
                Currently, I am looking for full-time or part-time positions that will allow me to utilize my skillset and gain experience in the Software Engineering field.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color='#FFD43B'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faDatabase} color='#000000'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD810'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faJava} color='#DD0031'/>
                    </div>
                </div>
            </div>
        </div>

        <Loader type="pacman" />

        </>
    );
}


export default About
