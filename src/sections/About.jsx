import react from 'react'
import './about.scss'



const About = () => {

    return < section id='about' >
        <div className="about--wrapper">
            <h1 className="about__title">POCHACCO & FROGGY</h1>
            <div className="column--wrapper">
                <div className="left--side">
                <h1 className="about__title-2">NUBNUB</h1>
                    <div className="cinnamoroll">
                        cinnamoroll
                    </div>
                </div>
                <div className="right--side">
                    <div className="about__ovals oval-1">
                        <img className="flower" src="https://upload.wikimedia.org/wikipedia/commons/8/82/Flowerit_5_Pink.svg" alt="" />
                        <h1 className="about__title">CHICKEN NUGGIE</h1>
                    </div>
                    <div className="about__ovals oval-2">
                        <img className="flower" src="https://upload.wikimedia.org/wikipedia/commons/8/82/Flowerit_5_Pink.svg" alt="" />
                        <h1 className="about__title">CHICKEN NUGGIE</h1>
                    </div>
                    <div className="about__ovals oval-3">
                        <img className="flower" src="https://upload.wikimedia.org/wikipedia/commons/8/82/Flowerit_5_Pink.svg" alt="" />
                        <h1 className="about__title">CHICKEN NUGGIE</h1>
                    </div>
                    <div className="about--me">
                        <h2>Kelly Truong</h2>
                        <p>Hi! I'm currently a 3rd year Biology major at the University of Georiga. I love boba, plushies, cream puffs, chicken nuggies, and Ben.</p>
                    </div>
                </div>
            </div>
        </div>
    </section >
}
export default About