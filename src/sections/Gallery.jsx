import react, { useEffect, useRef, useState } from 'react'
import './gallery.scss'
import pochacco from '../assets/pochacco.jpg'
import bear from '../assets/bear.jpg'
import bear2 from '../assets/bear2.jpg'
import watermelon from '../assets/watermelon.jpg'
import cinna from '../assets/cinna.jpg'
import cinna2 from '../assets/cinna2.jpg'
import cinna3 from '../assets/cinna3.jpg'
import pochacco2 from '../assets/pochacco2.jpg'
import boba from '../assets/boba.jpg'
import dogs from '../assets/dogs.jpg'
import mochi from '../assets/mochi.jpg'
import cinnamoroll from '../assets/cinnamoroll.jpg'



const Gallery = ({ containerRef, currentSection, id }) => {
    const trackRef = useRef(null);
    const throttleTimeoutRef = useRef(null);
    const [percentage, setPercentage] = useState(null)
    useEffect(() => {



        trackRef.current.animate({
            transform: `scale(1) translate(0%, -50%)`
        }, { duration: 1200, fill: "forwards", delay: 500, easing: 'ease' })


        return () => {
            trackRef.current.dataset.mouseDownAt = "0"
            trackRef.current.dataset.prevPercentage = "0"
            trackRef.current.dataset.percentage = "0"
            trackRef.current.animate({
                transform: `scale(.3) translate(0%, -50%)`
            }, { duration: 1200, fill: "forwards" })
            for (const image of trackRef.current.getElementsByClassName("image")) {
                image.animate({
                    objectPosition: `${100}% center`
                }, { duration: 1200, fill: "forwards" })
            }
        }
    }, [trackRef, currentSection])


    useEffect(() => {
        if (currentSection === 3) {
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
    }, [currentSection])


    const updateMouseDownDataSet = (e) => {
        trackRef.current.dataset.mouseDownAt = e.clientX
    }

    const updateMouseUpDataSet = (e) => {
        trackRef.current.dataset.mouseDownAt = "0"
        trackRef.current.dataset.prevPercentage = trackRef.current.dataset.percentage
    }

    const updateMouseMove = (e) => {

        if (!throttleTimeoutRef.current) {
            throttleTimeoutRef.current = setTimeout(() => {
                if (trackRef.current.dataset.mouseDownAt === "0") {
                    throttleTimeoutRef.current = null;
                    return
                }
                let mouseDelta = parseFloat(trackRef.current.dataset.mouseDownAt) - e.clientX
                let maxDelta = window.innerWidth / 2
                const percentage = (mouseDelta / maxDelta) * -100
                let nextPercentage = parseFloat(trackRef.current.dataset.prevPercentage) + percentage
                nextPercentage = Math.max(Math.min(nextPercentage, 0), -100);
                trackRef.current.dataset.percentage = nextPercentage

                trackRef.current.animate({
                    transform: `translate(${nextPercentage}%, -50%)`
                }, { duration: 1200, fill: "forwards" })

                for (const image of trackRef.current.getElementsByClassName("image")) {
                    image.animate({
                        objectPosition: `${100 + nextPercentage}% center`
                    }, { duration: 1200, fill: "forwards" })
                }
                throttleTimeoutRef.current = null;
            }, 5);
        }
    }

    console.log(currentSection, percentage)

    return <section id='gallery'
        ref={el => containerRef.current[id] = el}
    >
        <div className={"gallery-wrapper " + (currentSection === 3 ? "show" : "hidden")} >
            <div className="title"
                style={{ opacity: `${(percentage !== null) ? 1 - (percentage / 100) : 0}` }}>
                GALLERY
            </div>
            <div ref={trackRef} className="image-track clickable" data-mouse-down-at="0" data-prev-percentage="0"
                onMouseDown={updateMouseDownDataSet}
                onMouseMove={updateMouseMove}
                onMouseUp={updateMouseUpDataSet}
                onTouchStart={updateMouseDownDataSet}
                onTouchEnd={updateMouseUpDataSet}
                onTouchMove={updateMouseMove}

            >
                <img style={{ opacity: `${(percentage !== null) ? 1 - (percentage / 100) : 0}` }} className="image" src={cinnamoroll} alt="" draggable="false" />
                <img style={{ opacity: `${(percentage !== null) ? 1 - (percentage / 100) : 0}` }} className="image" src={pochacco} alt="" draggable="false" />
                <img style={{ opacity: `${(percentage !== null) ? 1 - (percentage / 100) : 0}` }} className="image" src={watermelon} alt="" draggable="false" />
                <img style={{ opacity: `${(percentage !== null) ? 1 - (percentage / 100) : 0}` }} className="image" src={bear} alt="" draggable="false" />
                <img style={{ opacity: `${(percentage !== null) ? 1 - (percentage / 100) : 0}` }} className="image" src={cinna} alt="" draggable="false" />
                <img style={{ opacity: `${(percentage !== null) ? 1 - (percentage / 100) : 0}` }} className="image" src={pochacco2} alt="" draggable="false" />
                <img style={{ opacity: `${(percentage !== null) ? 1 - (percentage / 100) : 0}` }} className="image" src={bear2} alt="" draggable="false" />
                <img style={{ opacity: `${(percentage !== null) ? 1 - (percentage / 100) : 0}` }} className="image" src={cinna3} alt="" draggable="false" />
                <img style={{ opacity: `${(percentage !== null) ? 1 - (percentage / 100) : 0}` }} className="image" src={boba} alt="" draggable="false" />
                <img style={{ opacity: `${(percentage !== null) ? 1 - (percentage / 100) : 0}` }} className="image" src={mochi} alt="" draggable="false" />
                <img style={{ opacity: `${(percentage !== null) ? 1 - (percentage / 100) : 0}` }} className="image" src={dogs} alt="" draggable="false" />
                <img style={{ opacity: `${(percentage !== null) ? 1 - (percentage / 100) : 0}` }} className="image" src={cinna2} alt="" draggable="false" />
            </div>
        </div>
    </section >
}
export default Gallery