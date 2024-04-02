import react, { useEffect, useRef, useState } from 'react'
import './about.scss'
import pinkFlower from '../assets/pink-flower.png'


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
    name: "Title",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores accusamus natus vero nulla quidem esse at eligendi magnam sunt in quisquam facilis,s.",
    pos: "right"
}]

const About = ({ containerRef, currentSection, id }) => {
    const [percentage, setPercentage] = useState(0)


    useEffect(() => {

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

    }, [])

    return <section id='about' className={currentSection === id ? 'about-visible' : ""} ref={el => containerRef.current[id] = el}  >
        <div className={"about--wrapper"} >
            <div className="title" style={{ opacity: `${1 - (percentage / 100)}` }}>
                ABOUT
            </div>
            <div className="about--columns clickable"
                style={{ opacity: `${1 - (percentage / 100)}` }}
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
                        </div>
                    </div>
                })}

            </div>
        </div>
    </section >
}
export default About