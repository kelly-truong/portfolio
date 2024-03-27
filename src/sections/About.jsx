import react, { useEffect, useRef } from 'react'
import './about.scss'
import flower from '../assets/flower.svg'
import pinkFlower from '../assets/pink-flower.png'




const About = ({ aboutRef, animate }) => {
    console.log(animate, '?')
    return <section id='about' ref={aboutRef} >
        <div className={"about--wrapper" + (animate ? " show" : "")}>
            <div className="about--title">
                ABOUT
            </div>
            <div className="about--columns">
                <div className="about--column left">
                    <div className="about--box">
                        <img className="pink-flower" src={pinkFlower} alt="" />
                        <h3 className="about--header">Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores accusamus natus vero nulla quidem esse at eligendi magnam sunt in quisquam facilis, quasi laborum ducimus corrupti! Inventore sapiente dignissimos corporis.</p>
                    </div>
                    <div className="about--box">
                        <img className="pink-flower" src={pinkFlower} alt="" />
                        <h3 className="about--header">Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores accusamus natus vero nulla quidem esse at eligendi magnam sunt in quisquam facilis, quasi laborum ducimus corrupti! Inventore sapiente dignissimos corporis.</p>
                    </div>
                </div>
                <div className="about--column middle">
                    <div className="about--box">
                        <img className="pink-flower" src={pinkFlower} alt="" />
                        <h3 className="about--header">Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores accusamus natus vero nulla quidem esse at eligendi magnam sunt in quisquam facilis, quasi laborum ducimus corrupti! Inventore sapiente dignissimos corporis.</p>
                    </div>
                    <div className="about--box">
                        <img className="pink-flower" src={pinkFlower} alt="" />
                        <h3 className="about--header">Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores accusamus natus vero nulla quidem esse at eligendi magnam sunt in quisquam facilis, quasi laborum ducimus corrupti! Inventore sapiente dignissimos corporis.</p>
                    </div>
                </div>
                <div className="about--column right">
                    <div className="about--box">
                        <img className="pink-flower" src={pinkFlower} alt="" />
                        <h3 className="about--header">Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores accusamus natus vero nulla quidem esse at eligendi magnam sunt in quisquam facilis, quasi laborum ducimus corrupti! Inventore sapiente dignissimos corporis.</p>
                    </div>
                    <div className="about--box">
                        <img className="pink-flower" src={pinkFlower} alt="" />
                        <h3 className="about--header">Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores accusamus natus vero nulla quidem esse at eligendi magnam sunt in quisquam facilis, quasi laborum ducimus corrupti! Inventore sapiente dignissimos corporis.</p>
                    </div>
                </div>
            </div>
        </div>
    </section >
}
export default About