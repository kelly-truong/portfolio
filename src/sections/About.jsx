import react, { useEffect, useRef } from 'react'
import './about.scss'
import pinkFlower from '../assets/pink-flower.png'


const aboutMe = [{
    name: "Me",
    desc: "I'm a 3rd year Biology major at the University of Georgia. I'm currently on a pre-optometry track but have found a new interest in frontend developing.",
    pos: "left"
},
{
    name: "Me",
    desc: "My favorite things are chicken nuggies, cream puffs, plushies, and anything pink. I love trying new cafes and restaurants, especially boba shops!",
    pos: "middle"
}, {
    name: "Title",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores accusamus natus vero nulla quidem esse at eligendi magnam sunt in quisquam facilis, quasi laborum ducimus corrupti! Inventore sapiente dignissimos corporis.",
    pos: "right"
}]

const About = ({ containerRef, currentSection, id }) => {
    console.log(currentSection, id)
    return <section id='about' className={currentSection === id ? 'about-visible' : ""} ref={el => containerRef.current[id] = el}  >
        <div className={"about--wrapper"}>
            <div className="title">
                ABOUT
            </div>
            <div className="about--columns">

                {/* <div id="dice">
                    <div class="side front" />

                    <div class="side top" />

                    <div class="side left" />


                    <div class="side bottom" />

                    <div class="side back" />


                </div> */}



                {aboutMe.map(x => {
                    return <div className={`about--column ${x.pos}`}>
                        <div className="about--box clickable">
                            <div className="side front">
                                <img className="pink-flower" src={pinkFlower} alt="" />
                                <div className="name">{x.name}</div>
                                <p>{x.desc}</p>
                            </div>
                            <div className="side left" />
                            <div className="side back" />
                            <div className="side bottom" />
                            <div className="side top" />
                        </div>
                    </div>
                })}

            </div>
        </div>
    </section >
}
export default About