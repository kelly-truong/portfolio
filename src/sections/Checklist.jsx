import react, { useEffect, useRef } from 'react'
import './checklist.scss'
import pochacco from '../assets/pochacco.jpg'
import bear from '../assets/bear.jpg'
import bear2 from '../assets/bear2.jpg'
import watermelon from '../assets/watermelon.jpg'




const Checklist = () => {
    const trackRef = useRef(null);
    const throttleTimeoutRef = useRef(null);


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
    return <section id='checklist' >
        <div ref={trackRef} className="image-track clickable" data-mouse-down-at="0" data-prev-percentage="0"
            onMouseDown={updateMouseDownDataSet}
            onMouseMove={updateMouseMove}
            onMouseUp={updateMouseUpDataSet}
        >
            <img className="image" src={pochacco} alt="" draggable="false" />
            <img className="image" src={watermelon} alt="" draggable="false" />
            <img className="image" src={bear} alt="" draggable="false" />
            <img className="image" src={pochacco} alt="" draggable="false" />
            <img className="image" src={pochacco} alt="" draggable="false" />
            <img className="image" src={bear2} alt="" draggable="false" />
            <img className="image" src={pochacco} alt="" draggable="false" />
            <img className="image" src={pochacco} alt="" draggable="false" />
        </div>
    </section >
}
export default Checklist