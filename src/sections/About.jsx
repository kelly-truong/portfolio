import react, { useEffect, useRef, useState } from 'react'
import './about.scss'
import pinkFlower from '../assets/pink-flower.png'
import pochaccoSticker from '../assets/pochacco-sticker.png'
import thumb from '../assets/thumbs.webp'
import side from '../assets/sideways.png'
import run from '../assets/run.png'


const aboutMe = [{
    name: "Me",
    desc: "I'm a 3rd year Biology major at the University of Georgia. I'm currently on a pre-optometry track but have found a new interest in frontend developing.",
    pos: "left"
},
{
    name: "Favorites",
    desc: "My favorite things are chicken nuggies, cream puffs, plushies, and anything pink. I love trying new cafes and restaurants, especially boba shops!",
    pos: "middle"
}, {
    name: "Goals",
    desc: "I look forward to utilizing and improving my current skillset in hopes to develop unique, creative, and preferably cute websites!",
    pos: "right"
}]

const About = ({ containerRef, currentSection, id }) => {
    const [percentage, setPercentage] = useState(null)

    useEffect(() => {
        if (currentSection === 1) {
            const handleOnScroll = (e) => {
                let tempPerc = ((window.scrollY - containerRef.current[id].offsetHeight) / containerRef.current[id].offsetHeight * 100 * 1.25);
                if (tempPerc < 0) {
                    tempPerc = tempPerc * -1
                }
                setPercentage(tempPerc)
            }
            window.addEventListener("scroll", handleOnScroll)
            return () => {
                window.removeEventListener("scroll", handleOnScroll)
            }
        }

    }, [currentSection])



    return <section id='about' className={currentSection === id ? 'about-visible' : ""} ref={el => containerRef.current[id] = el}  >
        <div className={"about--wrapper"} >
            <div className="title" style={{ opacity: `${percentage ? 1 - (percentage / 100) : 0}` }}>
                ABOUT
            </div>
            <div className="about--columns clickable"
                style={{ opacity: `${1.2 - (percentage / 100)}` }}
            >

                {aboutMe.map(x => {
                    return <div className={`about--column clickable ${x.pos}`}>
                        <div className="about--box clickable" >
                            <img className="pink-flower" src={pinkFlower} alt="" />
                            <div className="name">{x.name}</div>
                            <p>{x.desc}</p>
                            {/* <div className="side left" />
                            <div className="side back" />
                            <div className="side bottom" />
                            <div className="side top" /> */}
                            {x.name === "Me" && <img className="run" src={run} />}
                            {x.name === "Favorites" && <img className="pochacco" src={pochaccoSticker} />}
                            {x.name === "Goals" && <img className="thumb" src={thumb} />}
                        </div>

                    </div>
                })}

            </div>

        </div>
    </section >
}
export default About