import react, { useEffect, useRef, useState } from 'react'
import './landing.scss'
import flower from '../assets/flower.svg'
import vid from '../assets/video.webm'
import { useIntersectionObserver } from '../components/useIntersectionObserver'




const Landing = ({ currentSection, setCurrentSection, containerRef, id }) => {
    const [randomText, setRandomText] = useState('');
    const [percentage, setPercentage] = useState(0)


    useEffect(() => {
        if (currentSection === 0) {
            const handleOnScroll = (e) => {
                setPercentage(window.scrollY / containerRef.current[id].offsetHeight * 100)
            }
            window.addEventListener("scroll", handleOnScroll)

            let result = [];
            let index = 0;
            let pushed = [];

            const intervalId = setInterval(() => {
                const realIndex = index / 5
                if (realIndex > 11) {
                    clearInterval(intervalId)
                    return
                }
                const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                let desiredText = "Kelly Truong"

                for (let i = 0; i < 12 - pushed.length; i++) {
                    result[i] = characters.charAt(Math.floor(Math.random() * characters.length));
                }
                if (Number.isInteger(realIndex) && realIndex <= 13) {
                    pushed.push(1)
                    result[(desiredText.length - 1) - realIndex] = desiredText[(desiredText.length - 1) - realIndex]
                }
                setRandomText(result.join(''))
                index++
            }, 75); // Adjust the interval timing as needed



            return () => {
                window.removeEventListener("scroll", handleOnScroll)
                clearInterval(intervalId); // Cleanup on unmount
            }
        }
    }, [currentSection])



    return <section id='landing' ref={el => containerRef.current[id] = el} className={((currentSection === 0) ? " visible" : " hidden")}
    >
        <div className="landing-bg">
            <div className="left-col">
                <div className="row" >
                    <span style={{ transform: `translate(${percentage}%,0)` }}>KELLY</span>
                    <span style={{ transform: `translate(${percentage}%,0)` }}>KELLY</span>
                    <span style={{ transform: `translate(${percentage}%,0)` }}>KELLY</span>
                </div>
                <div className="row" >
                    <span style={{ transform: `translate(${percentage * -1 * 1.2}%,0)` }}>KELLY</span>
                    <span style={{ transform: `translate(${percentage * -1 * 1.2}%,0)` }}>KELLY</span>
                </div>
                <div className="row" >
                    <span style={{ transform: `translate(${percentage}%,0)` }}>KELLY</span>
                    <span style={{ transform: `translate(${percentage}%,0)` }}>KELLY</span>
                    <span style={{ transform: `translate(${percentage}%,0)` }}>KELLY</span>
                </div>
            </div>
            <div className="right-col" style={{ transform: `translateY(${percentage * -1}%)` }}>
                <div className="rotate">
                    <span className='first'>{randomText} </span>
                </div>
            </div>
        </div>
        {/* <video width="900" height="700" autoPlay loop muted >
                <source src={vid} type="video/mp4" />
            </video> */}
        <div className="landing-wrapper" style={{ opacity: `${1 - (percentage / 100)}` }}>
            <div className="quote">"The goal is to seek new challenges, with the development of solutions as the natural outcome."</div>
        </div>
    </section >
}
export default Landing