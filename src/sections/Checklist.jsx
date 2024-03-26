import react, { useState } from 'react'
import './checklist.scss'
import heart from '../assets/heart.svg'

const projects = [
    {
        name: "Library",
        desc: 'descript',
        img: 'imgsrc'
    },
    {
        name: "Netflix Clone",
        desc: 'descript',
        img: 'imgsrc'
    },
    {
        name: "Treact",
        desc: 'descript',
        img: 'imgsrc'
    },
    {
        name: "Todo List",
        desc: 'descript',
        img: 'imgsrc'
    }
]

const Checklist = () => {
    const [project, setProject] = useState("")

    const updateProject = (projects) => {

    }

    return < section id='checklist' >
        <div className="checklist--wrapper">
            <div className="checklist--title">
                <h1 className="landing--title">Projects</h1>
            </div>

            {/* {projects.map(project => ( */}
                <div className="columns">
                    <div className="column-1">
                        <div className="project__name--box" onClick={updateProject} >
                            <img className="heart" src={heart} alt="" />
                            <span className="project--name">Library</span>
                        </div>
                        <div className="project__name--box">
                            <img className="heart" src={heart} alt="" />
                            <span className="project--name">Netflix Clone</span>
                        </div>
                        <div className="project__name--box">
                            <img className="heart" src={heart} alt="" />
                            <span className="project--name">Treact</span>
                        </div>
                        <div className="project__name--box">
                            <img className="heart" src={heart} alt="" />
                            <span className="project--name">Todo List</span>
                        </div>
                    </div>
                    <div className="column-2">
                        <img className="project--img" src="https://www.smokonow.com/cdn/shop/products/ecCr_pTc.jpg?v=1669926078" alt="" />
                    </div>
                    <div className="column-3">
                        <p className="project--description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ratione deserunt repellendus at. Natus, deserunt? Ut quaerat dolorem adipisci, quod eos exercitationem hic eaque harum numquam impedit dolor illum libero voluptatum odit beatae sunt officia cum ipsam rem aut tempora!
                        </p>
                    </div>
                </div>
            {/* ))} */}
        </div>

    </section >
}
export default Checklist