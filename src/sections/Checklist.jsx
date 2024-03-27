import react, { useEffect, useRef } from 'react'
import './checklist.scss'
import pochacco from '../assets/pochacco.jpg'




const Checklist = () => {
    const trackRef = useRef(null);



    useEffect(() => {
        if (trackRef) {
            const updateMouseDownDataSet = (e) => {
                trackRef.current.dataset.mouseDownAt = e.clientX
            }


            const updateMouseUpDataSet = (e) => {
                trackRef.current.dataset.mouseDownAt = "0"
                trackRef.current.dataset.prevPercentage = trackRef.current.dataset.percentage
            }


            const updateMouseMove = (e) => {
                if (trackRef.current.dataset.mouseDownAt === "0") return

                let mouseDelta = parseFloat(trackRef.current.dataset.mouseDownAt) - e.clientX
                let maxDelta = window.innerWidth / 2

                const percentage = (mouseDelta / maxDelta) * -100
                let nextPercentage = parseFloat(trackRef.current.dataset.prevPercentage) + percentage
                nextPercentage = Math.max(-100, Math.min(0, nextPercentage))

                trackRef.current.dataset.percentage = nextPercentage

                trackRef.current.animate({
                    transform: `translate(${nextPercentage}%, -50%)`
                }, { duration: 1200, fill: "forwards" })

                for (const image of trackRef.current.getElementsByClassName("image")) {
                    image.animate({
                        objectPosition: `${nextPercentage}% center`
                    }, { duration: 1200, fill: "forwards" })
                }
            }

            window.addEventListener("mousedown", updateMouseDownDataSet)
            window.addEventListener("mouseup", updateMouseUpDataSet)
            window.addEventListener("mousemove", updateMouseMove)

            return () => {
                window.removeEventListener("mousedown", updateMouseDownDataSet)
                window.removeEventListener("mouseup", updateMouseUpDataSet)
                window.removeEventListener("mousemove", updateMouseMove)
            }
        }
    }, [trackRef])

    return <section id='checklist' >
        <div ref={trackRef} className="image-track clickable" data-mouse-down-at="0" data-prev-percentage="0">
            <img className="image" src={pochacco} alt="" draggable="false" />
            <img className="image" src={pochacco} alt="" draggable="false" />
            <img className="image" src={pochacco} alt="" draggable="false" />
            <img className="image" src={pochacco} alt="" draggable="false" />
            <img className="image" src={pochacco} alt="" draggable="false" />
            <img className="image" src={pochacco} alt="" draggable="false" />
            <img className="image" src={pochacco} alt="" draggable="false" />
            <img className="image" src={pochacco} alt="" draggable="false" />
        </div>
    </section >
}
export default Checklist