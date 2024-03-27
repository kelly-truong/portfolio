import react, { useState } from 'react'
import './projects.scss'
import heart from '../assets/heart.svg'
import pinkHeart from '../assets/pink-heart.png'
import library from '../assets/library.png'
import netflix from '../assets/netflix.png'
import treact from '../assets/treact.png'
import todo from '../assets/todo.png'
import eportfolio from '../assets/eportfolio.png'




const projects = [
    {
        name: "Library",
        desc: 'The best online library!',
    },
    {
        name: "Netflix Clone",
        desc: 'netflix project',
    },
    {
        name: "Treact",
        desc: 'treact project',
    },
    {
        name: "Todo List",
        desc: 'todo project',
    },
    {
        name: "E-portfolio",
        desc: 'e-portfolio',
    }
]

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0])

    const updateProject = (project) => {
        setSelectedProject(project)
    }


    return < section id='projects' >
        <div className="projects--wrapper">
            <div className="title">PROJECTS</div>
            <div className="columns">
                <div className="column-1">
                    {projects.map(project => (
                        <div className={`project__name--box clickable ${selectedProject === project ? "selected" : ""}`} onClick={() => updateProject(project)}>
                            <img className={`heart ${selectedProject === project ? "pink-heart" : ""}`} src={selectedProject === project ? pinkHeart : heart} alt="" />
                            <span className="name">{project.name}</span>
                        </div>
                    ))}
                </div>
                <div className="column-2">
                    <img className={`project--img ${selectedProject.name === "Netflix Clone" ? "netflix--img" : selectedProject.name === "Treact" ? "treact--img" : selectedProject.name === "E-portfolio" ? "eportfolio--img" : ""}`}
                        src={selectedProject.name === "Library" ? library
                            : selectedProject.name === "Netflix Clone" ? netflix
                                : selectedProject.name === "Treact" ? treact
                                    : selectedProject.name === "Todo List" ? todo
                                        : selectedProject.name === "E-portfolio" ? eportfolio : ""}
                    />
                </div>
                <div className="column-3">
                    <p>
                        {selectedProject.desc}
                    </p>
                </div>
            </div>
        </div>
    </section >
}
export default Projects