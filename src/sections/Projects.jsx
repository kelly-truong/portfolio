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
        name: "Netflix",
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

const Projects = ({ containerRef, id, currentSection }) => {
    const [selectedProject, setSelectedProject] = useState(projects[0])
    const [animate, setAnimate] = useState(null)
    const [fadeInDone, setFadeInDone] = useState(false)
    const [fadeOut, setFadeOut] = useState(false)
    const [percentage, setPercentage] = useState(null)
    const [finishedAnimation, setFinishedAnimation] = useState(false)

    const updateProject = (project) => {
        setSelectedProject(project)
    }

    useEffect(() => {
        let animationTimeOut;
        let timer;
        if (currentSection === 2) {
            const currentIndex = projects.findIndex(x => x.name === selectedProject.name)
            timer = setTimeout(() => {
                setSelectedProject(projects[currentIndex + 1])
                if (selectedProject === projects[4]) {
                    setSelectedProject(projects[0])
                }
                setFadeInDone(false)
            }, 6000)
            animationTimeOut = setTimeout(() => {
                setFadeOut(true)
                setTimeout(() => {
                    setFadeOut(false)
                }, 1000)
            }, 5000)

            if (selectedProject.name !== animate) {
                setAnimate(selectedProject.name)
            }
        }

        return () => {
            clearTimeout(timer)
            clearTimeout(animationTimeOut)
            setAnimate(null)
        }
    }, [selectedProject, currentSection])


    useEffect(() => {
        if (currentSection === 2) {
            const handleOnScroll = (e) => {
                let tempPerc = ((window.scrollY - containerRef.current[id].offsetTop) / containerRef.current[id].offsetHeight * 100 * 1.25);
                if (tempPerc < 0) {
                    tempPerc = tempPerc * -1
                }
                setPercentage(tempPerc)
            }
            window.addEventListener("scroll", handleOnScroll)
            return () => {
                window.removeEventListener("scroll", handleOnScroll)
            }
        }
        return () => {
            setFinishedAnimation(false)
        }
    }, [currentSection])


    console.log(percentage)

    return < section id='projects' ref={el => containerRef.current[id] = el} >
        <div className={"projects--wrapper " + (currentSection === 2 ? "show" : "")} >
            <div className="title" onAnimationEnd={() => {
                setFinishedAnimation(true)
            }} style={{ opacity: `${(percentage && finishedAnimation) ? 1 - (percentage / 100) : 0}` }}>PROJECTS</div>
            <div className="columns" style={{ opacity: `${(percentage && finishedAnimation) ? 1 - (percentage / 100) : 0}` }}>
                <div className="column-1">
                    {projects.map((project, i) => (
                        <div
                            key={i}

                            className={`project--btn clickable ${selectedProject === project ? "selected" : ""}`}

                            onClick={() => updateProject(project)}>
                            <img className={`heart ${selectedProject === project ? "pink-heart" : ""}`} src={selectedProject === project ? pinkHeart : heart} alt="" />
                            <span className="name">{project.name}</span>
                        </div>
                    ))}
                </div>
                <div className="column-2">
                    {selectedProject.name === "Netflix" && <img className={`project--img 
                    ${!fadeInDone ? "fade-in" : ""}
                    ${fadeOut ? "fade-out" : ""}
                    ${selectedProject.name === "Netflix" ? "netflix--img" : ""}`}
                        src={netflix}
                        onAnimationEnd={() => setFadeInDone(true)}
                    />}
                    {selectedProject.name === "Library" && <img className={`project--img 
                    ${!fadeInDone ? "fade-in" : ""}
                    ${fadeOut ? "fade-out" : ""}`}
                        src={library}
                        onAnimationEnd={() => setFadeInDone(true)}
                    />}
                    {selectedProject.name === "Treact" && <img className={`project--img 
                    ${!fadeInDone ? "fade-in" : ""}
                    ${fadeOut ? "fade-out" : ""}
                    ${selectedProject.name === "Treact" ? "treact--img" : ""}`}
                        src={treact}
                        onAnimationEnd={() => setFadeInDone(true)}
                    />}
                    {selectedProject.name === "Todo List" && <img className={`project--img 
                    ${!fadeInDone ? "fade-in" : ""}
                    ${fadeOut ? "fade-out" : ""}`}
                        src={todo}
                        onAnimationEnd={() => setFadeInDone(true)}
                    />}
                    {selectedProject.name === "E-portfolio" && <img className={`project--img 
                    ${!fadeInDone ? "fade-in" : ""}
                    ${fadeOut ? "fade-out" : ""}
                    ${selectedProject.name === "E-portfolio" ? "eportfolio--img" : ""}`}
                        src={eportfolio}
                        onAnimationEnd={() => setFadeInDone(true)}
                    />}
                </div>
                <div className="column-3">
                    <div className={`info 
                    ${!fadeInDone ? "fade-in" : ""}
                    ${fadeOut ? "fade-out" : ""} `}
                        onAnimationEnd={() => setFadeInDone(true)}>
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