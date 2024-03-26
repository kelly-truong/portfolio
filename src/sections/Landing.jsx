import react from 'react'
import './landing.scss'
import flower from '../assets/flower.svg'



const Landing = () => {

    return < section id='landing' >
        <div className="landing--wrapper">
            <h1 className="landing--title">POCHACCO & FROGGY</h1>
            <div className="column--wrapper">
                <div className="left--side">
                    <h1 className="landing--title-2">NUBNUB</h1>
                    <div className="cinnamoroll">
                        cinnamoroll
                    </div>
                </div>
                <div className="right--side">
                    <div className="landing--ovals oval-1">
                        <img className="flower" src={flower} alt="" />
                        <h1 className="landing--title">CHICKEN NUGGIE</h1>
                    </div>
                    <div className="landing--ovals oval-2">
                        <img className="flower" src={flower} alt="" />
                        <h1 className="landing--title">CHICKEN NUGGIE</h1>
                    </div>
                    <div className="landing--ovals oval-3">
                        <img className="flower" src={flower} alt="" />
                        <h1 className="landing--title">CHICKEN NUGGIE</h1>
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
export default Landing