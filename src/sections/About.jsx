import react, { useEffect, useRef } from 'react'
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
    return <section id='about' className={currentSection === id ? 'about-visible' : ""} ref={el => containerRef.current[id] = el}  >
        <div className={"about--wrapper"}>
            <div className="title">
                ABOUT
            </div>
            <div className="about--columns clickable">


                {aboutMe.map(x => {
                    return <div className={`about--column clickable ${x.pos}`}>
                        <div className="about--box clickable">
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