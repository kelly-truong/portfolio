import react, { useEffect, useState } from 'react'
import './projects.scss'
import heart from '../assets/heart.svg'
import pinkHeart from '../assets/pink-heart.png'
import library from '../assets/library.png'
import netflix from '../assets/netflix.png'
import treact from '../assets/treact.png'
import todo from '../assets/todo.png'
import eportfolio from '../assets/eportfolio.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'




const projects = [
    {
        name: "Library",
        desc: 'The online library started off with only html and css, but became more functional with javascript and react.',
        lang: 'HTML, CSS, React, Javascript',
    },
    {
        name: "Netflix Clone",
        desc: 'A somewhat functional Netflix Clone that helped to expand my understanding of javascript and react.',
        lang: 'HTML, CSS, React, Javascript',
    },
    {
        name: "Treact",
        desc: 'My first independent project where I cloned a website design, testing my html and css skills.',
        lang: 'HTML, CSS',
    },
    {
        name: "Todo List",
        desc: 'A mini project that furthered my knowledge in react.',
        lang: 'HTML, CSS, React, Javascript',
    },
    {
        name: "E-portfolio",
        desc: 'A portfolio where I incorporated my learning of javascript into a project for the first time.',
        lang: 'HTML, CSS, Javascript',
    }
]

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0])
    const [animate, setAnimate] = useState(null)

    const updateProject = (project) => {
        setSelectedProject(project)
    }

    useEffect(() => {
        const currentIndex = projects.findIndex(x => x.name === selectedProject.name)
        const timer = setTimeout(() => {
            setSelectedProject(projects[currentIndex + 1])
            if (selectedProject === projects[4]) {
                setSelectedProject(projects[0])
            }
        }, 7000)

        if (selectedProject.name !== animate) {
            setAnimate(selectedProject.name)
        }

        return () => {
            clearTimeout(timer)
        }

    }, [selectedProject])



    return < section id='projects' >
        <div className="projects--wrapper">
            <div className="title">PROJECTS</div>
            <div className="columns">
                <div className="column-1">
                    {projects.map((project, i) => (
                        <div key={i} className={`project__name--box clickable ${selectedProject === project ? "selected" : ""}`} onClick={() => updateProject(project)}>
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
                    <p className="description">
                        {selectedProject.desc}
                    </p>

                    <p className="languages">
                        {selectedProject.lang}
                    </p>

                    <div className="links">
                        <a href="https://www.smokonow.com/products/hank-yeti-big-foot-plush" target="_blank" className="clickable">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://www.smokonow.com/products/hank-yeti-big-foot-plush" target="_blank" className="clickable">
                            <FontAwesomeIcon icon="link" />
                        </a>
                    </div>

                    <div className="bar--container">
                        <span className="bar">
                            <span className={"loading" + (animate === selectedProject.name ? " animate" : "")} onAnimationEnd={() => setAnimate(false)} ></span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section >
}
export default Projects