import react, { useState } from 'react'
import './projects.scss'
import heart from '../assets/heart.svg'

const projects = [
    {
        name: "Library",
        desc: 'library project',
        img: 'https://www.smokonow.com/cdn/shop/products/ecCr_pTc.jpg?v=1669926078'
    },
    {
        name: "Netflix Clone",
        desc: 'netflix project',
        img: 'imgsrc'
    },
    {
        name: "Treact",
        desc: 'treact project',
        img: 'imgsrc'
    },
    {
        name: "Todo List",
        desc: 'todo project',
        img: 'imgsrc'
    }
]

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0])

    const updateProject = (project) => {
        setSelectedProject(project)
        console.log(selectedProject)
    }


    return < section id='projects' >
        <div className="projects--wrapper">
            <div>
                <h1 className="projects--title">Projects</h1>
            </div>

            <div className="columns">
                <div className="column-1">
                    {projects.map(project => (
                        <div className={(`project__name--box && ${selectedProject === project ? "selected" : ""}`)} onClick={() => updateProject(project)}>
                            <img className="heart" src={heart} alt="" />
                            <span className="project--name">{project.name}</span>
                        </div>
                    ))}
                </div>
                <div className="column-2">
                    <img className={"project--img"} src={selectedProject.img} alt="" />
                </div>
                <div className="column-3">
                    <p className="project--description">
                        {selectedProject.desc}
                    </p>
                </div>
            </div>
        </div>
    </section >
}
export default Projects