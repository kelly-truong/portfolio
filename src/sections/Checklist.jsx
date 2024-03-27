import react from 'react'
import './checklist.scss'
import pochacco from '../assets/pochacco.jpg'




const Checklist = () => {
    const track = document.getElementById("image-track")

    window.onmousedown = e => {
        track.dataset.mouseDownAt = e.clientX
    }

    window.onmouseup = () => {
        track.dataset.mouseDownAt = "0"
        track.dataset.prevPercentage = track.dataset.percentage
    }

    window.onmousemove = e => {
        if (track.dataset.mouseDownAt === "0") return

        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth / 2

        const percentage = (mouseDelta / maxDelta) * -100
        const nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage
        nextPercentage = Math.max(-100, Math.min(0, nextPercentage))

        track.dataset.percentage = nextPercentage

        track.animate({
            transform: `translate(${nextPercentage}%, -50%)`
        }, { duration: 1200, fill: "fowards" })

        for (const image of track.getElementsByClassName("image")) {
            image.animate({
                objectPosition: `${nextPercentage}% center`
            }, { duration: 1200, fill: "fowards" })
        }
    }

    return < section id='checklist' >
        <div className="image-track" data-mouse-down-at="0" data-prev-percentage="0">
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