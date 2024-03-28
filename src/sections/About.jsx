import react, { useEffect, useRef } from 'react'
import './about.scss'
import pinkFlower from '../assets/pink-flower.png'




const About = ({ }) => {
    return <section id='about'  >
        <div className={"about--wrapper" + (true ? " show" : "")}>
            <div className="title">
                ABOUT
            </div>
            <div className="about--columns">
                <div className="about--column left">
                    <div className="about--box clickable">
                        <img className="pink-flower" src={pinkFlower} alt="" />
                        <div className="name">Me</div>
                        <p>I'm a 3rd year Biology major at the University of Georgia. I'm currently on a pre-optometry track but have found a new interest in frontend developing.</p>
                    </div>
                </div>
                <div className="about--column middle">
                    <div className="about--box clickable">
                        <img className="pink-flower" src={pinkFlower} alt="" />
                        <div className="name">Favorites</div>
                        <p>My favorite things are chicken nuggies, cream puffs, plushies, and anything pink. I love trying new cafes and restaurants, especially boba shops!</p>
                    </div>
                </div>
                <div className="about--column right">
                    <div className="about--box clickable">
                        <img className="pink-flower" src={pinkFlower} alt="" />
                        <div className="name">Title</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores accusamus natus vero nulla quidem esse at eligendi magnam sunt in quisquam facilis, quasi laborum ducimus corrupti! Inventore sapiente dignissimos corporis.</p>
                    </div>
                </div>
            </div>
        </div>
    </section >
}
export default About